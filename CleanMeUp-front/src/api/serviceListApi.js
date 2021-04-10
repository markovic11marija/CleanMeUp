import { getServiceListError, getServiceListStarted, getServiceListSuccess } from "../actions/servicesActions";
import { getData } from "./api";

export function getServiceList() {
    getData({
        url: 'Service',
        startActionType: getServiceListStarted,
        successActionType: getServiceListSuccess,
        errorActionType: getServiceListError
    })
}