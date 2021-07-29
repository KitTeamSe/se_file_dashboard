import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import {
  initialize,
  loadAttachList,
  removeAttach,
  changeSelect
} from '../../modules/attach';

import AttachDelete from '../../components/AttachDelete/AttachDelete';

const AttachDeleteContainer = () => {
  const [open, setOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const dispatch = useDispatch();
  const { data, loading, error, select } = useSelector(({ attach }) => ({
    data: attach.removeAttach.data,
    loading: attach.removeAttach.loading,
    error: attach.removeAttach.error,
    select: attach.select
  }));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMessageOpen = () => setMessageOpen(true);
  const handleMessageClose = () => setMessageOpen(false);

  const onDelete = () => {
    for (let i = 0; i < select.length; i += 1) {
      dispatch(removeAttach({ id: select[i] }));
    }
  };

  useEffect(() => {
    if (data) {
      const { direction, size, page } = { direction: 'ASC', size: 15, page: 1 };
      dispatch(loadAttachList({ direction, size, page }));
      dispatch(changeSelect({ select: [] }));
      handleMessageOpen();
      handleClose();
    }
    if (error) {
      console.log(error);
    }
  }, [data, error, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);
  const snackbarProps = {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    open: messageOpen,
    onClose: handleMessageClose,
    message: data ? data.message : null
  };

  return (
    <>
      <AttachDelete
        data={data}
        loading={loading}
        error={error}
        select={select}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        onDelete={onDelete}
      />
      <Snackbar {...snackbarProps} />
    </>
  );
};

export default AttachDeleteContainer;
