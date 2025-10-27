import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Logo } from './Logo';
import { LeftMenuItem } from './LeftMenuItem';
import { useMatch } from 'react-router-dom';

export default function AsideMenu({ handleDrawerClose, children }) {
    const isHomeRoute = useMatch("/");
    const isListsRoute = useMatch("/lists");
    const isListRoute = useMatch("/list/:uuid");
    const isManualRoute = useMatch("/manual");
    const isAboutRoute = useMatch("/about");

    return (
        <Box className="aside-menu" backgroundColor="background.default">
            <Box bgcolor="background.default" height="80px" display="flex" alignItems="center" justifyContent="center">
                <Logo firstColor="text.secondary" secondColor="primary.light" />
            </Box>
            <List sx={{ mt: 3 }} >
                <Box onClick={handleDrawerClose}>
                    <LeftMenuItem selected={isHomeRoute} to="/" value="Home" icon={<ChevronRightIcon sx={{ color: 'text.secondary' }} />} />
                    <LeftMenuItem selected={isListsRoute || isListRoute} to="/lists" value="Shopping lists" icon={<ChevronRightIcon sx={{ color: 'text.secondary' }} />} />
                    <LeftMenuItem selected={isManualRoute} to="/manual" value="Manual" icon={<ChevronRightIcon sx={{ color: 'text.secondary' }} />} />
                    <LeftMenuItem selected={isAboutRoute} to="/about" value="About" icon={<ChevronRightIcon sx={{ color: 'text.secondary' }} />} />
                </Box>
            </List>
            {children}
        </Box>
    );
}