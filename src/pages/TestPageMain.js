import React from 'react';
import styled from 'styled-components';

import HeaderContainer from '../containers/Header/HeaderContainer';
import SideMenuContainer from '../containers/SideMenu/SideMenuContainer';
import AttachTableContainer from '../containers/AttachTable/AttachTableContainer';
import FileAttachDropZoneContainer from '../containers/FileAttachDropZone/FileAttachDropZoneContainer';
import AttachDeleteContainer from '../containers/AttachDelete/AttachDeleteContainer';

const drawerWidth = 180;
const drawerHeight = 56;

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  overflow-x: hidden;
  flex-grow: 1;
  padding: 20px;
  padding-bottom: 0;
  margin: 0 ${drawerWidth}px;
  margin-top: ${drawerHeight}px;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

const TestPageSeBoard = () => (
  <>
    <Wrapper>
      <HeaderContainer />
      <SideMenuContainer />
    </Wrapper>
    <ContentWrapper>
      <AttachTableContainer />
      <ButtonWrapper>
        <FileAttachDropZoneContainer />
        <AttachDeleteContainer />
      </ButtonWrapper>
    </ContentWrapper>
  </>
);

export default TestPageSeBoard;
