<template lang="pug">
form.login-form
  label(for="name") Имя:
  input(
    id="name"
    type="name"
    v-model="user.name"
    placeholder="Иван Борисов"
    :class="{error: registerErrors.name}"
  )
  span(class="errors" v-for="error in registerErrors.name")
    p {{ error }}
  label(for="email") Почта:
  input(
    id="email"
    type="email"
    v-model="user.email"
    placeholder="example@domain.com"
    :class="{error: registerErrors.email}"
  )
  span(class="errors" v-for="error in registerErrors.email")
    p {{ error }}
  label(for="password") Пароль:
  input(
    id="password"
    type="password"
    v-model="user.password"
    placeholder="********"
    :class="{error: registerErrors.password}"
  )
  span(class="errors" v-for="error in registerErrors.password")
    p {{ error }}
  label(for="password_confirmation") Пароль еще разок:
  input(
    id="password_confirmation"
    type="password"
    v-model="user.password_confirmation"
    placeholder="********"
    :class="{error: registerErrors.password}"
  )
  button(
    @click.prevent="register"
    :class="isDisabled ? 'disabled' : ''"
  ) Зарегистрироваться
</template>

<script lang="ts">
import store from '@/store';
import { Options, Vue } from 'vue-class-component';
import { mapState } from 'vuex';

@Options({
  data() {
    return {
      isDisabled: false,
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async register() {
      this.isDisabled = true;
      await store.dispatch('user/register', this.user);
      this.isDisabled = false;
    }
  },
  computed: {
    ...mapState('user', ['registerErrors'])
  }
})
export default class RegisterView extends Vue {}
</script>

<style lang="stylus" scoped>
@import '@/stylus/vars.styl'
.login-form
  width 50%
  margin 20px auto
  display flex
  flex-direction column
  @media(max-width 1024px)
    width 70%
  @media(max-width 750px)
    width 90%
.login-form label
  font-size 16px
  color $text-color
  padding 0 0 5px 5px
.login-form input
  width 100%
  height 35px
  margin-bottom 15px
  padding 0 10px
  border none
  border-radius 15px
  color $text-color
  &:focus
    outline 2px solid $primary-middle-color
  &:autofill
    box-shadow: 0 0 0px 1000px $color inset
  &.error
    outline 2px solid $danger-color
.login-form button
  width min-content
  display flex
  align-items center
  justify-content center
  height 35px
  border-radius 15px
  padding 0 20px
  border none
  background $primary-middle-color
  color $color
  cursor pointer
  transition $transition
  &:hover
    background $primary-dark-color
  &.disabled
    pointer-events none
    background $text-light-color
    color $color
.login-form .errors
  display flex
  flex-direction column
  color $danger-color
  font-size 14px
  margin-bottom 10px
  margin-left 10px
  & > .error
    padding 5px
</style>