
const state = {
    name:'test'
}
const getters = {
    getName(state){
        return state.name
    }
}
const actions = {
    test({commit},val){
        commit('hello',val)
    }
}
const mutations = {
    hello(state,val = 'default'){
        state.name = val
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}