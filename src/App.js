import React from 'react';

import AttachTableContainer from './containers/AttachTable/AttachTableContainer';
import FileAttachFormContainer from './containers/FileAttachForm/FileAttachFormContainer';
import LoginDialogContainer from './containers/LoginDialog/LoginDialogContainer';

const App = () => (
  <>
    <LoginDialogContainer />
    <FileAttachFormContainer />
    <AttachTableContainer />
  </>
);

export default App;
