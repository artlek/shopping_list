import { Typography } from "@mui/material";

export default function Header({ header }) {
    return (
        <Typography 
            sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                color: 'text.secondary'
            }}
            ml={1} 
            variant="h1"
            className="header"
            >
            {header}
        </Typography>
    );
}