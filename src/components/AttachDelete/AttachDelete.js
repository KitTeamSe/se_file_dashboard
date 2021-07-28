import React from 'react';
import styled from 'styled-components';

import {
  CircularProgress,
  DialogActions,
  DialogContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText
} from '@material-ui/core';

const Typograpphy = styled.p`
  color: red;
`;

const AttachDelete = props => {
  const { select, loading, error, open } = props;
  const { handleOpen, handleClose, onDelete } = props;

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        disabled={!select.length}
        onClick={handleOpen}
      >
        파일 삭제
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>파일 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {loading ? (
              <CircularProgress />
            ) : (
              select.map(e => `${e}`).join(', ')
            )}
            <Typograpphy>{error ? error.message : null}</Typograpphy>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" color="secondary" onClick={onDelete}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AttachDelete;
