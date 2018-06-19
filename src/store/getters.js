const getters = {
  sidebar: state => state.app.sidebar,
  logo: state => state.app.baselogo,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles
}
export default getters
