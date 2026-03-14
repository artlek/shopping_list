import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router";

export function LeftMenuItem({ to, icon, value, selected }){

    return(
        <ListItem component={Link} to={to} sx={{ px: { xs: 0, sm: 2 }, py: 0 }}>
            <ListItemButton selected={selected}>
                <ListItemIcon sx={{ minWidth: '40px' }}>{icon}</ListItemIcon>
                    <ListItemText sx={{ color: selected ? 'primary.main' : 'text.secondary', fontSize: '1rem', fontWeight: 500 }} disableTypography>{value}</ListItemText>
            </ListItemButton>
        </ListItem>
    );
}