import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../containers/Header/HeaderContainer';
import SideMenuContainer from '../containers/SideMenu/SideMenuContainer';

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

const TestPagePickple = () => (
  <>
    <Container>
      <HeaderContainer />
      <SideMenuContainer />
    </Container>
    <ContentContainer>
      <h1>픽플입니다</h1>
    </ContentContainer>
  </>
);

export default TestPagePickple;
