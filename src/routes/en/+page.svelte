<script>
  import { _, setupI18n } from '../../services/i18n/i18n';
  import Meetings from '../../views/Meetings.svelte';
  import Ministry from '../../views/Ministry.svelte';
  import Radio from '../../views/Radio.svelte';
  import Announcements from '../../views/Announcements.svelte';
  import Organisation from '../../views/Organisation.svelte';
  import Conventions from '../../views/Conventions.svelte';
	import Admin from '../../views/Admin.svelte';
  import { onMount } from 'svelte';
  import '../../styles/w3.css'


  const i18n = setupI18n();

 onMount(() => {
    document.body.classList.add('has-loaded');
    i18n.load();
    i18n.setLocale('de');
  });

  let SelectedComponent = Meetings;

  const components = [
        { id: 'menu.meetings', component: Meetings, },
        { id: 'menu.ministry', component: Ministry, },
        { id: 'menu.radio', component: Radio, },
        { id: 'menu.announcements', component: Announcements, },
        { id: 'menu.organisation', component: Organisation, },
        { id: 'menu.conventions', component: Conventions, },
        { id: 'menu.login', component: Admin, }
    ];
  async function handleMenuItemSelected(item) {
      SelectedComponent = components.find(type => type.id == item).component;
  }
  function openMenu() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function closeMenu() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
</script>

<style>
  :global(body) {
    background-color:whitesmoke;
  }
</style>

<main>
  <div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">
    <button class="w3-bar-item w3-button w3-large" on:click={closeMenu}>Close &times;</button>
    <a href="#top" class="w3-bar-item w3-button w3-hover-gray"  on:click={() => handleMenuItemSelected('menu.meetings')}  data-title='menu.meetings'>{$_('menu.meetings')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-yellow"  on:click={() => handleMenuItemSelected('menu.ministry')}  data-title='menu.ministry'>{$_('menu.ministry')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-blue"  on:click={() => handleMenuItemSelected('menu.radio')}  data-title='menu.radio'>{$_('menu.radio')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-teal"  on:click={() => handleMenuItemSelected('menu.announcements')}  data-title='menu.announcements'>{$_('menu.announcements')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-red"  on:click={() => handleMenuItemSelected('menu.organisation')}  data-title='menu.organisation'>{$_('menu.organisation.title')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-black"  on:click={() => handleMenuItemSelected('menu.conventions')}  data-title='menu.conventions'>{$_('menu.conventions')}</a> 
    <a href="#top" class="w3-bar-item w3-button w3-hover-green"  on:click={() => handleMenuItemSelected('menu.login')}  data-title='menu.login'>Login</a> 
  </div>
  <div  id="main">
    <div class="w3-container">
      <div class="w3-row">
        <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
        <div class="w3-col w3-container w3-white w3-padding-64" style="width:80%">
          <header class="w3-container w3-padding">
          <button id="openNav" class="w3-button w3-xlarge" on:click={openMenu}>&#9776;</button>
          <h1 class="w3-center">{$_('header.title')}</h1>
        </header>
            {#if SelectedComponent}
              <svelte:component this={SelectedComponent} />
            {/if}
        </div>
        <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
    </div>
  </div>
</main>
