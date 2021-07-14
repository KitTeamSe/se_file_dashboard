import React from 'react';

const AttachTableHead = () => (
  <thead>
    <tr>
      <th>attachId</th>
      <th>downloadUrl</th>
      <th>fileName</th>
    </tr>
  </thead>
);

const AttachTableBody = props => {
  const { data, loading, error } = props;

  return (
    <tbody>
      {!loading && data
        ? data.data.content.map(e => (
            <tr>
              <td>{e.attachId}</td>
              <td>
                <a href={e.downloadUrl}>{e.fileName}</a>
              </td>
              <td>{e.fileName}</td>
            </tr>
          ))
        : error}
    </tbody>
  );
};

const AttachTable = props => {
  const { data, loading, error } = props;

  return (
    <table>
      <AttachTableHead />
      <AttachTableBody data={data} loading={loading} error={error} />
    </table>
  );
};

export default AttachTable;
