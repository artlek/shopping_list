import { Typography } from "@mui/material";

export default function ListItemSecondLine({ children }) {
    return (
        <Typography
            sx={{
                width: '200px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
            }}
            m={0} 
            variant="subtitle2"
            component="div"
            className="list-item-second-line"
        >
            {children}
        </Typography>
    );
}