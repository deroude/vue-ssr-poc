<template>
      <div class="rp-theme-box" v-bind:class="{selected:selected}" v-on:click="select">
            <h2>{{theme.title}}</h2>
            <img :src="theme.image.fields.file.url" />
            <section >
              <Chart :series = "initSeries"></Chart>
              <article v-html="markdown(theme.text)"></article>
              </section>           
        </div>
</template>

<script>
import marked from "marked";
import Chart from "./Chart.vue";
export default {
  data() {
    return {
      selected: false
    };
  },
  name: "theme",
  components: {
    Chart
  },
  props: ["theme"],
  computed : {
    initSeries : function() {
      return [{
              name: 'Tokyo',
              data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
          }, {
              name: 'New York',
              data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
          }, {
              name: 'Berlin',
              data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
          }, {
              name: 'London',
              data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
          }];
    }
  },
  methods: {
    select: function() {
      this.selected = !this.selected;
    },
    markdown: function(txt) {
      return marked(txt);
    }
  }
};
</script>

<style lang="stylus">
.rp-theme-box {
  float: left;
  margin: 1rem;
  width: 30rem;
  height: 20rem;
  position: relative;
  padding: 0;
}

.rp-theme-box img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.rp-theme-box h2 {
  background-color: rgba(100, 100, 100, 0.3);
  color: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0 2rem 0;
  z-index: 10;
}

.rp-theme-box section {
  display: none;
}

.rp-theme-box.selected {
  width: 90%;
  height: auto;
  padding: 2rem;
  background-color: white;
}

.rp-theme-box.selected img {
  position: relative;
  width: 100%;
  height: auto;
}

.rp-theme-box.selected h2 {
  background: none;
  color: inherit;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0.5rem 0 2rem 0.5rem;
}

.rp-theme-box.selected section {
  display: block;
}
</style>
