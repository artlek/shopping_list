import List from '@mui/material/List';
import { AddListButton } from './../AddListButton';
import { useState } from "react";
import ShoppinglistItem from "./../ShoppinglistItem";
import { GetAllShoplistsFromLocalStorage } from '../../services/localStorage';
import PageHeader from '../PageHeader';
import { useFetchLists } from '../hooks/useFetchLists';
import { NoItems } from "../NoItems";
import Header from "../Header";
import PageHeaderContent from '../PageHeaderContent';
import PageContent from '../PageContent';
import LoadingLine from '../LoadingLine';
import NotificationBar from '../NotificationBar';

export function ShoppinglistsPage() {
    document.title = "Lists - Shopping List App";
    const [localStorageUuidList, setLocalStorageUuidList] = useState(GetAllShoplistsFromLocalStorage());
    const { items, isLoading, error } = useFetchLists(localStorageUuidList);
    let listItems = '';

    if(items) {
        listItems = items.map(list => <ShoppinglistItem key={list.id} list={list} setLocalStorageUuidList={setLocalStorageUuidList} localStorageUuidList={localStorageUuidList}></ShoppinglistItem>).reverse();
    }

    return (
        <>
            <PageHeader>
                <PageHeaderContent>
                    <Header header="Lists" />
                </PageHeaderContent>
            </PageHeader>
            <LoadingLine isLoading={isLoading} />
            <PageContent marginX={{ xs: 0, sm: 6 }} marginY={{ xs: 0, sm: 3 }}>
                {error ? 
                    <NotificationBar severity="error">{error.message}</NotificationBar>
                :
                    listItems.length === 0 && !isLoading ?
                        <NoItems />
                    : 
                        <List sx={{ m: 1 }}>{listItems}</List>
                }
            </PageContent>
            <AddListButton />
        </>
    )
}