const storageKey = "user";

export const isLoggedIn = () => {
    console.log(localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey) !== "" && localStorage.getItem(storageKey) !== null;
}

export const getLoggedUser = () => {
    const user = JSON.parse(localStorage.getItem(storageKey));
    return {
        id: user.id,
        fullName: user.fullName,
        firstName: user.fullName.split(" ")[0]
    }
}
export const getLoggedUserId = () => {
    return getLoggedUser().id;
}

export const storeLoggedUser = (user) => {
    localStorage.setItem(storageKey, JSON.stringify(user))
}

export const logoutUser = () => {
    localStorage.removeItem(storageKey);
}