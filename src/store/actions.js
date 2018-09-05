import axios from 'axios'

export default {
  async requestUserInfo (store, { user }) {
    let { data } = await axios({
      url: 'http://localhost:3000/request',
      params: {
        username: user
      }
    })
    store.commit('setUserInfo', { data: data.data })
  }
}
