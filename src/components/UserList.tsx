import React, { useEffect, useState } from 'react';
import { User } from '../types/User';
import { getUsers } from '../api/users';
import { UserProfile } from './UserProfile';

export const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getUsers()
      .then((data) => {
        if (!cancelled) {
          setUsers(data);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="user-list">
      <h2>Users</h2>
      {loading && <p>Loading...</p>}
      {error && !loading && <p className="user-list-error">Error: {error}</p>}
      {!loading && !error && users.length === 0 && <p>No users found.</p>}
      {!loading &&
        !error &&
        users.map((user) => <UserProfile key={user.id} user={user} />)}
    </div>
  );
};
