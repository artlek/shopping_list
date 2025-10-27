import PageHeader from '../PageHeader';
import Header from '../Header';
import { Typography } from '@mui/material';
import { ListItem } from '@mui/material';
import PageContent from '../PageContent';
import PageHeaderContent from '../PageHeaderContent';

export function ManualPage() {
    document.title = "Manual - Shopping List App";
    return(
        <>  
            <PageHeader>
                <PageHeaderContent>
                    <Header header="Manual" />
                </PageHeaderContent>
            </PageHeader>
            <PageContent marginX={{ xs: 3, sm: 6 }} marginY={{ xs: 3, sm: 6 }}>
                <Typography component="h2" variant="overline">
                    Getting Started
                </Typography>
                <Typography component="p" pb={3}>
                    All informations the App needs will be saved in your device's local storage.
                    This means that the data will not be available on your other device. <br/>
                    When you first launch the application, a form will appear to enter your name.
                </Typography>

                <Typography component="h2" variant="overline">
                    Main menu
                </Typography>
                <Typography component="p" pb={3}>
                    In the upper right corner of the app you will find a menu button that contains navigation elements.
                    In wide mode main menu is displayed on the left side.
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        Home - main page,
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        Shopping lists - list of your shopping lists,
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        Manual - manual page thet contains all the informations on how to use the application,
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        About - a few words about the application, informations about version and author.
                    </ListItem>
                </Typography>

                <Typography component="h2" variant="overline">
                    Shopping list
                </Typography>
                <Typography component="p" lineHeight={1.75} pb={3} fontWeight={300}>
                    To add shopping list go to shopping lists page and select 'add list button'
                    in the lower right corner of the screen.
                    Fill correctly the form. The fields accept only letters, 
                    digits and marks like: dash, underscore, bracket, dot and coma.
                    Description field is not require.
                    Minimum number of characters for both fields is two.
                    The list item contains list name, description, time of adding and user's name.
                    On the right side of a list you can find the action menu:
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        Copy link - copies the list link to clipboard. You can send it to a friend,
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        Share list - enables sharing list by email, SMS or WhatsApp,
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStylePosition: 'inside' }}>
                        Delete list - deletes list from the device (also from all users' devices).
                    </ListItem>
                </Typography>

                <Typography component="h2" variant="overline">
                    Product list
                </Typography>
                <Typography component="p" lineHeight={1.75} pb={3} fontWeight={300}>
                    On product list page you can manage all purchased products. 
                    To add a product to the list click on 'add product' link and fill the form.
                    The fields accept only letters, digits and marks like: dash, underscore, bracket, dot and coma.
                    Description field is not require.
                    Minimum number of characters for both fields is two.
                    When at least one product is added, a filter buttons will appear.
                    On the right side of the product item there are two controls. 
                    Trash icon deletes a product. Check icon marks a product as bought/to bought.
                </Typography>
            </PageContent>
        </>
    );
}