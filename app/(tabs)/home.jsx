import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import 'text-encoding';

const home = () => {
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [username, setUsername] = useState('User'); // Example username

  useEffect(() => {
    const socket = new SockJS('http://192.168.2.29:8080/ws');
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => onConnected(client),
      onStompError: onError,
    });
    setStompClient(client);
  }, []);

  const onConnected = (client) => {
    client.subscribe('/topic/public', (message) => {
      console.log('Received message:', message.body);
      const receivedMessage = JSON.parse(message.body);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });
    client.publish({ destination: '/app/chat.addUser', body: JSON.stringify({ sender: username, type: 'JOIN' }) });
  };

  const onError = (error) => {
    console.error('STOMP Error:', error);
  };

  useEffect(() => {
    if (stompClient) {
      stompClient.activate();
    }

    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, [stompClient]);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      stompClient.publish({
        destination: '/app/chat/sendMessage',
        body: JSON.stringify({
          message: inputMessage,
          sender: username,
          type: 'CHAT',
        }),
      });
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageSender}>{item.sender}:</Text>
            <Text>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        value={inputMessage}
        onChangeText={setInputMessage}
        placeholder="Type a message..."
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  messageSender: {
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

export default home;
