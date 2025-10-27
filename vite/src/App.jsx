import './index.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ShoppinglistPage } from "./components/pages/ShoppinglistPage";
import { ShoppinglistsPage } from "./components/pages/ShoppinglistsPage";
import { AddShoppinglistPage } from "./components/pages/AddShoppinglistPage";
import { ManualPage } from "./components/pages/ManualPage";
import { AboutPage } from "./components/pages/AboutPage";
import { HomePage } from "./components/pages/HomePage";
import { NotFound } from "./components/pages/NotFound";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { GetUserName } from './services/localStorage';
import { AddUserNameForm } from './components/AddUserNameForm';
import AsideMenu from './components/AsideMenu';
import { CheckIfUpdated, SetUserAppVersion, GetAppVersion } from './services/appVersion';
import MobileDrawer from './components/MobileDrawer';
import WideDrawer from './components/WideDrawer';
import Navigation from './components/Navigation';
import Main from './components/Main';
import { Alert, Typography } from '@mui/material';

export default function App() {
    const [localStorageUserName, setLocalStorageUserName] = useState(GetUserName());

    // handles app drawer
    const DRAWER_WIDTH = 260+'px';
    const [topBarHeight, setTopBarHeight] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosingDrawer, setIsClosingDrawer] = useState(false);
    const handleDrawerClose = () => {
        setIsClosingDrawer(true);
        setMobileOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosingDrawer(false);
    };

    // handles actions when app is updated
    const updateContent = "The app has been updated to " + GetAppVersion() + " version.";
    const [openTopBar, setOpenTopBar] = useState(false);
    const onCloseTopBar = () => {
        SetUserAppVersion();
        setTopBarHeight(0);
        setOpenTopBar(false);
    }
    
    if(CheckIfUpdated()) {
        useEffect(() => {
            setTopBarHeight(28);
            setOpenTopBar(true);
        }, []);
    }
    else {
        SetUserAppVersion();
    }

    return(
        <React.Fragment>
            <CssBaseline />
            {!localStorageUserName ? <AddUserNameForm setLocalStorageUserName={setLocalStorageUserName} />
            :
                <Box>
                    {openTopBar && 
                        <Alert icon={false} color="warning" variant="filled" className="top-bar" onClose={()=>onCloseTopBar()}
                            sx={{
                                width: '100%',
                                height: topBarHeight+'px',
                                borderRadius: 0,
                                alignItems: 'center',
                                '.MuiAlert-message': { overflow: 'hidden'} 
                            }}
                        >
                            <Typography variant='caption'>
                                {updateContent}
                            </Typography>
                        </Alert>
                    }
                    <Box sx={{ display: 'flex' }}>

                        <IconButton aria-label="open drawer" onClick={()=>setMobileOpen(true)}
                            sx={{ zIndex: 1191, m: 2, position: 'absolute', top: { sm: 30, xs: topBarHeight }, right: 0, display: { sm: 'none' } }}
                        >
                            <MenuIcon sx={{ fontSize: '32px', color: 'text.secondary' }} />
                        </IconButton>
                        <Navigation width={DRAWER_WIDTH}>
                            <MobileDrawer
                                variant="temporary" 
                                drawerWidth={DRAWER_WIDTH}
                                mobileOpen={mobileOpen} 
                                handleDrawerTransitionEnd={handleDrawerTransitionEnd} 
                                handleDrawerClose={handleDrawerClose}
                                topBarHeight={topBarHeight}
                            >
                                <AsideMenu handleDrawerClose={handleDrawerClose} />
                            </MobileDrawer>
                            <WideDrawer drawerWidth={DRAWER_WIDTH}>
                                <AsideMenu handleDrawerClose={handleDrawerClose} />
                            </WideDrawer>
                        </Navigation>
                        <Main topBarHeight={topBarHeight}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="lists" element={<ShoppinglistsPage />} />
                                <Route path="lists/add" element={<AddShoppinglistPage />} />
                                <Route path="list/:uuid" element={<ShoppinglistPage />} />
                                <Route path="manual" element={<ManualPage />} />
                                <Route path="about" element={<AboutPage />} />
                                <Route path="404" element={<NotFound />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Main>
                    </Box>
                </Box>
            }
        </React.Fragment>
    );
}

