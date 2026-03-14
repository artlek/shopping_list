import PageHeaderContent from '../PageHeaderContent';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import Header from '../Header';
import no_page from './../../assets/no_page.png';
import { Box, Typography } from '@mui/material';

export function NotFound() {
    document.title = "Not found - Shopping List App";
    return(
        <>
            <PageHeader>
                <PageHeaderContent>
                    <Header header="Page not found" />
                </PageHeaderContent>
            </PageHeader>
            <PageContent marginX={{ xs: 3, sm: 6 }} marginY={{ xs: 9, sm: 6 }} maxWidth='100%'>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img width="100px" height="100px" src={no_page} alt="page not found" loading="lazy" />
                    <Typography align="center" variant="h2" color="light.darker">404 page not found</Typography>
                </Box>
            </PageContent>
        </>
    );
}