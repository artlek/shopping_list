import { Typography } from "@mui/material";

export default function ProductItemSecondLine({ children, style }) {
    return (
        <Typography sx={style} m={0} variant="subtitle2" className="product-item-second-line">{children}</Typography>
    );
}