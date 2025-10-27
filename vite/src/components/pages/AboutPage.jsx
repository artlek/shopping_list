import PageHeader from '../PageHeader';
import Header from '../Header';
import { AppInfoTable } from '../AppInfoTable';
import { ChangelogTable } from '../ChangelogTable';
import { Typography } from '@mui/material';
import { ListItem } from '@mui/material';
import PageHeaderContent from '../PageHeaderContent';
import PageContent from '../PageContent';

export function AboutPage() {
    document.title = "About - Shopping List App";
    const listItemStyle = { display: 'list-item', listStylePosition: 'inside' };

    return(
        <>
            <PageHeader>
                <PageHeaderContent>
                    <Header header="About" />
                </PageHeaderContent>
            </PageHeader>
            <PageContent marginX={{ xs: 3, sm: 6 }} marginY={{ xs: 3, sm: 6 }}>
                <Typography component="p" pb={3}>
                    Shopping List App is a simple tool for creating and manage shopping lists. 
                    Its main feature is the ability to share the list with friends. 
                    The application does not require registration or login, so you can start using it immediately.
                    Shopping List App works in all modern web browsers.
                </Typography>        
                <Typography component="div" pb={3}>
                    <Typography component="h2" variant="overline">Main features</Typography>
                    <ListItem sx={listItemStyle}>simplicity and minimalism,</ListItem>
                    <ListItem sx={listItemStyle}>ability to share the list with friends,</ListItem>
                    <ListItem sx={listItemStyle}>no need to log in - all your informations are saved in local storage,</ListItem>
                    <ListItem sx={listItemStyle}>easy and quick marking of products as bought,</ListItem>
                    <ListItem sx={listItemStyle}>tracking who added a list or product and when.</ListItem>
                </Typography>
                <Typography component="h2" variant="overline">App info</Typography>
                <AppInfoTable />
                <Typography component="h2" variant="overline">Changelog</Typography>
                <ChangelogTable />
            </PageContent>                
        </>
    );
}