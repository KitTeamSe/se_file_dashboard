import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const AttachTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell>attachId</TableCell>
      <TableCell>downloadUrl</TableCell>
      <TableCell>fileName</TableCell>
    </TableRow>
  </TableHead>
);

const AttachTableBody = props => {
  const { data, loading, error } = props;

  return (
    <TableBody>
      {!loading && data
        ? data.data.content.map(e => (
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>{e.attachId}</TableCell>
              <TableCell>
                <a href={e.downloadUrl}>{e.fileName}</a>
              </TableCell>
              <TableCell>{e.fileName}</TableCell>
            </TableRow>
          ))
        : error}
    </TableBody>
  );
};

const AttachTable = props => {
  const { data, loading, error } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <AttachTableHead />
        <AttachTableBody data={data} loading={loading} error={error} />
      </Table>
    </TableContainer>
  );
};

export default AttachTable;
