<script lang='ts'>
	import { signIn, confirmSignUp, resendConfirmationCode  } from '$lib/services/auth/amplifyFunctions';
	import { registering } from "$lib/services/stores";
	import Modal from '$lib/components/Modal.svelte';
	import { onDestroy } from 'svelte';
	import { _ } from 'svelte-i18n';
	
	


	let isRegistering = false;
	let username = '';  
	let password = '';

    let error;

	let code = '';

	let unsubscribe = registering.subscribe((value) => {
  		isRegistering = value;
	});

	onDestroy(unsubscribe);
</script>
<div class="w3-container w3-green">
  <h2>{$_('admin.login')}</h2>
</div>

<div class="w3-container w3-hide">
	<label class="w3-text-green" for="username"><b>Username</b></label>
	<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />

	<label class="w3-text-green" for="psw"><b>Password</b></label>
	<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={password} />

	<button class="w3-btn w3-green" type="submit" on:click={() => signIn({username:username, password:password})}>Login</button>	
</div>

<form method="POST" action="?/login" class="w3-container w3-padding {$$props.class}">
    <label class="w3-text-green" for="username"><b>Username</b></label>
	<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />
    <label class="w3-text-green" for="psw"><b>Password</b></label>
	<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={password} /> 
    <button class="w3-btn w3-green" type="submit">Sign In</button>
</form>

<Modal showModal={isRegistering}>
	<div class="w3-padding">
		<label class="w3-text-green" for="username"><b>Username</b></label>
		<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />
		<label class="w3-text-green"  for="code"><b>Code</b></label>
  		<input class="w3-input w3-border" type="text" placeholder="Enter code" name="code" required bind:value={code} />
  		<button class="w3-btn w3-green" on:click={() => confirmSignUp({username:username, code:code})}>Verify code</button>
  		<button class="w3-btn w3-green" on:click={() => resendConfirmationCode(username)}>Resend code</button>
	</div>
</Modal>