import { Typography } from "@mui/material";

export default function ListItemThirdLine({ children }) {
    return (
        <Typography variant="caption" color="primary.light" component="span" className="list-item-third-line">
            {children}
        </Typography>
    );
}