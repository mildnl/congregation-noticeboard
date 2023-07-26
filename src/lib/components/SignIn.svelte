<script lang='ts'>
	import { signIn, rememberDevice, verifyCurrentUserAttributeSubmit } from '$lib/services/auth/amplifyFunctions';
  import { invalidateAll } from '$app/navigation';
  import Modal from './Modal.svelte';
  let showModal = false;
 const handleSignIn = async (event: any) => {
  const data = new FormData(event.target);
  try {
    await signIn({
      username: data.get('username')?.toString() || "",
      password: data.get('password')?.toString() || "",
    });
  } catch (error) {
    console.log(error)
    if (error.name === "NotAuthorizedException" && error.message.includes("Temporary password has expired")) {
      showModal = true;
    }
    console.log("sm:" + showModal)
    await invalidateAll();
  }
}
const handleVerification = async (event: any) => {
  const data = new FormData(event.target);
  try {
    await verifyCurrentUserAttributeSubmit({code:data.get('verification')?.toString() || ""}).then(() => rememberDevice());
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
<Modal {showModal}>
  <p>Please Verify your Account.</p>
  <p>Please check your e-mail account.</p>
  <form class="w3-container" on:submit|preventDefault={handleVerification}>
<label for="verification">Verification Code</label>
<input id="verification" class="w3-input" type="password" name="verification">
<button class="w3-button">Verify</button>
</form>
</Modal>