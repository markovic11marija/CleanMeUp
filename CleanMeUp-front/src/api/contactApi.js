import { postContactError, postContactStarted, postContactSuccess } from "../actions/contactActions"
import { postData } from "./api"

export const sendContactMessage = (contact) => {
    postData({
        url: 'Contact',
        data: {...contact},
        startActionType: postContactStarted,
        successActionType: () => {
            return postContactSuccess({
                ...contact
            })
        },
        errorActionType: postContactError
    })
}