<script>
  import { Auth } from 'aws-amplify';

  let email = '';
  let password = '';

  const signIn = async () => {
    try {
      await Auth.signIn(email, password);
      // User successfully signed in
    } catch (error) {
      console.log('Sign-in error:', error);
    }
  };
</script>

<div>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} />

  <button on:click={signIn}>Sign In</button>
</div>
