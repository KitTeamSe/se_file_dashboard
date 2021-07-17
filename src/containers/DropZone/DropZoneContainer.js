import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { initialize, addAttach, changeField } from '../../modules/attach';

import DropZone from '../../components/DropZone/DropZone';

const DropZoneContainer = () => {
  const dispatch = useDispatch();
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

  const handleMultipartFile = files => {
    dispatch(
      changeField({
        key: 'multipartFile',
        value: files
      })
    );
  };

  const onChange = e => {
    const { name, files } = e.target;
    dispatch(
      changeField({
        key: name,
        value: files
      })
    );
  };

  const onSubmit = async e => {
    e.preventDefault();
    await dispatch(addAttach({ multipartFile, postId, replyId }));
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
    console.log(multipartFile);
    console.log(postId);
    console.log(replyId);
  }, [multipartFile, postId, replyId]);

  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, []);

  return (
    <DropZone
      multipartFile={multipartFile}
      postId={postId}
      replyId={replyId}
      onChange={onChange}
      onSubmit={onSubmit}
      data={data}
      loading={loading}
      error={error}
      handleMultipartFile={handleMultipartFile}
    />
  );
};

export default DropZoneContainer;
