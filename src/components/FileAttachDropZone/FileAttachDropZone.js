import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

import {
  CircularProgress,
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  TextField
} from '@material-ui/core';

const getColor = props => {
  const { isDragAccept, isDragReject, isDragActive, multipartFile } = props;
  if (isDragAccept) {
    return '#00e676';
  }
  if (isDragReject) {
    return '#ff1744';
  }
  if (isDragActive) {
    return '#2196f3';
  }
  if (multipartFile.length) {
    return '#000000';
  }
  return '#cccccc';
};

const getComment = props => {
  const { isDragAccept, isDragReject, isDragActive, multipartFile } = props;
  if (isDragAccept) {
    return '✅ 파일 추가';
  }
  if (isDragReject) {
    return '❌ 파일 업로드 불가 파일이 제외됩니다';
  }
  if (isDragActive) {
    return '⛔ 드래그 활성화 안됨';
  }
  if (multipartFile.length) {
    return props.multipartFile.map(file => (
      <li key={file.path}>파일 : {file.path}</li>
    ));
  }
  return '파일을 드래그 앤 드롭 하거나 클릭하여 선택하세요.';
};

const getAlign = props => {
  const { isDragAccept, isDragReject, isDragActive, multipartFile } = props;
  if (multipartFile.length && !isDragAccept && !isDragReject && isDragActive) {
    return 'flex-start';
  }
  return 'center';
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: ${props => getAlign(props)};
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const FormControlStyled = styled(FormControl)`
  min-width: 500px;
`;

const Typograpphy = styled.p`
  color: red;
`;

const DropZone = props => {
  const { multipartFile, postId, replyId, loading, error } = props;
  const { handleMultipartFile, onChange } = props;
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept: 'image/*'
  });

  useEffect(() => {
    handleMultipartFile(acceptedFiles);
  }, [acceptedFiles]);

  return (
    <>
      <Container
        {...getRootProps({
          isDragActive,
          isDragAccept,
          isDragReject,
          multipartFile
        })}
      >
        <input {...getInputProps()} />
        {loading ? (
          <CircularProgress />
        ) : (
          getComment({
            isDragActive,
            isDragAccept,
            isDragReject,
            multipartFile
          })
        )}
      </Container>
      <TextField
        id="postId"
        name="postId"
        placeholder="postId"
        value={postId}
        onChange={onChange}
      />
      <TextField
        id="replyId"
        name="replyId"
        placeholder="replyId"
        value={replyId}
        onChange={onChange}
      />
      <Typograpphy>{error ? error.message : null}</Typograpphy>
    </>
  );
};

const FormDialog = props => {
  const { multipartFile, open } = props;
  const { handleOpen, handleClose, onSubmit } = props;
  const { children } = props;

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        파일 첨부
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>파일첨부</DialogTitle>
        <form encType="multipart/form-data" method="post" onSubmit={onSubmit}>
          <FormControlStyled>
            <DialogContent dividers>{children}</DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
              >
                취소
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                disabled={!multipartFile.length}
              >
                추가
              </Button>
            </DialogActions>
          </FormControlStyled>
        </form>
      </Dialog>
    </>
  );
};

const FileAttachDropZone = props => {
  const { open, handleOpen, handleClose } = props;
  const { onSubmit, onChange, handleMultipartFile } = props;
  const { loading, error, multipartFile, postId, replyId } = props;

  return (
    <FormDialog
      multipartFile={multipartFile}
      open={open}
      handleClose={handleClose}
      onSubmit={onSubmit}
      handleOpen={handleOpen}
    >
      <DropZone
        handleMultipartFile={handleMultipartFile}
        onChange={onChange}
        postId={postId}
        replyId={replyId}
        loading={loading}
        error={error}
        multipartFile={multipartFile}
      />
    </FormDialog>
  );
};

export default FileAttachDropZone;
