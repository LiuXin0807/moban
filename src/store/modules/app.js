import Cookies from 'js-cookie'

const app = {
  state: {
    device: 'desktop',
    baselogo:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529421894391&di=112680b366f218dbc73346f15137d7eb&imgtype=0&src=http%3A%2F%2Fcdn.huodongxing.com%2Ffile%2F20151204%2F1175F992C8E1C3F12F8ED827E301D2E92A%2F30902327409665004.jpg'
  },
  mutations: {

    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app
