<script>
  import Menu from '$lib/components/Menu.svelte';
  import { waitLocale } from 'svelte-i18n';
  import { language } from '$lib/services/stores';
	import { onDestroy } from 'svelte';
  let lang = 'de';
  let unsubscribe = language.subscribe((value) => {
    lang = value;
  });
  export async function preload() {
    return waitLocale(lang);
  };
  onDestroy(unsubscribe);
</script>

<style>
  :global(body) {
    background-color:whitesmoke;
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