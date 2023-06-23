<script>
  import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
  export let isLoggedIn
  const form = useForm();

  function handleLogin() {
    let message = "Logged in User: " + form.email + " : " + form.password
    alert(message)
    isLoggedIn = true
  }
</script>



<div class="w3-display-middle w3-card">
    <div class="w3-center">
        <form use:form class="w3-container w3-card-4 w3-light-grey">
            <h1>Login</h1>
            <label for="email">E-Mail</label>
            <input class="w3-input w3-border w3-round" type="email" name="email" use:validators={[required, email]} />
            <HintGroup for="email">
              <Hint on="required">This is a mandatory field</Hint>
              <Hint on="email" hideWhenRequired>Email is not valid</Hint>
            </HintGroup>
            <label for="password">Password</label>
            <input class="w3-input w3-border w3-round" type="password" name="password" use:validators={[required]} />
            <Hint for="password" on="required">This is a mandatory field</Hint>
        
            <button disabled={!$form.valid} on:click={handleLogin}>Login</button>
        </form>
    </div> 
</div>