<script lang="ts">
  import "../assets/styles/w3.css";
  import Menu from '$lib/components/Menu.svelte';
  import setupI18n from "$lib/services/i18n/i18n";
  import awsmobile from '../aws-exports';
	import { Amplify } from "aws-amplify";
  import { waitLocale } from 'svelte-i18n';
  import { language } from '$lib/services/stores';
	import { onDestroy } from 'svelte';
  
  Amplify.configure(awsmobile);
  
  let lang = 'de';
  let unsubscribe = language.subscribe((value) => {
    lang = value;
  });
  setupI18n(lang);
  export async function preload() {
    return waitLocale(lang);
  };
  onDestroy(unsubscribe);
</script>

<style>
  :global(body) {
    background-color: whitesmoke;
  }

  .fixed-footer {
      background-color: #333;
      color: white;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }

  footer a {
    color: #000;
    margin-left: 5px;
  }
</style>

<main>
  <Menu/>
  <div id="main" class="w3-container">
      <div class="w3-row">
          <slot />
      </div>
  </div>
</main>

<footer class="w3-container w3-center w3-padding fixed-footer">
  <a href="https://www.flaticon.com/de/kostenlose-icons/diamant" title="diamant Icons">Diamant</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/weizen" title="weizen Icons">Wheat</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/meeting" title="meeting Icons">Meeting</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/promotion" title="promotion Icons">Promotion</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/radio" title="radio Icons">Radio</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/stadium" title="stadium Icons">Stadium</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/talking" title="talking Icons">Talking</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/teamwork" title="teamwork Icons">Teamwork</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/user" title="user Icons">User</a>
</footer>
