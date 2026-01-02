import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Box } from "@mui/material";

export function ChangelogTable() {
    const releases = [
        {
            version: '1.0.0',
            released: '2025-08-06',
            content: 'First app version'
        },
        {
            version: '1.1.0',
            released: '2026-01-02',
            content: 'New dialog has been added informing about the new version of the application'
        }
    ];

    return(
        <React.Fragment>
            <TableContainer sx={{ borderRadius: 0, mb: 3 }} elevation={0} className="app-info-table">
                <Table>
                    <TableBody>
                        {releases.map((release) => 
                            <TableRow key={release.version}>
                                <TableCell 
                                    sx={{
                                        border: '1px solid',
                                        borderColor: 'secondary.light',
                                        verticalAlign: 'top',
                                        fontWeight: 600, 
                                        color: 'text.primary', 
                                        width: '200px'
                                    }}>
                                    <Box>
                                        <Box component="span" fontWeight="600">Version: {release.version}</Box>
                                    </Box>
                                    <Box>
                                        <Box component="span" fontWeight="400">Released: {release.released}</Box>
                                    </Box>
                                </TableCell>
                                <TableCell 
                                    sx={{
                                        border: '1px solid',
                                        borderColor: 'secondary.light',
                                        verticalAlign: 'top',
                                    }}>
                                    {Array.isArray(release.content) 
                                        ? release.content.map((item, index) => <Box key={index}>{item}</Box>)
                                        : release.content
                                    }
                                </TableCell>
                            </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
    );
}