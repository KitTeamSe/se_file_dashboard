import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

const LogoutDialog = props => {
  const { onLogout } = props;

  const LogoutButton = styled.div`
    cursor: pointer;
  `;

  return (
    <LogoutButton>
      <FontAwesomeIcon
        icon={faDoorOpen}
        size="3x"
        type="submit"
        onClick={onLogout}
      />
    </LogoutButton>
  );
};

export default LogoutDialog;
