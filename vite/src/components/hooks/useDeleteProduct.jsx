import { generateUrl } from "../api/generateUrl";

export const useDeleteProduct = (product, setIsDeleteLoading, setDependence) => {
    async function deleteProduct() {
        try {
            setIsDeleteLoading(true);
            const response = await fetch(generateUrl('products/delete/')+product.uuid, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log(`${response.status} - product deleted successfully`);
                setDependence(Math.floor(Math.random() * 1000));
                setIsDeleteLoading(false);
            } 
            else if(response.status == 404) {
                console.log(`${response.status} - product to delete does not exist.`);
                setIsDeleteLoading(false);
            }
            else {
                console.error('Failed to delete post. Status:', response.status);
                setIsDeleteLoading(false);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            setIsDeleteLoading(false);
        }
    }
    deleteProduct();
}