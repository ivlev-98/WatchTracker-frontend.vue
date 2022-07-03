<template>
  
</template>

<script lang="ts">
import router from '@/router';
import store from '@/store';
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Logout',
  async created() {
    await store.dispatch('user/logout');
    router.push({name: 'home'});
  }
})
export default class Logout extends Vue {}
</script>