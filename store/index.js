import EasyAccess, { defaultMutations } from 'vuex-easy-access'

export const state = () => {
  return { overlay: false }
}

export const mutations = { ...defaultMutations(state()) }

export const plugins = [EasyAccess()]
