import React from 'react';

const LogoutDialog = ({ onLogout }) => {
  return (
    <>
      <button type="submit" onClick={onLogout}>
        log out
      </button>
    </>
  );
};

export default LogoutDialog;
