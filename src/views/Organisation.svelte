<script>
  import CleaningSchedule from '../components/CleaningSchedule.svelte'
  import Modal from '../components/Modal.svelte';
  import { _ } from 'svelte-i18n';


  let showModalOrgPlan = false;
  let showModalMinistryGroups = false;
</script>

<div class="w3-container">
  <h1 class="w3-center w3-padding w3-panel w3-red">{$_('menu.organisation.title')}</h1>
</div>

<div class="w3-bar w3-dark-grey">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p on:click={() => (showModalOrgPlan = true)} class="w3-bar-item w3-button" style="width:50%">{$_('menu.organisation.ministry-groups')}</p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <p on:click={() => (showModalMinistryGroups = true)} class="w3-bar-item w3-button" style="width:50%">{$_('menu.organisation.organisation-plan')}</p>
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

