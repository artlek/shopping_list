import Drawer from '@mui/material/Drawer';

export default function MobileDrawer({ mobileOpen, handleDrawerTransitionEnd, handleDrawerClose, drawerWidth, topBarHeight, children }) {
    return (
        <Drawer 
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, mt: topBarHeight+'px', bgcolor: 'background.default' },
            }}
            slotProps={{
                root: {
                    keepMounted: true, // Better open performance on mobile.
                },
            }}
            open={mobileOpen} 
            onTransitionEnd={handleDrawerTransitionEnd} 
            onClose={handleDrawerClose}
            variant="temporary" 
            className="mobile-drawer"
        >
        {children}
        </Drawer>
    );
}