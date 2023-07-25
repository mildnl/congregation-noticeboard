<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { goto } from '$app/navigation';
  import '../assets/styles/w3.css';
  import Menu from '$lib/components/Menu.svelte'
  import SignIn from "$lib/components/SignIn.svelte";
  import setupI18n from '$lib/services/i18n/i18n'
  import { waitLocale } from 'svelte-i18n'
  import { onMount } from 'svelte';
  let i18n = setupI18n('de');
  let language = 'de';
  export async function preload() {
    return waitLocale('de');
  }

    let ready = false;
  const redirectTime = 1000; // 1 seconds

  onMount(() => {
    //const redirectTimer = setTimeout(() => {
    //  goto('/de/Meetings');
    //}, redirectTime);
    //ready = true
    // Clear the timer if the component is unmounted
    //return () => clearTimeout(redirectTimer);
  });
</script>
<main>
  <Menu />
  <div id="main" class="w3-container">
    <div class="w3-container w3-white w3-padding-16">
      <div class="w3-row">
        <div class="w3-center">
          <h1 in:scale out:fade>Wilkommen</h1>
		        <SignIn />
        </div>
      </div>
    </div>
  </div>
</main>
