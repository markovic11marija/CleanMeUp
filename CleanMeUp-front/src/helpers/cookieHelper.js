const storageKey = 'accepted_cookie';

export const saveAcceptCookie = () => {
    sessionStorage.setItem(storageKey, 'true');
}

export const noAcceptCookie = () => {
    sessionStorage.setItem(storageKey, 'false');
}

export const isAcceptedCookie = () => {
    const cookie = sessionStorage.getItem(storageKey);
    return cookie !== null && cookie !== "" && cookie === "true";
}

export const removeAcceptCookie = () => {
    sessionStorage.removeItem(storageKey);
}
