import { Box } from "@mui/material";

export default function ListItemContent({ children }) {
    return (
        <Box sx={{ pl: 1, minWidth: '100px' }} className="list-item-content">
            {children}
        </Box>
    );
}