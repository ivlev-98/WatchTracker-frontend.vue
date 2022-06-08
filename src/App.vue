<template lang="pug">
header.site-header(:class="isMenuActive ? 'active' : ''")
  h1.site-header__logo WatchTracker
  span.menuTrigger(@click="isMenuActive = !isMenuActive")
    svg(xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16")
      path(fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z")
  nav.site-header__nav
    .nav__header
      span Alex Ivlev
    a(href="#" @click="toggleMenu") Главная
    a(href="#" @click="toggleMenu") О нас
    a(href="#" @click="toggleMenu") Вход
    a(href="#" @click="toggleMenu") Регистрация
    a(href="#" @click="toggleMenu") Выход
.container(:class="isMenuActive ? 'active' : ''")
  router-view
  TheAlerts
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import TheAlerts from '@/components/TheAlerts.vue';

@Options({
  data() {
    return {
      isMenuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  },
  components: {
    TheAlerts
  }
})

export default class extends Vue {}
</script>

<style lang="stylus">
@import '@/stylus/vars.styl'
@font-face
  font-family HelveticaNeue
  src url('assets/fonts/HelveticaNeue.otf')
  font-display swap
*
  margin 0
  padding 0
  box-sizing border-box
a
  text-decoration none
#app
  font-family HelveticaNeue
  background $bg-color
  font-size 18px
  position relative
  overflow-x hidden
  min-height 100vh
.container
  position relative
  margin 30px 100px
  transition $transition
  right 0
  @media(max-width 1024px)
    margin 30px
    &.active
      right 250px
  @media(max-width 750px)
    margin 20px 0
.site-header
  display flex
  position relative
  justify-content space-between
  background linear-gradient(45deg, $primary-color, #1153fc)
  height 55px
  transition $transition
  right 0
  @media(max-width 1024px)
    &.active
      right 250px
.site-header__logo
  color $color
  display flex
  align-items center
  padding 0 15px
  font-size 1.5rem
  letter-spacing .1rem
.site-header .menuTrigger
  display none
  width 55px
  color $color
  align-items center
  justify-content center
  cursor pointer
  transition $transition
  &:hover
    background $primary-dark-color
  & > svg
    width 2em
    height 2em
  @media(max-width 1024px)
    display flex
.site-header__nav
  display flex
  @media(max-width 1024px)
    position absolute
    width 250px
    right -250px
    flex-direction column
    background $bg-color
.site-header__nav a
  display flex
  align-items center
  justify-content center
  color $color
  padding 10px
  position relative
  transition $transition
  &.router-link-active
    pointer-events none
    background $primary-dark-color
    &:before
      content ''
      height 5px
      border-radius 4px
      background $color
      width 80%
      position absolute
      bottom 1px
  &:last-child
    margin-right 5px
  &:hover
    background $primary-dark-color
  @media(max-width 1024px)
    background $color
    color $text-color
    justify-content start
    padding-left 20px
    &:hover
      color $color
    &:last-child
      margin-right 0
    &.router-link-active
      pointer-events none
      background $bg-color
      &:before
        content ''
        height 100%
        background $primary-color
        width 3px
        border-radius 0
        position absolute
        left 0
.nav__header
  display none
  @media(max-width 1024px)
    display flex
    flex-direction column
    justify-content flex-end
    height 180px
    color: $color
    padding 20px
    background linear-gradient(45deg, $primary-color, #1153fc)
</style>
