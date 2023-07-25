<script lang='ts'>
	import { signIn } from '$lib/services/auth/amplifyFunctions';
  import { invalidateAll } from '$app/navigation';
  
 const handleSignIn = async (event: any) => {
  const data = new FormData(event.target);
  try {
    await signIn({
      username: data.get('username')?.toString() || "",
      password: data.get('password')?.toString() || "",
    });
  } catch (error) {
    console.log(error)
    await invalidateAll();
  }
}
</script>
<div class="w3-card-2">

<div class="w3-container w3-black">
  <h2>Sign In</h2>
</div>

<form class="w3-container" on:submit|preventDefault={handleSignIn}>

<label for="username-input">Username</label>
<input id="username-input" class="w3-input" type="text" name="username">

<label for="password-input">Password</label>
<input id="password-input" class="w3-input" type="password" name="password">
<button class="w3-button">Sign In</button>
</form>
</div>
