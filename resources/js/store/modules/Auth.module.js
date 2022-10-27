
import { LOGIN } from "../types/actions_types";
import { MAKE_AUTH } from "../types/mutations_types";
import {sendRequest} from "../../Requests";

const state = {
    is_auth: false,
    user: null
}

const actions = {

    [LOGIN](context) {

        return new Promise((resolve, reject) => {
            sendRequest("login","ss");
            // context.commit(MAKE_AUTH);
            // resolve(context.state);
        });

    }

}

const mutations = {
    [MAKE_AUTH]() {
        state.is_auth = true;
    },

}
const getters = {

    IsAuthunticated(state) {
        return state.is_auth;
    }

}


export default {
    state,
    getters,
    actions,
    mutations,
}