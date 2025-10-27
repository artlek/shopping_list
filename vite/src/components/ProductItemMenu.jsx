import Box from '@mui/material/Box';

export default function ProductItemMenu({ children }) {
    return (
        <Box display="flex" alignContent="center" className="product-item-menu">{children}</Box>
    );
}