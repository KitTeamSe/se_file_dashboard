import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialize, loadAttachList } from '../../modules/attach';

import AttachTable from './AttachTable';

const AttachTableContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ attach }) => ({
    data: attach.loadAttachList.data,
    loading: attach.loadAttachList.loading,
    error: attach.loadAttachList.error
  }));

  useEffect(() => {
    dispatch(initialize());
  }, []);

  useEffect(() => {
    const { direction, size, page } = { direction: 'ASC', size: 10, page: 1 };
    dispatch(loadAttachList({ direction, size, page }));
  }, [dispatch]);

  return <AttachTable data={data} loading={loading} error={error} />;
};

export default AttachTableContainer;
