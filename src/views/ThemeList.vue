<template>
  <div class="themes-view">
          <theme v-for="theme in themes" :key="theme.id" :theme="theme"></theme>
      </div>
</template>

<script>
import Theme from "../components/Theme.vue";

export default {
  name: "theme-list",

  components: {
    Theme
  },

  data() {
    return {
      themes: this.$store.getters.themes
    };
  },

  asyncData({ store, route: { params: { id } } }) {
    return store
      .dispatch("FETCH_THEMES")
      .then(() => {
        console.log("themes pre-fetched");
      })
      .catch(err => console.log("theme load failed: ", err));
  },

  beforeMount() {
    if (this.$root._isMounted) {
      this.$store
        .dispatch("FETCH_THEMES")
        .then(() => {
          console.log("themes loaded");
        })
        .catch(err => console.log("theme load failed: ", err));
    }
  },

  beforeDestroy() {}
};
</script>

<style lang="stylus">
.themes-view {
  padding-top: 45px;
}
</style>
