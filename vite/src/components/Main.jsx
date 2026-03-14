import { Box } from "@mui/material";

export default function Main({ children, topBarHeight }) {
    return (
        <Box 
            sx={{
                minHeight: `calc(100vh - ${topBarHeight+'px'})`,
                width: '100%'
            }}
            component="main"
            className="main"
            backgroundColor="background.none"
        >
            {children}
        </Box>
    );
}