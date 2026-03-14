import { Typography } from "@mui/material";

export default function ProductItemFirstLine({ children, style }) {
    return (
        <Typography sx={style} m={0} variant="subtitle1" className="product-item-first-line">{children}</Typography>
    );
}