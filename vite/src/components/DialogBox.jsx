import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

export default function DialogBox({ title, content, actions, open, onClose }) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down(500));

    return(
        <React.Fragment>
            <Dialog 
                sx={{ '.MuiPaper-root': { p: 2, width: '500px', bgcolor: 'background.default' } }}
                fullScreen={fullScreen}
                open={open}
                onClose={()=>onClose()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle component="span" display="flex" flexDirection="row" alignItems="flex-start" id="alert-dialog-title">
                    <Typography component="h2" flexGrow="1" fontWeight="bold" fontSize="1.8rem" color="text.secondary">
                        {title}
                    </Typography>
                    <IconButton sx={{ ml: 1 }} onClick={()=>onClose()}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText component="div" id="alert-dialog-description">
                        <Typography component="div" fontSize="1.1rem" pt={3}>
                            {content}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: 2 }}>
                    {actions}
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}