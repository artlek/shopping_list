import { Typography } from "@mui/material";

export default function ProductItemThirdLine({ children, style }) {
    return (
        <Typography sx={style} m={0} variant="caption" color="primary.light" className="product-item-third-line">{children}</Typography>
    );
}