import Box from '@mui/material/Box';

export default function PageContent({ children, marginY=6, marginX=6, maxWidth="600px" }) {
    return(
        <Box marginY={marginY} marginX={marginX} maxWidth={maxWidth} className="page-content">
            {children}
        </Box>
    );
}