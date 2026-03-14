import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

export default function LoadingLine({ isLoading }) {
    return (
        <Stack sx={{ width: '100%', position: 'fixed', left: 0, top: 0, zIndex: 1199 }} className="loading-line">
            {isLoading ? <LinearProgress sx={{ height: '4px' }}/> : null}
        </Stack>
    );
}