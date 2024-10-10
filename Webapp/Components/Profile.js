// src/components/Profile.js
import React from 'react';

const Profile = ({ name, message }) => (
  <div className="profile">
    <h2>{name}</h2>
    <p>{message}</p>
    <button>Message</button>
  </div>
);

export default Profile;
