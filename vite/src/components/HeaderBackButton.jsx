import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

export default function HeaderBackButton({ onClick }) {
    return(
        <Box display="flex" alignItems="center" className="header-back-button">
            <IconButton onClick={onClick}>
                <ArrowBackIcon sx={{ fontSize: '32px', color: 'text.secondary' }} />
            </IconButton>
        </Box>
    );
}