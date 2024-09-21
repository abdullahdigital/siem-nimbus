import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const LogTable = ({ logs }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Timestamp</TableCell>
            <TableCell>Source IP</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs
            .filter(log => log.status === 'malicious') 
            .map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.id}</TableCell>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.sourceIP}</TableCell>
                <TableCell>{log.event}</TableCell>
                <TableCell>{log.status}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LogTable;
