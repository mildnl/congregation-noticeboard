<script>
	import AddMeetingProgramm from "../components/AddMeetingProgramm.svelte";
	import Login from "../components/Login.svelte";
import { _ } from 'svelte-i18n';
    let isLoggedIn = false
    let SelectedComponent = Login;
    const components = [
          { id: 'admin.login', component: Login, },
          { id: 'admin.test', component: AddMeetingProgramm, },
      ];
    function handleMenuItemSelected(item) {
        SelectedComponent = components.find(type => type.id == item).component;
    }
</script>
<style>
     footer {
  position: fixed;
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
  color: grey;
  text-decoration: none;
  margin-left: 10px;
}
</style>

<h1 class="w3-center w3-padding w3-panel w3-green">{$_('admin.title')}</h1>
<div class="w3-container">
    {#if SelectedComponent && isLoggedIn}
      <svelte:component this={SelectedComponent}/>
    {/if}
    {#if isLoggedIn == false}
        <Login bind:isLoggedIn />
    {/if}
    <h1 class="w3-center">{isLoggedIn}</h1>
</div>

<footer>
  <a href="/" title="Home">Home</a>
</footer>


