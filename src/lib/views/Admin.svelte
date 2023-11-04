<script>
	import AddMeetingProgramm from "$lib/components/AddMeetingProgramm.svelte";
  import {signOut, getCurrentUser} from '$lib/services/auth/amplifyFunctions';
	import SignIn from "$lib/components/SignIn.svelte";
	import SignUp from "$lib/components/SignUp.svelte";
  import { loggedIn } from "$lib/services/stores";
	import { onDestroy } from "svelte";
  import { _ } from 'svelte-i18n';
    let isLoggedIn = false;
    let isSignIn = false;
    let unsubscribe = loggedIn.subscribe((value) => {
      isLoggedIn = value;
    });
    function toggleSignIn() {
    isSignIn = !isSignIn;
  }
    onDestroy(unsubscribe);
</script>

  <h1 class="w3-center w3-padding w3-panel w3-green">{$_('admin.title')}</h1>

  <div class="w3-bar w3-border w3-green">
    <button class="w3-btn w3-green" on:click={toggleSignIn}>
    {#if isSignIn}
        {$_('admin.sign-up')}
    {:else}
        {$_('admin.login')}
    {/if}
</button>
{#if isLoggedIn}
  <button class="w3-btn w3-green" on:click={getCurrentUser}>Profile</button>
  <button class="w3-btn w3-green" on:click={signOut}>{$_('admin.logout')}</button>
{/if}
  </div>
{#if isSignIn}
    <SignIn />
{:else}
    <SignUp />
{/if}
