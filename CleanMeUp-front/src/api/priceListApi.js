import { getPriceListError, getPriceListStarted, getPriceListSuccess } from "../actions/priceListActions";
import { getData } from "./api";

export function getPriceList() {
    getData({
        url: 'Price/price-list',
        startActionType: getPriceListStarted,
        successActionType: getPriceListSuccess,
        errorActionType: getPriceListError
    })
}