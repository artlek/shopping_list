import { Typography } from "@mui/material";

export default function ListItemFirstLine({ children }) {
    return (
        <Typography
            sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
            }}
            m={0} 
            variant="subtitle1"
            component="div"
            className="list-item-first-line"
        >
            {children}
        </Typography>
    );
}