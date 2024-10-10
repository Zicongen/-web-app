// src/App.js
import React from 'react';
import Profile from './components/Profile';
import Menu from './components/Menu';
import FriendsList from './components/FriendsList';
import ChatWindow from './components/ChatWindow';

const App = () => {
  const friends = ['Sadik Jami', 'Rafi Islam', 'Hasem Ali'];
  const messages = ['Are you there?', 'Yes! Thank You.'];

  return (
    <div className="app">
      <Menu />
      <Profile name="Saleh Ahmed" message="Hello, This is Saleh Ahmed. I develop this app. This app helps people to keep their privacy secure." />
      <FriendsList friends={friends} />
      <ChatWindow messages={messages} />
    </div>
  );
};

export default App;
