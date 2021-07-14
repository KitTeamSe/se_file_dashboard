import React, { useEffect, useState } from 'react';

const FileAttachForm = () => {
  const [files, setFiles] = useState();

  const handleChange = e => {
    const newFiles = e.target.files;
    // e.target.files.forEach(file => formData.append(`files`, file));
    setFiles(newFiles);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append(`files`, files[i]);
    }
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="files"
        name="files"
        type="file"
        multiple
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
};

export default FileAttachForm;
