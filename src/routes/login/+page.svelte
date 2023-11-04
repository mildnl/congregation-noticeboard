<script lang="ts">
  import '../../assets/styles/w3.css';
  import SignIn from "$lib/components/SignIn.svelte";
	import SignUp from "$lib/components/SignUp.svelte";
  import {loggedIn} from "$lib/services/stores";
	import { onDestroy } from "svelte";
  import {signOut, getCurrentUser} from '$lib/services/auth/amplifyFunctions';


  let isSignIn = true; 
  let isLoggedIn = false;


  let unsubscribe = loggedIn.subscribe((value) => {
    isLoggedIn = value;
  })

  function toggleSignIn() {
    isSignIn = !isSignIn;
  }

  onDestroy(unsubscribe);

</script>
<div class="w3-padding">
  <div class="w3-bar w3-white w3-border">
    <button class="w3-btn" on:click={toggleSignIn}>
    {#if isSignIn}
        Sign Up
    {:else}
        Sign In
    {/if}
</button>
{#if isLoggedIn}
  <button class="w3-btn" on:click={getCurrentUser}>Profile</button>
  <button class="w3-btn" on:click={signOut}>Logout</button>
{/if}
  </div>
</div>
<div class="w3-container">
{#if isSignIn}
    <SignIn />
{:else}
    <SignUp />
{/if}
</div>