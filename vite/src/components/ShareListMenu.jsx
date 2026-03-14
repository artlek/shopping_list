import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function ShareListMenu({ url, onClick }) {
    const body = `Hi!%0A%20%0AI%20would%20like%20to%20share%20my%20shopping%20list%20with%20you.%20Check%20the%20link%20below%3A%0A%0A${encodeURIComponent(url)}`;
    const mail = `mailto:?subject=Shopping%20List%20App%20-%20sharing%20a%20shopping%20list&body=${body}`;
    const sms = `sms:?&body=${body}`;
    const whatsapp = `whatsapp://send?&text=${body}`;
    const shareListItems = [
        {
            id: 1,
            label: 'Email',
            icon: <InboxIcon />,
            href: mail,
        },
        {
            id: 2,
            label: 'SMS',
            icon: <DraftsIcon />,
            href: sms,
        },
        {
            id: 3,
            label: 'WhatsApp',
            icon: <WhatsAppIcon />,
            href: whatsapp,
        },
    ]
    
    const shareList = shareListItems.map((item) =>
        <React.Fragment key={item.id}>
            <ListItem disablePadding component="a" rel="noreferrer" href={item.href} onClick={()=>onClick()}>
                <ListItemButton>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText sx={{ color: 'text.primary' }} disableTypography primary={item.label} />
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    )

    return (
        <List>
            {shareList}
        </List>
    );
}