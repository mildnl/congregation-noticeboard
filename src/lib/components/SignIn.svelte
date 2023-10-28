<script lang='ts'>
	import { signIn } from '$lib/services/auth/amplifyFunctions';

  let username = '';  
	let psw = '';
</script>
<div class="w3-container w3-black">
  <h2>Sign In</h2>
</div>

<div class="w3-container">

	<label class="w3-text-black" for="uname"><b>Username</b></label>
	<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="uname" required bind:value={username} />

	<label class="w3-text-black" for="psw"><b>Password</b></label>
	<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={psw} />

	<button class="w3-btn w3-black" type="submit" on:click={() => signIn(username, psw)}>Login</button>	
</div>