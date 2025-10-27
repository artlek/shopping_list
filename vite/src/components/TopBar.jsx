import { Alert, Typography } from "@mui/material";
import { TopBarHeight } from "../services/context";

export default function TopBar({ children, color='warning', onClose={onClose} }) {
    const topBarHeightValue = useContext(TopBarHeight);

    return(
        <Alert icon={false} color={color} variant="filled" className="top-bar"
            sx={{ 
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 1202,
                width: '100%',
                height: topBarHeightValue+'px',
                borderRadius: 0,
                alignItems: 'center',
                '.MuiAlert-message': { padding: 0 }
            }}
            onClose={()=>onClose()}
        >
            <Typography
                sx={{ 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '1',
                    WebkitBoxOrient: 'vertical'
                 }} 
                variant='caption'>
                {children}
            </Typography>
        </Alert>
    );
}