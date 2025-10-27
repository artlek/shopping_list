import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export function Logo({ firstColor='background.none', secondColor='primary.light', fontSize='1.4rem' }) {
    return(
        <Box 
            sx={{
                textTransform: 'uppercase',
                padding: '8px',
                textAlign: 'center'
            }}
            className="logo"
        >
            <Typography component="span" letterSpacing="3px" fontSize={fontSize} fontWeight="300" color={firstColor}>shopping</Typography>
            <Typography component="span" letterSpacing="3px" fontSize={fontSize} fontWeight="800" color={secondColor}>list</Typography>
        </Box>
    )
}