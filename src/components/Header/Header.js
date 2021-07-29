import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core';

const drawerWidth = 180;
const drawerHeight = 56;

const AppBarStyled = styled(AppBar)`
  position: fixed;
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding-left: ${props => props.open && `${drawerWidth}px`};
  box-shadow: 0px 1px 2px -1px rgb(0 0 0 / 10%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 4px 0px rgb(0 0 0 / 12%);
`;

const ToolbarStyled = styled(Toolbar)`
  height: ${drawerHeight}px;
  min-height: ${drawerHeight}px;
`;

const TitleLogo = styled(Typography)`
  padding-left: 24px;
  color: #000000;
  font-weight: 600;
  font-size: 1.5rem;
  cursor: default;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Header = props => {
  const { open, handleOpen } = props;

  return (
    <>
      <CssBaseline />
      <AppBarStyled open={open}>
        <ToolbarStyled>
          {open ? null : (
            <IconButton onClick={handleOpen}>
              <FontAwesomeIcon icon={faBars} size="sm" type="submit" />
            </IconButton>
          )}

          <TitleLogo>FILE DASHBOARD</TitleLogo>
        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
};

export default Header;
