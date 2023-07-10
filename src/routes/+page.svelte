<script lang="ts">
  import { fade, scale } from "svelte/transition";
  import Menu from '$lib/components/Menu.svelte';
  import { waitLocale } from 'svelte-i18n';
  import setupI18n from '$lib/services/i18n/i18n';
  import { invalidateAll } from '$app/navigation';
 import { signUp } from "$lib/services/auth/amplifyFunctions";
	import type { CognitoUser } from "amazon-cognito-identity-js";

setupI18n('de');
export async function preload() {
  return waitLocale('de');
}

const handleSignUp = async (event: any) => {
  const data = new FormData(event.target);
  try {
    await signUp({
      username: data.get('username')?.toString() || 'user_test_1',
      email: data.get('email')?.toString() || "mail2mildner@gmail.com",
      password: data.get('password')?.toString() || "Pr0v3rbius27!!",
      givenName: data.get('givenName')?.toString() || "Markus",
      familyName: data.get('familyName')?.toString() || "Mildner",
      phoneNumber: data.get('phoneNumber')?.toString() || "01627564911"
    });
  } catch (error) {
    await invalidateAll();
  }
}
</script>

<style>
  :global(body) {
    background-color: whitesmoke;
  }

  footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  footer a {
    color: #000;
    margin-left: 5px;
  }
</style>

<main>
  <Menu />
  <div id="main" class="w3-container">
    <div class="w3-container w3-white w3-padding-16">
      <div class="w3-row">

        <div class="w3-center">
          <h1 in:scale out:fade>Wilkommen</h1>
          <h1>Login</h1>

          <div>
            <form name="signup" method="POST" on:submit|preventDefault={handleSignUp}>
              <input name="username" type="text" placeholder="Username" />
              <input name="email" type="email" placeholder="Email Address" />
              <input name="password" placeholder="Password" type="password" />
              <input name="givenName" type="text" placeholder="Given Name" />
              <input name="familyName" type="text" placeholder="Family Name" />
              <input name="phoneNumber" type="tel" placeholder="Phone Number" />
              <button>Sign Up</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</main>

<footer class="w3-container w3-center w3-padding">
  <a href="https://www.flaticon.com/de/kostenlose-icons/diamant" title="diamant Icons">Diamant</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/weizen" title="weizen Icons">Wheat</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/meeting" title="meeting Icons">Meeting</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/promotion" title="promotion Icons">Promotion</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/radio" title="radio Icons">Radio</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/stadium" title="stadium Icons">Stadium</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/talking" title="talking Icons">Talking</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/teamwork" title="teamwork Icons">Teamwork</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/user" title="user Icons">User</a>
</footer>
