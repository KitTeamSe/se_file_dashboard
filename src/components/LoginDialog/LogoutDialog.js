import React from 'react';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const LogoutDialog = ({ onLogout }) => {
  return (
    <>
      <MeetingRoomIcon
        fontSize="large"
        type="submit"
        onClick={onLogout}
        className="logout_button"
      />
    </>
  );
};

export default LogoutDialog;
