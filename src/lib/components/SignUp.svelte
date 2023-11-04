<script lang='ts'>
import { signUp, confirmSignUp, resendConfirmationCode } from '$lib/services/auth/amplifyFunctions';
import { registering } from "$lib/services/stores";
import Modal from '$lib/components/Modal.svelte';
import { onDestroy } from 'svelte';
import { _ } from 'svelte-i18n';

let isRegistering = false;

let unsubscribe = registering.subscribe((value) => {
  isRegistering = value;
})

let username = '';
let password = '';
let confirmPassword = '';

let error;

function validatePassword(password: string, confirmPassword: string) {
  return confirmPassword !== password 
}
let code = '';
let givenName = '';
let familyName = '';
let email = '';
let phoneNumber = '';

onDestroy(unsubscribe);
</script>
<div class="w3-container w3-green">
  <h2>{$_('admin.sign-up')}</h2>
</div>

<div class="w3-container w3-hide">
  <div class="w3-half w3-padding">
    <label class="w3-text-green" for="username"><b>Username</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />

    <label class="w3-text-green" for="psw"><b>Password</b></label>
    <input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={password} />
  </div>

  <div class="w3-half w3-padding">
    <label class="w3-text-green" for="given_name"><b>First Name</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter First Name" name="given_name"  bind:value={givenName} />

    <label class="w3-text-green" for="family_name"><b>Last Name</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Last Name" name="family_name"  bind:value={familyName} />

    <label class="w3-text-green" for="email"><b>Email</b></label>
    <input class="w3-input w3-border" type="email" placeholder="Enter Email" name="email" required bind:value={email} />

    <label class="w3-text-green" for="phone_number"><b>Phone Number</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Phone Number" name="phone_number"  bind:value={phoneNumber} />
  </div>
  <button class="w3-btn w3-green" type="submit" on:click={() => signUp({username:username, password:password, email:email, phoneNumber:phoneNumber})}>Register</button>
</div>


<form method="POST" action="?/register" class="w3-container w3-padding {$$props.class}">
  <div class="w3-half w3-padding">
<label class="w3-text-green" for="username"><b>Username</b></label>
	<input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />
    <label class="w3-text-green" for="psw"><b>Password</b></label>
	<input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={password} />
    <input class="w3-input w3-border" placeholder="Confirm Password" name="confirm-password" type="password" bind:value={confirmPassword}/>
  </div>
    

    <div class="w3-half w3-padding">
    <label class="w3-text-green" for="given_name"><b>First Name</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter First Name" name="given_name"  bind:value={givenName} />

    <label class="w3-text-green" for="family_name"><b>Last Name</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Last Name" name="family_name"  bind:value={familyName} />

    <label class="w3-text-green" for="email"><b>Email</b></label>
    <input class="w3-input w3-border" type="email" placeholder="Enter Email" name="email" required bind:value={email} />

    <label class="w3-text-green" for="phone_number"><b>Phone Number</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Phone Number" name="phone_number"  bind:value={phoneNumber} />
  </div>
    {#if confirmPassword !== "" && confirmPassword !== password}
        <p class="text-red-600 text-sm font-semibold">Password not match</p>
    {/if}
    <button class="w3-btn w3-green" type="submit" disabled="{validatePassword(password, confirmPassword)}">Sign In</button>
</form>


<Modal showModal={isRegistering}>
	<div class="w3-padding">
		<label class="w3-text-green" for="username"><b>Username</b></label>
	  <input class="w3-input w3-border" type="text" placeholder="Enter Username" name="username" required bind:value={username} />
		<label class="w3-text-green"  for="code"><b>Code</b></label>
  	<input class="w3-input w3-border" type="text" placeholder="Enter code" name="code" required bind:value={code} />
  	<button class="w3-btn w3-green" on:click={() => confirmSignUp({username, code})}>Verify code</button>
  	<button class="w3-btn w3-green" on:click={() => resendConfirmationCode(username)}>Resend code</button>
	</div>
</Modal>
