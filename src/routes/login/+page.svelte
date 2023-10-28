<script lang="ts">
  import '../../assets/styles/w3.css';
  import SignIn from "$lib/components/SignIn.svelte";
	import SignUp from "$lib/components/SignUp.svelte";
  import {loggedIn} from "$lib/services/stores"
	import { onDestroy } from "svelte";
  

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


{#if isSignIn}
    <SignIn />
{:else}
    <SignUp />
{/if}
        
<button class="w3-btn" on:click={toggleSignIn}>
    {#if isSignIn}
        Sign Up
    {:else}
        Sign In
    {/if}
</button>



