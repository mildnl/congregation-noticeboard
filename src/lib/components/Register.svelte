<script>

  import { invalidateAll } from '$app/navigation';
 import { signUp } from "$lib/services/auth/amplifyFunctions";
	import { store } from "$lib/stores";
    const handleSignUp = async (event: any) => {
  const data = new FormData(event.target);
  try {
    const user = await signUp({
      username: data.get('username')?.toString() || "test",
      email: data.get('email')?.toString() || "mail2mildner@gmail.com",
      password: data.get('password')?.toString() || "Pr0v3rbius27!!",
      given_name: data.get('givenName')?.toString() || "Markus",
      family_name: data.get('familyName')?.toString() || "Mildner",
      phone_number: data.get('phoneNumber')?.toString() || "+491627564911"
    });
    store.set(user);
  } catch (error) {
    await invalidateAll();
  }
}
</script>

<h1>Register</h1>
          <div>
            <form class="w3-container w3-card w3-padding" name="signup" method="POST" on:submit|preventDefault={handleSignUp}>
              <div class="w3-padding">
                <input class="w3-input" name="username" type="text" placeholder="Username" />
              
              <input class="w3-input" name="email" type="email" placeholder="Email Address" />
              
              <input class="w3-input" name="password" placeholder="Password" type="password" />
              
              <input class="w3-input" name="givenName" type="text" placeholder="Given Name" />
              
              <input class="w3-input" name="familyName" type="text" placeholder="Family Name" />
              
              <input class="w3-input" name="phoneNumber" type="tel" placeholder="Phone Number" />
              
              </div>
              <button class="w3-button">Sign Up</button>
            </form>
          </div>