import React from 'react';

// import FileAttachFormContainer from './containers/FileAttachForm/FileAttachFormContainer';
import AttachTableContainer from './containers/AttachTable/AttachTableContainer';
import FileAttachDropZone from './containers/FileAttachDropZone/FileAttachDropZoneContainer';
import FileAttachFormContainer from './containers/FileAttachForm/FileAttachFormContainer';
import LoginDialogContainer from './containers/LoginDialog/LoginDialogContainer';

const App = () => (
  <>
    <LoginDialogContainer />
    <FileAttachDropZone />
    <FileAttachFormContainer />
    <AttachTableContainer />
  </>
);

export default App;
