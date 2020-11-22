<template>
  <div>
    <h1>Nuxt.js(CompositionAPI)+TypeScriptでFirebaseと連携したい！</h1>
    <h2>↓googleでログイン↓</h2>
    <button @click="googleLogin">ログイン</button>
    <hr />
    <input type="text"  v-model='memo.text'/>
    <button @click="addMemo">追加</button>
  </div>
</template>

<script lang='ts'>
import { ref, reactive } from "@vue/composition-api"; //coompositionを使えるように
import firebase from "~/plugins/firebase.ts"; //プラグインからfirebase を使えるように
export default {
  setup() {
    const googleLogin = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    };
    let memo = reactive({
      text:null
    });
    const addMemo = () => {
      firebase.firestore().collection("memos").add({
      text:memo.text
      });
      memo.text = null
    };
    return { googleLogin, memo, addMemo};
  },
};
</script>

