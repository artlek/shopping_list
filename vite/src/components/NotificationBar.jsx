import Alert from '@mui/material/Alert';

export default function NotificationBar({ children, severity='info', onClose, display=null }) {
    return (
        <Alert variant="filled" severity={severity} onClose={onClose} sx={{ mx: 1, my: 3, borderRadius: '4px', display: display }} className="notification-bar" >
            {children}
        </Alert>
    );
}