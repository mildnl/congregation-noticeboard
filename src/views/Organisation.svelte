<script>
  import CleaningSchedule from '../components/CleaningSchedule.svelte'
  import Modal from '../components/Modal.svelte';
  import { _ } from '../services/i18n/i18n';


  let showModalOrgPlan = false;
  let showModalMinistryGroups = false;
  let modalText = '';

  async function handleButtonClick(text, display) {
    modalText = text + ' hängt an der Bekanntmachungstafel im Königreichsaal aus.';
    displayModal= display
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

<h1 class="w3-center w3-padding w3-panel w3-red">{$_('menu.organisation.title')}</h1>

<div class="w3-bar w3-dark-grey">
  <a href="#top" class="w3-bar-item w3-button " style="width:33%">{$_('menu.organisation.cleaning')}</a>
  <a href="#top" on:click={() => (showModalOrgPlan = true)} class="w3-bar-item w3-button " style="width:33%">{$_('menu.organisation.ministry-groups')}</a>
  <a href="#top" on:click={() => (showModalMinistryGroups = true)} class="w3-bar-item w3-button " style="width:33%">{$_('menu.organisation.organisation-plan')}</a>
</div>

<div>
    <svelte:component this={CleaningSchedule} />
</div>

<Modal showModal={showModalOrgPlan}>
	<p>Der Organisationsplan der Versammlung hängt an der Bekanntmachungstafel im Königreichsaal aus.</p>
</Modal>
<Modal showModal={showModalMinistryGroups}>
	<p>Die Einteilung der Predigtdienstgruppen hängt an der Bekanntmachungstafel im Königreichsaal aus.</p>
</Modal>

<footer>
  <a href="#top" title="Home">Home</a>
</footer>