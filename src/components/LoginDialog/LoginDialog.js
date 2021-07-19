import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const LoginDialog = ({ onSubmit, onChange, form }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Log In
        </Button>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>취소</Button>
            <Button onClick={(handleClose, onSubmit)}>로그인</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default LoginDialog;
