<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { waitLocale } from 'svelte-i18n';
  import setupI18n from '$lib/services/i18n/i18n';
	import SignIn from "$lib/components/SignIn.svelte";
	import Menu from "$lib/components/Menu.svelte";
	import { store } from "$lib/services/auth/amplifyFunctions";

setupI18n('de');
export async function preload() {
  return waitLocale('de');
}

let user = $store.user
store.subscribe(() => user = $store.user)
</script>
<main>
  <Menu />
  <div id="main" class="w3-container">
    <div class="w3-container w3-white w3-padding-16">
      <div class="w3-row">
        <div class="w3-center">
          <h1 in:scale out:fade>Wilkommen</h1>
          <pre>{JSON.stringify($store,null,2)}</pre>
          {#if user != null}
		        <p>User</p>
	        {:else}
		        <SignIn />
	        {/if}
        </div>
      </div>
    </div>
  </div>
</main>
