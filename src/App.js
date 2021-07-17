import React from 'react';

import DropZoneContainer from './containers/DropZone/DropZoneContainer';
import AttachTableContainer from './containers/AttachTable/AttachTableContainer';
// import FileAttachFormContainer from './containers/FileAttachForm/FileAttachFormContainer';

const App = () => (
  <>
    <DropZoneContainer />
    {/* <FileAttachFormContainer /> */}
    <AttachTableContainer />
  </>
);

export default App;
