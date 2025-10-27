import Typography from '@mui/material/Typography';
import PageHeader from '../PageHeader';
import PageContent from '../PageContent';
import PageHeaderContent from '../PageHeaderContent';
import { GetUserName } from '../../services/localStorage';
import Header from '../Header';
import Box from '@mui/material/Box';

export function HomePage() {
    document.title = "Shopping List App";
    const userName = GetUserName();
    const header = 'Hello' + (userName ? ', ' + userName + '!' : '!');

    return(
        <>
            <PageHeader>
                <PageHeaderContent>
                    <Header header={header} />
                </PageHeaderContent>
            </PageHeader>
            <PageContent marginX={{ xs: 3, sm: 3 }} marginY={{ xs: 3, sm: 3 }}>
                <Typography variant="h2" lineHeight={3} fontSize={20}>
                    Welcome to Shopping List App! 👋
                </Typography>
                <Typography fontSize={36} fontWeight={600}>
                    The
                    <Box component="span" color="primary.light" >
                        &nbsp;simple and minimalist&nbsp;
                    </Box>
                    <Box component="span">
                        app to manage shopping lists.
                    </Box>
                </Typography>
            </PageContent>                
        </>
    );
}