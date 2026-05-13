import React from 'react';
import { User } from '../types/User';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.phoneNumber}</p>
      <p>{user.address}</p>
      <small>ID: {user.id}</small>
    </div>
  );
};