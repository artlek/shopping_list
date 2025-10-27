import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import { Link } from "react-router";
import ListItemText from '@mui/material/ListItemText';
import { getColor } from "../services/getColor";
import { Divider } from "@mui/material";
import { Box } from '@mui/material';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ListMenu from './ListMenu';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { generateUrl } from "./api/generateUrl";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import ShareListMenu from "./ShareListMenu";
import { DeleteShoplistFromLocalStorage } from '../services/localStorage';
import { GetAllShoplistsFromLocalStorage } from '../services/localStorage';
import DialogBox from './DialogBox';
import ListItemContent from './ListItemContent';
import ListItemFirstLine from './ListItemFirstLine';
import ListItemSecondLine from './ListItemSecondLine';
import ListItemThirdLine from './ListItemThirdLine';

export default function ShoppinglistItem({ list, setLocalStorageUuidList }) {
    const color = getColor(list.name);
    const date = new Date(list.date);
    dayjs.extend(relativeTime);
    const colon = window.location.port ? ':' : '';
    const url = window.location.protocol+'//'+window.location.hostname+colon+window.location.port+window.location.pathname+'#/list/'+list.uuid;

    // handles copy list snack bar
    const [openCopySnackbar, setOpenCopySnackbar] = useState(false);
    const handleCloseCopySnackbar = () => {
        setOpenCopySnackbar(false);
    };
    const handleClickCopySnackbar = () => {
        setOpenCopySnackbar(true);
    };
    const handleClickCopy = () => {
        handleCloseListMenu();
        navigator.clipboard.writeText(url);
        handleClickCopySnackbar();
    };

    // handles share list menu
    const [openShareDialog, setOpenShareDialog] = useState(false);
    const handleCloseShareDialog = () => {
        setOpenShareDialog(false);
        handleCloseListMenu();
    };
    const handleClickShare = () => {
        handleCloseListMenu();
        setOpenShareDialog(true);
    };

    // handles delete list menu
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const handleClickDelete = () => {
        handleCloseListMenu();
        handleClickOpenDeleteDialog();
    };
    const handleClickOpenDeleteDialog = () => {    
        setOpenDeleteDialog(true);
    };
    const handleDelete = () => {
        if(deleteList(list.uuid)) {
            DeleteShoplistFromLocalStorage(list.uuid);
            setLocalStorageUuidList(GetAllShoplistsFromLocalStorage);
        };
        setOpenDeleteDialog(false);
    }
    const handleCloseDeleteDialog = () => {
        setOpenDeleteDialog(false);
    };

    async function deleteList(uuid) {
        try {
            const response = await fetch(generateUrl('shoppinglists/delete/')+uuid, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log(`${response.status} - list deleted successfully`);
            } else {
                console.error('Failed to delete post. Status:', response.status);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }

    // handles list menu
    const [anchorListMenu, setAnchorListMenu] = useState(false);
    const open = Boolean(anchorListMenu);
    const id = open ? 'list-menu' : undefined;
    const handleClickListMenu = (event) => {
        setAnchorListMenu(event.currentTarget);
    };
    const handleCloseListMenu = () => {
        setAnchorListMenu(null);
    };

    return(
        <>
            <ListItem sx={{ my: 1, p: 0, pr: 1, display: 'flex', flexDirection: 'row', minWidth: '180px', bgcolor: 'background.default', borderRadius: 2 }} className="shopping-list-item">
                <ListItemButton 
                    sx={{ 
                        minHeight: '95px',
                        px: 2, display: 'flex',
                        '&:hover': { background: 'none' } 
                    }}
                    component={Link} 
                    to={{ pathname: `/list/${list.uuid}` }}>
                    <ListItemAvatar>
                        <Avatar
                            sx={{ 
                                borderRadius: '8px',
                                fontSize: '1.5rem',
                                bgcolor: color,
                                mr: 2,
                                width: '3.5rem',
                                height: '3.5rem' 
                            }} 
                        >
                            {list.name.trim().substring(0, 1).toUpperCase()}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                        <ListItemContent>
                            <ListItemFirstLine>
                                {list.name}
                            </ListItemFirstLine>
                            <ListItemSecondLine>
                                {list.description}
                            </ListItemSecondLine>
                            <ListItemThirdLine>
                                {list.user ? list.user : null}&nbsp;|&nbsp;{dayjs(date).fromNow()}
                            </ListItemThirdLine>                           
                        </ListItemContent>
                    </ListItemText>
                </ListItemButton>
                
                <IconButton
                    sx={{ display: 'flex' }} 
                    id="list-menu-button"
                    aria-controls={open ? "list-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    variant="contained"
                    onClick={handleClickListMenu}
                >
                    <MoreVertIcon sx={{ color: 'secondary.dark' }} />
                </IconButton>

                <Menu
                    sx={{ '.MuiPaper-elevation': { bgcolor: '#ffffff' } }}
                    id="list-menu"
                    anchorEl={anchorListMenu}
                    open={open}
                    onClose={handleCloseListMenu}
                    slotProps={{ list: { 'aria-labelledby': 'list-menu-button' } }}
                >
                    <ListMenu handleClickCopy={handleClickCopy} handleClickShare={handleClickShare} handleClickDelete={handleClickDelete} />
                </Menu>

            </ListItem>

            <Snackbar open={openCopySnackbar} autoHideDuration={2500} onClose={handleCloseCopySnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                <Alert onClose={handleCloseCopySnackbar} severity="success" variant="filled">Link to shopping list was copied to clipboard.</Alert>
            </Snackbar>

            <DialogBox 
                title={list.name} 
                content={<ShareListMenu url={url} onClick={handleCloseShareDialog} />} 
                open={openShareDialog} onClose={handleCloseShareDialog} 
            />

            <DialogBox 
                title={list.name} 
                content="Are you sure you want to delete the shopping list?" 
                actions={
                    <Box width="100%" sx={{ gap: 1, display: 'flex' }}>
                        <Button sx={{ flexGrow: 1 }} variant="outlined" size="large" onClick={handleCloseDeleteDialog}>Cancel</Button>
                        <Button sx={{ flexGrow: 1 }} variant="contained" size="large" onClick={handleDelete} color="error">Delete</Button>
                    </Box>
                }
                open={openDeleteDialog} 
                onClose={handleCloseDeleteDialog} 
            />
        </>
    );
}