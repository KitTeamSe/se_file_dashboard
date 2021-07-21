import React from 'react';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import styled from 'styled-components';

const LogoutDialog = props => {
  const { onLogout } = props;

  const logoutButton = styled.div`
    cursor: pointer;
  `;

  return (
    <logoutButton>
      <MeetingRoomIcon fontSize="large" type="submit" onClick={onLogout} />
    </logoutButton>
  );
};

export default LogoutDialog;
