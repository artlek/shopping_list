import { Box } from "@mui/material";

export default function PageHeader({ children }) {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex', 
                px: 2, 
                pr: '60px',
                bgcolor: 'background.none'
            }}
            height="80px"
            alignItems="center"
            className="page-header"
        >
            {children}
        </Box>
    );
}