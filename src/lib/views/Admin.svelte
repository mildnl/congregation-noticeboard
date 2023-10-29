<script>
	import AddMeetingProgramm from "$lib/components/AddMeetingProgramm.svelte";
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
  <div class="w3-container">
    {#if isLoggedIn}
      <AddMeetingProgramm />
    {:else}
      {#if isSignIn}
        <SignIn />
      {:else}
        <SignUp />
      {/if}

      <button class="w3-btn w3-black" on:click={toggleSignIn}>
        {#if isSignIn}
          Sign Up
        {:else}
          Sign In
        {/if}
      </button>
    {/if}
  </div>