import { Typography } from "@mui/material";

export default function Subheader({ subheader }) {
    return (
        <Typography 
            sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '1',
                WebkitBoxOrient: 'vertical',
                color: 'text.primary'
            }}
            variant="subtitle2"
            ml={1}
            className="subheader"
            >
            {subheader}
        </Typography>
    );
}