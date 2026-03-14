import { GetValue, SetValue } from './localStorage';

const LOCAL_STORAGE_APP_VERSION_PREFIX = 'sl_app_version';
const USER_APP_VERSION = GetValue(LOCAL_STORAGE_APP_VERSION_PREFIX);
const APP_VERSION = import.meta.env.VITE_APP_VERSION;

export function GetAppVersion() {
    return APP_VERSION ? APP_VERSION : 0;
}

export function GetUserAppVersion() {
    return USER_APP_VERSION ? USER_APP_VERSION : 0;
}

export function SetUserAppVersion() {
    SetValue(LOCAL_STORAGE_APP_VERSION_PREFIX, GetAppVersion());
}

export function CheckIfUpdated() {
    if(GetUserAppVersion() < GetAppVersion() && GetUserAppVersion() !== 0 && GetAppVersion() !== 0) {
        return true;
    }
    return false;
}