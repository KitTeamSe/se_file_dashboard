import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import {
  initialize,
  initializeField,
  addAttach,
  loadAttachList,
  changeField
} from '../../modules/attach';

import FileAttachDropZone from '../../components/FileAttachDropZone/FileAttachDropZone';

const FileAttachContainer = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const { multipartFile, postId, replyId } = useSelector(
    ({ attach }) => ({
      multipartFile: attach.attach.multipartFile,
      postId: attach.attach.postId,
      replyId: attach.attach.replyId
    }),
    shallowEqual
  );

  const { data, loading, error } = useSelector(({ attach }) => ({
    data: attach.addAttach.data,
    loading: attach.addAttach.loading,
    error: attach.addAttach.error
  }));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMessageOpen = () => setMessageOpen(true);
  const handleMessageClose = () => setMessageOpen(false);

  const handleMultipartFile = files => {
    dispatch(
      changeField({
        key: 'multipartFile',
        value: files
      })
    );
  };

  const onChange = e => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        key: name,
        value
      })
    );
  };

  // const onSubmit = e => {
  //   e.preventDefault();
  //   dispatch(addAttach({ multipartFile, postId, replyId }));
  // };

  const onSubmit = e => {
    e.preventDefault();
    for (let i = 0; i < multipartFile.length; i += 1) {
      dispatch(addAttach({ multipartFile: multipartFile[i], postId, replyId }));
    }
  };

  useEffect(() => {
    if (data) {
      handleClose();
      handleMessageOpen();
      dispatch(dispatch(initializeField()));
    }
    if (error) {
      console.log(error);
    }
  }, [data, error, dispatch]);

  useEffect(() => {
    const { direction, size, page } = { direction: 'ASC', size: 100, page: 1 };
    dispatch(loadAttachList({ direction, size, page }));
  }, [data]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);

  const inputProps = {
    onChange,
    onSubmit,
    handleMultipartFile
  };

  const dropZoneProps = {
    open,
    handleOpen,
    handleClose
  };

  const storeProps = {
    multipartFile,
    postId,
    replyId,
    loading,
    error
  };

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
      <FileAttachDropZone {...inputProps} {...dropZoneProps} {...storeProps} />
      <Snackbar {...snackbarProps} />
    </>
  );
};

export default FileAttachContainer;
