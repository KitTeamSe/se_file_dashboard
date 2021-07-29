import React from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Checkbox
} from '@material-ui/core';

const AttachTableHead = props => {
  const { dataCount, selectCount, handleSelectAll } = props;
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={selectCount > 0 && selectCount < dataCount}
            checked={dataCount > 0 && dataCount === selectCount}
            onChange={handleSelectAll}
          />
        </TableCell>
        <TableCell>attachId</TableCell>
        <TableCell>downloadUrl</TableCell>
        <TableCell>fileName</TableCell>
        <TableCell>postId</TableCell>
        <TableCell>replyId</TableCell>
      </TableRow>
    </TableHead>
  );
};

const AttachTableBody = props => {
  const { data, loading, error, handleSelect, isSelected } = props;

  return (
    <TableBody>
      {!loading && data
        ? data.map(e => {
            const selected = isSelected(e.attachId);
            return (
              <TableRow
                key={`attach-${e.attachId}`}
                onClick={event => handleSelect(event, e.attachId)}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={selected} />
                </TableCell>
                <TableCell>{e.attachId}</TableCell>
                <TableCell>
                  <a href={e.downloadUrl}>{e.fileName}</a>
                </TableCell>
                <TableCell>{e.fileName}</TableCell>
                <TableCell>{e.postId}</TableCell>
                <TableCell>{e.replyId}</TableCell>
              </TableRow>
            );
          })
        : error}
    </TableBody>
  );
};

const AttachTable = props => {
  const {
    data,
    loading,
    error,
    handleSelect,
    select,
    handleSelectAll,
    isSelected
  } = props;

  return !loading && data ? (
    <TableContainer component={Paper}>
      <Table size="small">
        <AttachTableHead
          dataCount={data.length}
          selectCount={select.length}
          handleSelectAll={handleSelectAll}
        />
        <AttachTableBody
          data={data}
          loading={loading}
          error={error}
          handleSelect={handleSelect}
          isSelected={isSelected}
        />
      </Table>
    </TableContainer>
  ) : null;
};

export default AttachTable;
