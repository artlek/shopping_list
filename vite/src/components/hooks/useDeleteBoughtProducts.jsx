import { generateUrl } from "../api/generateUrl";

export const useDeleteBoughtProducts = (listUuid, setIsLoading, setDependence) => {
    async function deleteBoughtProducts() {
        try {
            setIsLoading(true);
            
            const response = await fetch(generateUrl('products/delete-bought/') + listUuid, {
                method: 'DELETE',
            });
            
            if (response.ok) {
                const data = await response.json();
                console.log(`${response.status} - ${data.deletedCount} bought products deleted successfully`);
                setDependence(Math.floor(Math.random() * 1000));
                setIsLoading(false);
                return data.deletedCount;
            } 
            else if(response.status === 404) {
                console.log(`${response.status} - No bought products found to delete.`);
                setIsLoading(false);
                return 0;
            }
            else {
                const errorData = await response.json();
                console.error('Failed to delete bought products. Status:', response.status, errorData);
                setError(errorData.message || 'Failed to delete bought products');
                setIsLoading(false);
                return 0;
            }
        } catch (error) {
            console.error('Error deleting bought products:', error);
            setIsLoading(false);
            return 0;
        }
    }
    return deleteBoughtProducts;
}