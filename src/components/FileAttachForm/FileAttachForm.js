import React from 'react';

const FileAttachForm = props => {
  const { onChange, onSubmit, data, loading, error } = props;

  return (
    <form onSubmit={onSubmit}>
      <input
        id="multipartFile"
        name="multipartFile"
        type="file"
        multiple
        onChange={onChange}
      />
      <input type="submit" />
      {!loading && data ? data : error}
    </form>
  );
};

export default FileAttachForm;
