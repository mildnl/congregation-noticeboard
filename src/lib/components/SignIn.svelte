<script lang='ts'>
	import { signIn, confirmSignUp, resendConfirmationCode  } from '$lib/services/auth/amplifyFunctions';
	import { registering } from "$lib/services/stores";
	import Modal from '$lib/components/Modal.svelte';
	import { onDestroy } from 'svelte';
	let isRegistering = false;
	let username = '';  
	let psw = '';
	let code = '';

	let unsubscribe = registering.subscribe((value) => {
  		isRegistering = value;
	});

	onDestroy(unsubscribe);
</script>
<div class="w3-container w3-black">
  <h2>Sign In</h2>
</div>

<div class="w3-container">
	<label class="w3-text-black" for="username"><b>Username</b></label>
	<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />

	<label class="w3-text-black" for="psw"><b>Password</b></label>
	<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={psw} />

	<button class="w3-btn w3-black" type="submit" on:click={() => signIn({username:username, password:psw})}>Login</button>	
</div>

<Modal showModal={isRegistering}>
	<div class="w3-padding">
		<label class="w3-text-black" for="username"><b>Username</b></label>
		<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />
		<label class="w3-text-black"  for="code"><b>Code</b></label>
  		<input class="w3-input w3-border" type="text" placeholder="Enter code" name="code" required bind:value={code} />
  		<button class="w3-btn w3-black" on:click={() => confirmSignUp({username:username, code:code})}>Verify code</button>
  		<button class="w3-btn w3-black" on:click={() => resendConfirmationCode(username)}>Resend code</button>
	</div>
</Modal>