<template>
  <li class="theme">
    <span>Title: {{theme.title}}</span>
  </li>
</template>

<script>

export default {
  name: 'theme',
  props: ['theme']
}
</script>

<style lang="stylus">
.theme
  background-color #fff
  padding 20px 30px 20px 80px
  border-bottom 1px solid #eee
  position relative
  line-height 20px
</style>
