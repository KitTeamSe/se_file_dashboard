import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAttachList } from '../../modules/attach';

import AttachTable from '../../components/AttachTable/AttachTable';

const AttachTableContainer = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ attach }) => ({
    data: attach.loadAttachList.data,
    loading: attach.loadAttachList.loading,
    error: attach.loadAttachList.error
  }));

  useEffect(() => {
    const { direction, size, page } = { direction: 'ASC', size: 100, page: 1 };
    dispatch(loadAttachList({ direction, size, page }));
  }, [dispatch]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <AttachTable data={data} loading={loading} error={error} />;
};

export default AttachTableContainer;
