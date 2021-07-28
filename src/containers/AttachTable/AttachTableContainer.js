import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAttachList } from '../../modules/attach';

import AttachTable from '../../components/AttachTable/AttachTable';

const AttachTableContainer = () => {
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(({ attach }) => ({
    data: attach.loadAttachList.data,
    loading: attach.loadAttachList.loading,
    error: attach.loadAttachList.error
  }));

  const handleSelect = (event, id) => {
    const selectIndex = select.indexOf(id);
    let newSelect = [];

    if (selectIndex === -1) {
      newSelect = newSelect.concat(select, id);
    } else if (selectIndex === 0) {
      newSelect = newSelect.concat(select.slice(1));
    } else if (selectIndex === select.length - 1) {
      newSelect = newSelect.concat(select.slice(0, -1));
    } else if (selectIndex > 0) {
      newSelect = newSelect.concat(
        select.slice(0, selectIndex),
        select.slice(selectIndex + 1)
      );
    }

    setSelect(newSelect);
  };

  const handleSelectAll = event => {
    if (event.target.checked) {
      const newSelects = data.data.content.map(e => e.attachId);
      setSelect(newSelects);
      return;
    }

    setSelect([]);
  };

  const isSelected = id => select.indexOf(id) !== -1;

  useEffect(() => {
    const { direction, size, page } = { direction: 'ASC', size: 10, page: 1 };
    dispatch(loadAttachList({ direction, size, page }));
  }, [dispatch]);

  return (
    <AttachTable
      data={data}
      loading={loading}
      error={error}
      select={select}
      handleSelect={handleSelect}
      handleSelectAll={handleSelectAll}
      isSelected={isSelected}
    />
  );
};

export default AttachTableContainer;
