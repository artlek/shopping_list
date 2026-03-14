export function getQueryToFetchLists(uuids) {
    const prefix = "uuid[]=";
    let query = [];
    if(!uuids){
        return query+prefix;
    }
    const lists = uuids.match(/.{36}/g);
    for (let i=0; i<lists.length; i++) {
        query = query + prefix + lists[i] + "&";
    }
    return query;
}