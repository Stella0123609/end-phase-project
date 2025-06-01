import React, { useContext } from 'react';
import { AuthContext } from '../components/auth/AuthProvider';

function ProfilePage() {
  const { token, logout } = useContext(AuthContext);

  return (
    <div className="p-4">
      <h2>Profile</h2>
      {token ? (
        <>
          <p>Logged in user</p>
          <button onClick={logout} className="bg-red-500 text-white p-2">Logout</button>
        </>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default ProfilePage;