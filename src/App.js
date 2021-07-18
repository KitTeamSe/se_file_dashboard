import React from 'react';

// import FileAttachFormContainer from './containers/FileAttachForm/FileAttachFormContainer';
import AttachTableContainer from './containers/AttachTable/AttachTableContainer';
import FileAttachDropZone from './containers/FileAttachDropZone/FileAttachDropZoneContainer';

const App = () => (
  <>
    {/* <FileAttachFormContainer /> */}
    <FileAttachDropZone />
    <AttachTableContainer />
  </>
);

export default App;
