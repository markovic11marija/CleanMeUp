export const dateToString = (date) => {
    return `${date.getFullYear()}-${zeroPrefix(date.getMonth()+1)}-${zeroPrefix(date.getDate())}`;
}
export const timeToString = (date) => {
    return ` ${zeroPrefix(date.getHours())}:${zeroPrefix(date.getMinutes())}:00`;
}
const zeroPrefix = (number) => {
    if(number < 10) {
        return `0${number}`;
    }
    return number;
}
