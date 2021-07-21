import React, { useState } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

const LoginDialog = props => {
  const { onSubmit, onChange, form, error } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AccountCircleIcon
        fontSize="large"
        type="submit"
        onClick={handleClickOpen}
        className="login_button"
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>관리자 로그인</DialogTitle>
        <DialogContent>
          <DialogContentText>아이디 admin</DialogContentText>
          <DialogContentText>비밀번호 se75407540</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            fullWidth
            variant="standard"
            id="id"
            name="id"
            label="ID"
            onChange={onChange}
            value={form.id}
            type="id"
          />
          <TextField
            margin="dense"
            fullWidth
            variant="standard"
            id="pw"
            name="pw"
            label="PW"
            onChange={onChange}
            value={form.pw}
            type="password"
          />
          <div>{error}</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={onSubmit}>로그인</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginDialog;
