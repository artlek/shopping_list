import { generateUrl } from "../api/generateUrl";

export const useEditProduct = (product, setIsBoughtLoading,  setDependence) => {
    async function editProduct() {
        try {
            setIsBoughtLoading(true);
            const response = await fetch(generateUrl('products/edit/')+product.uuid, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify({
                    bought: !product.bought
                })
            });
            if (response.ok) {
                console.log(`${response.status} - product edited successfully`);
                setDependence(Math.floor(Math.random() * 1000));
            }
            else if(response.status == 404) {
                console.log(`${response.status} - product to edit does not exist.`);
                setDependence(Math.floor(Math.random() * 1000));
            } 
            else {
                console.error('Failed to edit post. Status:', response.status);
            }
        } catch (error) {
            console.error('Error edit post:', error);
        }
        setIsBoughtLoading(false);
    }
    editProduct();
}