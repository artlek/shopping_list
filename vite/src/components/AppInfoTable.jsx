import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { GetAppVersion } from '../services/appVersion';

export function AppInfoTable() {
    const cellStyle = {
        border: '1px solid',
        borderColor: 'secondary.light',
    }
    const headStyle = {...cellStyle, fontWeight: 600, color: 'text.primary', minWidth: '100px' };
    const appVersion = GetAppVersion();

    return(
        <React.Fragment>
            <TableContainer sx={{ borderRadius: 0, mb: 3 }} elevation={0} className="app-info-table">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell sx={headStyle}>Application name</TableCell>
                            <TableCell sx={cellStyle}>Shopping List App</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={headStyle}>Version</TableCell>
                            <TableCell sx={cellStyle}>{appVersion}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={headStyle}>Release date</TableCell>
                            <TableCell sx={cellStyle}>2025-10-25</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={headStyle}>Author</TableCell>
                            <TableCell sx={cellStyle}>Artur Lekston</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}