import { Module } from "vuex";
import { RootState } from "../../types"
import { UserState } from "./types";
import { state } from "./state";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

const namespaced: boolean = true;

export const user: Module<UserState, RootState> = {
    namespaced,
    state,
    mutations,
    actions,
    getters
}
