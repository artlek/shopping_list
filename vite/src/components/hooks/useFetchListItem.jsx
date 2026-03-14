import { useState, useEffect } from "react";
import { generateUrl } from "../api/generateUrl";
import { useNavigate } from 'react-router-dom';

export const useFetchListItem = (listUuid) => {
    const navigate = useNavigate();
    const query = 'uuid='+listUuid;
    const [listItem, setListItem] = useState('');
    const [isLoadingListItem, setIsLoadingListItem] = useState(null);
    const [listItemError, setListItemError] = useState('');
    
    useEffect(() => {
        const controller = new AbortController;
        const url = generateUrl('shoppinglists?');
        setIsLoadingListItem(true);
        async function fetchData() {
            try {
                const response = await fetch(url+query);
                if(!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if(data['totalItems'] === 0) {
                    navigate('/404');
                    return;
                }
                setListItem(data['member'][0]);
            }
            catch (e) {
                setListItemError(e);
            }
            finally {
                setIsLoadingListItem(false);
            }
        }
        fetchData();
        return () => controller.abort();
    }, [listUuid]);
    
    return { listItem, isLoadingListItem, listItemError };
}