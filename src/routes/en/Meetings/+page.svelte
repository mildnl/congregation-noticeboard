<script>
  import { _, setupI18n } from '../../../services/i18n/i18n';
  import Menu from '../../../components/Menu.svelte';
  import Meetings from '../../../views/Meetings.svelte';
  import { onMount } from 'svelte';
  import '../../../styles/w3.css';

  let language = 'en'
  const i18n = setupI18n({ withLocale: language });
  
 onMount(() => {
    document.body.classList.add('has-loaded');
    i18n.load();
    i18n.setLocale(language);
  });
</script>

<style>
  :global(body) {
    background-color:whitesmoke;
  }
</style>

<main>
  <Menu bind:language/>
  <MainView SelectedComponent={Meetings}/>
</main>