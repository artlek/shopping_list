import Drawer from '@mui/material/Drawer';

export default function WideDrawer({ children, drawerWidth }) {
    return (
        <Drawer 
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { border: 'none', boxSizing: 'border-box', width: drawerWidth, position: 'static', bgcolor: 'background.default' },
            }}
            variant="permanent"
            open
            className="wide-drawer"
        >
        {children}
        </Drawer>
    );
}