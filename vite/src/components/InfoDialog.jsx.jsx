import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function InfoDialog({ message, title,openInfoDialog, handleCloseInfoDialog}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Dialog
                className="InfoDialog"
                maxWidth="xs"
                fullScreen={fullScreen}
                open={openInfoDialog}
                onClose={handleCloseInfoDialog}
                aria-labelledby="info-dialog-title"
            >
                <DialogTitle
                    id="info-dialog-title"
                    sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    {title}
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
                </DialogContent>
                <DialogActions
                    sx={{
                        p: 2
                    }}
                >
                <Button
                    variant='contained'
                    onClick={handleCloseInfoDialog}
                >
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
