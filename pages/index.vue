<template>
  <div>
    <h1>Nuxt.js(CompositionAPI)+TypeScriptでFirebaseと連携したい！</h1>
    <h2>↓googleでログイン↓</h2>
    <button @click='googleLogin'>ログイン</button>
  </div>
</template>

<script lang='ts'>
import { ref } from '@vue/composition-api' //coompositionを使えるように
import firebase from '~/plugins/firebase.ts' //プラグインからfirebase を使えるように
export default {
  setup() {
    const googleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    }
    return {googleLogin}
  },
}
</script>

