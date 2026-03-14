import { Box } from "@mui/material";

export default function Navigation({ children, width }) {
    return (
        <Box sx={{ width: { sm: width }, flexShrink: { sm: 0 } }} component="nav" className="navigation">
            {children}
        </Box>
    );
}