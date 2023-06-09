<script>
  import Radio from '../../views/Radio.svelte';
  import { _, setupI18n } from '../../services/i18n/i18n';
  import Menu from '../../components/Menu.svelte';
  import MainView from '../../components/MainView.svelte';
  import { onMount } from 'svelte';
  import '../../styles/w3.css';

  let language = 'de'
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
  <MainView SelectedComponent={Radio}/>
</main>