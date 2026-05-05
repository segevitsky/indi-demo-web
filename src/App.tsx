import React from 'react';
import './App.css';
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Indi Demo - User Management</h1>
      </header>
      <UserList />
    </div>
  );
}

export default App;
