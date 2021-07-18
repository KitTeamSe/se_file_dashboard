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
  FormControl
} from '@material-ui/core';

const getColor = props => {
  if (props.isDragAccept) {
    return '#00e676';
  }
  if (props.isDragReject) {
    return '#ff1744';
  }
  if (props.isDragActive) {
    return '#2196f3';
  }
  if (props.multipartFile.length) {
    return '#000000';
  }
  return '#cccccc';
};

const getComment = props => {
  if (props.isDragAccept) {
    return '✅ 파일 추가';
  }
  if (props.isDragReject) {
    return '❌ 파일 업로드 불가 파일이 제외됩니다';
  }
  if (props.isDragActive) {
    return '⛔ 드래그 활성화 안됨';
  }
  if (props.multipartFile.length) {
    return props.multipartFile.map(file => (
      <li key={file.path}>파일 : {file.path}</li>
    ));
  }
  return '파일을 드래그 앤 드롭 하거나 클릭하여 선택하세요.';
};

const getAlign = props => {
  if (
    props.multipartFile.length &&
    !props.isDragAccept &&
    !props.isDragReject &&
    !props.isDragActive
  ) {
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

const DropZone = props => {
  const { multipartFile, loading, error, handleMultipartFile } = props;
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
      <h4>{error ? '잘못된 파일이거나 파일이 없습니다.' : null}</h4>
    </>
  );
};

const FormDialog = props => {
  const { open, handleOpen, handleClose, onSubmit, children } = props;

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
              <Button variant="outlined" color="secondary" type="submit">
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
  const { onSubmit, handleMultipartFile } = props;
  const { loading, error, multipartFile, postId, replyId } = props;

  return (
    <FormDialog
      open={open}
      handleClose={handleClose}
      onSubmit={onSubmit}
      handleOpen={handleOpen}
    >
      <DropZone
        handleMultipartFile={handleMultipartFile}
        loading={loading}
        error={error}
        multipartFile={multipartFile}
      />
      <aside>
        <h4>{postId}</h4>
        <h4>{replyId}</h4>
      </aside>
    </FormDialog>
  );
};

export default FileAttachDropZone;
