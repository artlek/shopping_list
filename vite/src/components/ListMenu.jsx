
import * as React from 'react';
import { DeleteOutline } from "@mui/icons-material";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function ListMenu({ handleClickCopy, handleClickShare, handleClickDelete }) {
    const listMenuItems = [
        {
            id: 1,
            label: 'Copy link',
            icon: <ContentCopyIcon />,
            onClick: handleClickCopy,
        },
        {
            id: 2,
            label: 'Share list',
            icon: <ShareIcon />,
            onClick: handleClickShare,
        },
        {
            id: 3,
            label: 'Delete',
            icon: <DeleteOutline />,
            onClick: handleClickDelete,
        }
    ];

    const listMenu = listMenuItems.map((item) => 
        <React.Fragment key={item.id}>
            <ListItem sx={{ minWidth: '200px' }} disablePadding>
                <ListItemButton onClick={item.onClick} sx={{ justifyContent: 'flex-end', px: 3, py: 1.5 }} >
                    <ListItemIcon sx={{ minWidth: '34px' }}>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText disableTypography sx={{ fontSize: '1rem' }} primary={item.label} />
                </ListItemButton>
            </ListItem>
        </React.Fragment>
    );

    return (
        <List sx={{ bgcolor: '#ffffff' }} disablePadding className="list-menu">
            {listMenu}
        </List>
    );
}