import Box from '@mui/material/Box';
import no_item from './../assets/no_item.png';
import { Typography } from '@mui/material';

export function NoItems() {
    return(
        <Box 
            sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}
            mt="10vh"
            className="no-items"
        >
            <img width="100px" height="100px" src={no_item} alt="no items" loading="lazy" />
            <Typography align="center" m="10px" variant="h2" color="light.darker">no items</Typography>
        </Box>
    );
}