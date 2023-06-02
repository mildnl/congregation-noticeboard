<script>
  import { _, setupI18n } from '../services/i18n/i18n';
  import Meetings from '../views/Meetings.svelte';
  import Ministry from '../views/Ministry.svelte';
  import Radio from '../views/Radio.svelte';
  import Announcements from '../views/Announcements.svelte';
  import Organisation from '../views/Organisation.svelte';
  import Conventions from '../views/Conventions.svelte';
  import { onMount } from 'svelte';

  const i18n = setupI18n();

 onMount(() => {
    document.body.classList.add('has-loaded');
    i18n.load();
    i18n.setLocale('en');
  });

  let SelectedComponent = Meetings;

  const components = [
        { id: 'menu.meetings', component: Meetings, },
        { id: 'menu.ministry', component: Ministry, },
        { id: 'menu.radio', component: Radio, },
        { id: 'menu.announcments', component: Announcements, },
        { id: 'menu.organisation', component: Organisation, },
        { id: 'menu.conventions', component: Conventions, }
    ];
  async function handleMenuItemSelected(item) {
      SelectedComponent = components.find(type => type.id == item).component;
  }
</script>

<style>
  :global(html) {
    height: 100%;
    perspective: 1000px;
    transform-style: preserve-3d;
    font-family: 'Lato', sans-serif;
  }

  :global(body) {
    background-color: hsl(201, 51%, 66%);
    background: radial-gradient(closest-corner, hsl(201, 51%, 66%) 60%, rgba(hsl(201, 51%, 66%), 0.26));
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
  }

   header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
  }

  h1 {
    text-align: center;
    margin: 0;
    font-size: 24px;
  }

  nav ul {
    display: block;
    text-align: center;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    min-width: 535px;
    background-color: #343e48;
    position: relative;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
  }

  nav li {
    margin: 0 auto;
    display: inline-block;
    list-style: none;
    padding: 0;
  }

  nav a {
    display: block;
    padding: 25px;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
    text-shadow: 1px 0px rgba(0, 0, 0, 0.4);
    color: #fbfbfb;
    letter-spacing: 0.2em;
    text-decoration: none;
    transition: color 200ms;
    transform-style: preserve-3d;
  }

  nav a:hover {
    color: #343e48;
  }

  nav a:after {
    content: attr(data-title);
    position: absolute;
    display: block;
    text-shadow: none;
    top: 29%;
    left: 18px;
    padding: 5px 7px;
    color: transparent;
    background: #4795c3;
    transform-origin: 50% 0%;
    backface-visibility: hidden;
    transform: translate3d(0px, 105%, 0px) rotateX(-112deg);
    transform-style: preserve-3d;
    transition: all 200ms ease;
    z-index: -1;
  }

  nav a:hover:after {
    transform: rotateX(0deg) translateZ(0px);
  }

  nav a:nth-child(2):after {
    background: #ecc64b;
  }

  nav a:nth-child(3):after {
    background: #0b9ea6;
  }

  nav a:nth-child(4):after {
    background: #f26667;
  }

</style>

<main>


<header>
  <h1>{$_('header.title')}</h1>
</header>


<nav>
  <ul>
      <li>
        <a href="#top" on:click={() => handleMenuItemSelected('menu.meetings')}  data-title='menu.meetings'>{$_('menu.meetings')}</a>
      </li>
      <li>
        <a href="#top" on:click={() => handleMenuItemSelected('menu.ministry')}  data-title='menu.ministry'>{$_('menu.ministry')}</a>
      </li>
      <li>
        <a href="#top" on:click={() => handleMenuItemSelected('menu.radio')}  data-title='menu.radio'>{$_('menu.radio')}</a>
      </li>
      <li>
        <a href="#top" on:click={() => handleMenuItemSelected('menu.announcements')}  data-title='menu.announcements'>{$_('menu.announcements')}</a>
      </li>
      <li>
        <a href="#top" on:click={() => handleMenuItemSelected('menu.organisation')}  data-title='menu.organisation'>{$_('menu.organisation')}</a>
      </li>
      <li>
        <a href="#top" on:click={() => handleMenuItemSelected('menu.conventions')}  data-title='menu.conventions'>{$_('menu.conventions')}</a>
      </li>
    </ul>
</nav>

{#if SelectedComponent}
    <svelte:component this={SelectedComponent} />
{/if}
</main>
