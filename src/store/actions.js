import {
  getAllThemes
} from '../api'

export default {
  // ensure data for rendering given list type
  FETCH_THEMES: ({ commit, dispatch, state }) => {
    return getAllThemes
      .then(ts => {
        // console.log("fetched themes",ts)
        commit('SET_LIST', { themes:ts })
      }
      )
      .catch(err => console.log("api call failed", err))
  }
}
