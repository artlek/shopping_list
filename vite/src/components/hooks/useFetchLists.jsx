import { useState, useEffect } from "react";
import { generateUrl } from "../api/generateUrl";
import { getQueryToFetchLists } from '../api/getQueryToFetchLists';
import { GetAllShoplistsFromLocalStorage, SyncLists } from '../../services/localStorage';

export const useFetchLists = (localStorageUuidList) => {
    const url = generateUrl('shoppinglists?');
    const query = getQueryToFetchLists(GetAllShoplistsFromLocalStorage());
    const [items, setItems] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController;
        setIsLoading(true);
        try {
            fetch(url+query)
                .then(response => response.json())
                .then(json => setItems(json.member))
                .catch(error => setError(error));
        }
        catch (error) {
            console.log('Error occurred: ' + error);
            setError(error);
        }
        finally {
            setIsLoading(false);
        }
        return () => controller.abort();
    }, [localStorageUuidList]);
    
    return { items, isLoading, error };
}