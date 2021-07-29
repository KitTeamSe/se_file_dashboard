import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const drawerWidth = 180;
const drawerHeight = 56;

const DrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: ${drawerWidth}px;
  height: ${drawerHeight}px;
  padding-right: 6px;
`;

const menuData = [
  { key: '', name: '전체' },
  { key: 'seboard', name: 'SE 게시판' },
  { key: 'pickple', name: 'Pickple' }
];

const SideMenu = props => {
  const { open, handleClose } = props;

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleClose}>
          <FontAwesomeIcon icon={faArrowLeft} size="sm" type="submit" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {menuData.map(e => (
          <ListItem button component={Link} to={`/${e.key}`} key={e.key}>
            <ListItemText primary={e.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;
