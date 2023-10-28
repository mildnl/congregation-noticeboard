<script>
import { signIn, signOut, signUp, getCurrentUser, confirmSignUp, resendConfirmationCode } from '$lib/services/auth/amplifyFunctions';
import { registering } from "$lib/services/stores";
import Modal from '$lib/components/Modal.svelte';
import { onDestroy } from 'svelte';

let isRegistering = false;

let unsubscribe = registering.subscribe((value) => {
  isRegistering = value;
})

let username = '';
let psw = '';
let code = '';
let givenName = '';
let familyName = '';
let email = '';
let phoneNumber = '';

onDestroy(unsubscribe);
</script>
<div class="w3-container w3-black">
  <h2>Sign Up</h2>
</div>

<div class="w3-container">
  <div class="w3-half w3-padding">
    <label class="w3-text-black" for="uname"><b>Username</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Username" name="uname" required bind:value={username} />

    <label class="w3-text-black" for="psw"><b>Password</b></label>
    <input class="w3-input w3-border" type="password" placeholder="Enter Password" name="psw" required bind:value={psw} />
  </div>

  <div class="w3-half w3-padding">
    <label class="w3-text-black" for="given_name"><b>First Name</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter First Name" name="given_name" required bind:value={givenName} />

    <label class="w3-text-black" for="family_name"><b>Last Name</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Last Name" name="family_name" required bind:value={familyName} />

    <label class="w3-text-black" for="email"><b>Email</b></label>
    <input class="w3-input w3-border" type="email" placeholder="Enter Email" name="email" required bind:value={email} />

    <label class="w3-text-black" for="phone_number"><b>Phone Number</b></label>
    <input class="w3-input w3-border" type="text" placeholder="Enter Phone Number" name="phone_number" required bind:value={phoneNumber} />
  </div>
  <button class="w3-btn w3-black" type="submit" on:click={() => signUp(username, psw, email)}>Register</button>
</div>


<Modal showModal={isRegistering}>
  <label for="code"><b>Code</b></label>
  <input type="text" placeholder="Enter code" name="code" required bind:value={code} />
  <button on:click={() => confirmSignUp(email, code)}>Verify code</button>
  <button on:click={() => resendConfirmationCode(username)}>Resend code</button>
</Modal>
