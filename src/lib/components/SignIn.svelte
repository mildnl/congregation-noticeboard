<script>
	import { store } from '$lib/stores';
  import { Auth } from 'aws-amplify';

  let username = '';
  let password = '';

  const signIn = async () => {
    try {
      const user = await Auth.signIn(username, password);
      // User successfully signed in
      store.set(user)
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  };
</script>
<div class="w3-card-2">

<div class="w3-container w3-black">
  <h2>Sign In</h2>
</div>

<form class="w3-container">

<label for="username-input">Username</label>
<input id="username-input" class="w3-input" type="text" bind:value={username}>

<label for="password-input">Password</label>
<input id="password-input" class="w3-input" type="password" bind:value={password}>
<button class="w3-button" on:click={signIn}>Sign In</button>
</form>
</div>
