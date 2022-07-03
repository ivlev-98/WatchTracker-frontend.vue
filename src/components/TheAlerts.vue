<template lang="pug">
.alerts(v-if="alerts.length > 0")
  .alert(
    v-for="(alert, index) in alerts"
    :class="getAlertClass(alert.type)")
    span.message {{ alert.message }}
    span.close(@click="close(index)") x
</template>

<script lang="ts">
import store from '@/store';
import { mapState } from 'vuex';
import { AlertTypes } from '@/store/types'
import { Options, Vue } from 'vue-class-component';

@Options({
  computed: {
    ...mapState(['alerts'])
  },
  methods: {
    close(idx: number) {
      store.commit('dropAlert', idx)
    },
    getAlertClass(type: number) {
      if(type === AlertTypes.success)
        return 'alert-success';
      if(type === AlertTypes.error)
        return 'alert-danger'
    }
  }
})
export default class TheAlerts extends Vue {}
</script>

<style lang="stylus" scoped>
@import '@/stylus/vars.styl'
.alerts
  position fixed
  display flex
  bottom 40px
  width 500px
  right 0
  flex-direction column
  align-items center
  transition $transition
  @media(max-width 1024px)
    width 100%
.alert
  padding 10px 15px
  margin 5px
  background $color
  width 80%
  border-radius 10px
  display flex
  align-items center
  justify-content space-between
  transition $transition
  position relative
  overflow hidden
  &>.message
    width 70%
    padding 5px
    color: $text-color
  &>.close
    width 32px
    height 32px
    min-width 32px
    min-height 32px
    background $bg-color
    border-radius 50%
    display flex
    align-items center
    justify-content center
    cursor pointer
    transition $transition
    &:hover
      background $primary-color
      color $color
.alert-danger
  &:before
    content ''
    position absolute
    width 10px
    height 100%
    background $danger-color
    left 0
.alert-success
  &:before
    content ''
    position absolute
    width 10px
    height 100%
    background $success-color
    left 0
</style>
