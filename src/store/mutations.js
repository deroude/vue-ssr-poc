import Vue from 'vue'

export default {
  
  SET_LIST: (state, {themes }) => {
    // console.log("committing themes",themes)
    state.themes=themes
  }
}
