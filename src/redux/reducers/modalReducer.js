import { INIT_STATE } from "../init-state";
import { showModal, hideModal } from "../actions";

export default function modal(state = INIT_STATE.modal, action) {
    switch (action.type) {
        case showModal().type:
            return {
                ...state,
                isShow: true,
            };
        case hideModal().type:
            return {
                ...state,
                isShow: false,
            };
        default:
            return state;
    }
}