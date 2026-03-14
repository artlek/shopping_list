import { generateUrl } from "../api/generateUrl";
import { GetUserName } from "../../services/localStorage";

export const useAddProduct = (values, setError, list, setIsLoading, setDependence) => {
    async function addProduct() {
        const body = {
            name: values.name,
            description: values.description,
            listUuid: list.uuid,
            date: new Date(),
            bought: false,
            user: GetUserName(),
        };
        try {
            setIsLoading(true);
            const response = await fetch(generateUrl('products'+'?'), {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/ld+json',
                },
                body: JSON.stringify(body)
            });
            setDependence(Math.floor(Math.random() * 1000));
            console.log(`${response.status} - product added successfully`);
            setIsLoading(false);
            if (!response.ok) {
                setError(response.status + ': Network response was not ok. Please try later.');
            };
            setError(null);
            setIsLoading(false);
        } catch (error) {
            setError(error.message);
            setIsLoading(false);
            console.error('POST request failed:', error);
        }
    }
    addProduct();
}