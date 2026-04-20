import Button from '@mui/material/Button';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import { useState } from 'react';
import { useDeleteBoughtProducts } from './hooks/useDeleteBoughtProducts';
import DialogBox from './DialogBox';
import { IconButton } from '@mui/material';
import { Box } from '@mui/material';

export default function DeleteBoughtProductsButton({ listUuid, setDependence }) {
    const [isLoading, setIsLoading] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [deletedCount, setDeletedCount] = useState(0);

    const handleDeleteBoughtProducts = async () => {
        setOpenDialog(false);
        const deleteBoughtProducts = useDeleteBoughtProducts(listUuid, setIsLoading, setDependence);
        const count = await deleteBoughtProducts();
        setDeletedCount(count);
    };

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const dialogActions = (
        <Box
            width="100%"
            sx={{
                gap: 1,
                display: 'flex'
            }}
        >
            <Button
                sx={{
                    flexGrow: 1
                }}
                variant="outlined"
                size="large"
                onClick={handleCloseDialog}
            >
                Cancel
            </Button>
            <Button
                sx={{
                    flexGrow: 1
                }}
                variant="contained"
                size="large"
                onClick={handleDeleteBoughtProducts}
                color="error"
            >
                Delete all
            </Button>
        </Box>
    );

    return (
        <>
            <IconButton
                onClick={()=>handleOpenDialog()}
                loading={isLoading}
                color='error'
                sx={{
                    mt: 1,
                }}
            >
                <DeleteSweepIcon />
            </IconButton>
            
            <DialogBox
                open={openDialog}
                onClose={handleCloseDialog}
                title="Delete all bought products"
                content="Are you sure you want to delete all purchased products from this list?"
                actions={dialogActions}
            />
        </>
    );
}