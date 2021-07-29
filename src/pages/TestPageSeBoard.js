import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../containers/Header/HeaderContainer';
import SideMenuContainer from '../containers/SideMenu/SideMenuContainer';

import FileAttachDropZone from '../containers/FileAttachDropZone/FileAttachDropZoneContainer';
import LoginDialogContainer from '../containers/LoginDialog/LoginDialogContainer';

const drawerWidth = 180;
const drawerHeight = 56;

const Container = styled.div`
  display: flex;
`;

const ContentContainer = styled.div`
  overflow-x: hidden;
  flex-grow: 1;
  margin: ${drawerHeight}px ${drawerWidth}px;
`;

const TestPageSeBoard = () => (
  <>
    <Container>
      <HeaderContainer />
      <SideMenuContainer />
    </Container>
    <ContentContainer>
      <FileAttachDropZone />
      <LoginDialogContainer />
    </ContentContainer>
  </>
);

export default TestPageSeBoard;
