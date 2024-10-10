// src/components/FriendsList.js
import React from 'react';

const FriendsList = ({ friends }) => (
  <div className="friends-list">
    {friends.map((friend, index) => (
      <div key={index} className="friend">
        {friend}
      </div>
    ))}
  </div>
);

export default FriendsList;
