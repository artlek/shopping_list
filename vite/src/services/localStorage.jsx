const LIST_PREFIX = 'sl_list_';
const SHOPPING_LIST_UUID_SUFIX = 'uuids';
const USER_NAME_PREFIX = 'sl_user_name';

export function GetUserName() {
    return GetValue(USER_NAME_PREFIX);
}

export function GetValue(key) {
    if(localStorage.getItem(key)) {
        return localStorage.getItem(key);
    }
    return '';
}

export function SetUserName(name) {
    if(name) {
        SetValue(USER_NAME_PREFIX, name);
    }
}

export function SetValue(key, value) {
    if(key) {
        localStorage.setItem(key, value);
    }
}

export function DeleteKey(key) {
    if(key) {
        localStorage.removeItem(key);
    }
}

export function AddShopplistToLocalStorage(uuid) {
    if(!CheckIfShoppingListExist(uuid)) {
        localStorage.setItem(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX, GetAllShoplistsFromLocalStorage()+uuid);
    }
}

export function DeleteShoplistFromLocalStorage(uuid) {
    if(localStorage.getItem(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX)) {
        const listArray = GetAllShoplistsFromLocalStorage().match(/.{36}/g);
        let newList = listArray.filter((listItem) => listItem !== uuid);
        localStorage.setItem(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX, newList.join(''));
        
        if(!GetAllShoplistsFromLocalStorage()) {
            DeleteKey(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX);
        }
    }
}

// Checks if shoppinglist exists in localstorage
export function CheckIfShoppingListExist(uuid) {
    if(GetAllShoplistsFromLocalStorage()) {
        const listArray = GetAllShoplistsFromLocalStorage().match(/.{36}/g);
        if(listArray.find((list) => list == uuid)) {
            return true;
        }
    }
    return false;
}

export function GetAllShoplistsFromLocalStorage() {
    return GetValue(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX);
}

// Synchronizes localstorage and fetched lists. If a list does not exist in server, it removes from localstorage.
// Returns filtered lists (object).
export function SyncLists(localstorageLists, fetchedLists) {
    let lists = [];
    let uuids = [];
    if(fetchedLists && localstorageLists) {
        const localstorageListsArray = localstorageLists.match(/.{36}/g);
        for (let i = 0; i < localstorageListsArray.length; i++) {
            for (let j = 0; j < fetchedLists.length; j++) {
                if(localstorageListsArray[i] == fetchedLists[j].uuid) {
                    lists.push(fetchedLists[j]);
                }
            }
        }
        lists.forEach((list) => uuids.push(list.uuid));
        SetValue(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX, uuids.join(''));
        if(!GetAllShoplistsFromLocalStorage()) {
            DeleteKey(LIST_PREFIX+SHOPPING_LIST_UUID_SUFIX);
        }
    }
    return lists;
}