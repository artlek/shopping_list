import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export function AddListButton() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/lists/add');
    };

    return(
        <Box sx={{ '& > :not(style)': { m: 1 }, position: 'fixed', right: '40px', bottom: '40px' }} className="add-list-button">
            <Fab color="primary" sx={{ borderRadius: '8px', width: '60px', height: '60px' }} onClick={handleClick}>
                <AddIcon sx={{ fontSize: '50px' }} />
            </Fab>
        </Box>
    );
}