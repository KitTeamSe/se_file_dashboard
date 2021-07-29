import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../containers/Header/HeaderContainer';
import SideMenuContainer from '../containers/SideMenu/SideMenuContainer';
import AttachTableContainer from '../containers/AttachTable/AttachTableContainer';
import FileAttachFormContainer from '../containers/FileAttachForm/FileAttachFormContainer';

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
      <AttachTableContainer />
      <FileAttachFormContainer />
    </ContentContainer>
  </>
);

export default TestPageSeBoard;
