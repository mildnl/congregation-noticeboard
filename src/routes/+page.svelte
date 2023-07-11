<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import { waitLocale } from 'svelte-i18n';
  import setupI18n from '$lib/services/i18n/i18n';
	import { store } from "$lib/stores";
	import SignIn from "$lib/components/SignIn.svelte";

setupI18n('de');
export async function preload() {
  return waitLocale('de');
}
</script>
<h1 in:scale out:fade>Wilkommen</h1>
{#if $store != null}
		<p>User {$store}</p>
	{:else}
		<SignIn />
	{/if}