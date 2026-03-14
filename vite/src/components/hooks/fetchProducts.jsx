import { generateUrl } from "../api/generateUrl";
import Product from "../Product";

export const fetchProducts = (listUuid, setProducts, setDependence, setIsLoading, setFetchError) => {
    const shoppinglistQuery = 'listUuid[]='+listUuid;
    const url = generateUrl('products?');
    async function fetchData() {
        setIsLoading(true);
        try {
            const response = await fetch(url+shoppinglistQuery);
            if(!response.ok) {
                setIsLoading(false);
                setFetchError(response.status + ' Failed to fetch data.');
                throw new Error('Failed to fetch data.');
            }
            const data = await response.json();
            const fetchedProducts = (data['member']);
            setIsLoading(false);
            setProducts(fetchedProducts.map(product => <Product key={product.id} product={product} setDependence={setDependence} />).reverse());
        }
        catch (e) {
            setIsLoading(false);
            setFetchError(e.message);
            throw new Error(e);
        }
    }
    fetchData();
}