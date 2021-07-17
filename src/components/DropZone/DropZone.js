import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const DropzoneDiv = styled.div``;

const DropZone = props => {
  const { multipartFile, postId, replyId, handleMultipartFile } = props;
  const { onSubmit } = props;
  const { data, loading, error } = props;

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone();

  const files = multipartFile.map(file => (
    <li key={file.path}>파일 : {file.path}</li>
  ));

  useEffect(() => {
    handleMultipartFile(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <form onSubmit={onSubmit}>
      <DropzoneDiv {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag drop some files here, or click to select files</p>
        )}
      </DropzoneDiv>
      <input type="submit" />
      <aside>
        <h4>Files 목록</h4>
        <ul>{files}</ul>
        <h4>postId : {postId}</h4>
        <h4>replyId : {replyId}</h4>
        <h4>code : {data ? data.message : null}</h4>
        <h4>loading : {loading ? 'loading...' : 'complete'}</h4>
        <h4>error : {error ? 'error' : 'ok'}</h4>
        <br />
      </aside>
    </form>
  );
};

export default DropZone;
