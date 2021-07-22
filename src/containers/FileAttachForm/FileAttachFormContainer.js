import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, addAttach, changeField } from '../../modules/attach';

import FileAttachForm from '../../components/FileAttachForm/FileAttachForm';

const AttachTableContainer = () => {
  const [postId, setPostId] = useState();
  const [replyId, setReplyId] = useState();

  const dispatch = useDispatch();
  const { multipartFile, data, loading, error } = useSelector(({ attach }) => ({
    multipartFile: attach.attach.multipartFile,
    data: attach.addAttach.data,
    loading: attach.addAttach.loading,
    error: attach.addAttach.error
  }));

  const onChange = e => {
    const { name, files } = e.target;
    dispatch(
      changeField({
        key: name,
        value: files
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addAttach({ multipartFile, postId, replyId }));
  };

  useEffect(() => {
    if (data) {
      console.log(data);
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

  // const formProps = {
  //   onChange,
  //   onSubmit
  // };

  // const stateProps = {
  //   postId,
  //   replyId,
  //   setPostId,
  //   setReplyId
  // };

  return (
    <FileAttachForm
      data={data}
      loading={loading}
      error={error}
      onChange={onChange}
      onSubmit={onSubmit}
      postId={postId}
      replyId={replyId}
      setPostId={setPostId}
      setReplyId={setReplyId}
    />
  );
};

export default AttachTableContainer;
