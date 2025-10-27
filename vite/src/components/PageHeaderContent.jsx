import Box from '@mui/material/Box';

export default function PageHeaderContent({ children }) {
    return(
        <Box className="page-header-content">
            {children}
        </Box>
    );
}