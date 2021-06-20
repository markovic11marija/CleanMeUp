import { removeAcceptCookie } from "./cookieHelper";

const storageKey = "user";

export const isLoggedIn = () => {
    return localStorage.getItem(storageKey) !== "" && localStorage.getItem(storageKey) !== null;
}

export const getLoggedUser = () => {
    const user = JSON.parse(localStorage.getItem(storageKey));
    return {
        id: `${user.id}`,
        fullName: user.fullName,
        firstName: user.fullName.split(" ")[0]
    }
}
export const getLoggedUserId = () => {
    return getLoggedUser().id;
}

export const storeLoggedUser = (user) => {
    user.id = `${user.id}`;
    localStorage.setItem(storageKey, JSON.stringify(user))
}

export const storeFacebookLoggedUser = (data) => {
    storeLoggedUser({
        id: `fb-${data.userID}`,
        fullName: data.name
    })
}
export const logoutUser = () => {
    localStorage.removeItem(storageKey);
    removeAcceptCookie();
}