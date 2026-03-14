import { Box } from "@mui/material";

export default function ProductItemContent({ children }) {
    return (
        <Box flexGrow="1" minHeight="68px" alignContent="center" px={2} className="product-item-content">
            {children}
        </Box>
    );
}