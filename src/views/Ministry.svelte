<script>
  import MinistrySchedule from '../components/MinistrySchedule.svelte';
	import Modal from '../components/Modal.svelte';
  import { _ } from '../services/i18n/i18n';

  let showModalInfoStand = false;
  let showModalVisit = false;
  let showModalTrolley = false;
  let SelectedComponent = MinistrySchedule;

  const components = [
        { id: 'ministry.schedule', component: MinistrySchedule, },
        { id: 'ministry.trolley', component: MinistrySchedule, },
        { id: 'ministry.infostand', component: Modal, },
        { id: 'ministry.co-visit', component: Modal, }
    ];
  async function handleMenuItemSelected(item) {
      SelectedComponent = components.find(type => type.id == item).component;
  }
  function toggleModalInfoStand(modalBool) {
    showModalInfoStand = !modalBool
  }
  function toggleModalVisit(modalBool) {
    showModalVisit = !modalBool
  }
  function toggleModalTrolley(modalBool) {
    showModalTrolley = !modalBool
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

<h1 class="w3-center w3-padding w3-panel w3-yellow">{$_('menu.ministry')}</h1>
<div class="w3-padding">
  <div class="w3-bar w3-white w3-border">
    <a href="#top" on:click={handleMenuItemSelected('ministry.schedule')} class="w3-bar-item w3-button w3-hover-yellow" style="width:25%">{$_('ministry.schedule')}</a>
    <a href="#top" on:click={toggleModalTrolley(showModalTrolley)} class="w3-bar-item w3-button w3-hover-yellow" style="width:25%">{$_('ministry.trolley')}</a>
    <a href="#top" on:click={toggleModalInfoStand(showModalInfoStand)} class="w3-bar-item w3-button w3-hover-yellow" style="width:25%">{$_('ministry.infostand')}</a>
    <a href="#top" on:click={toggleModalVisit(showModalVisit)} class="w3-bar-item w3-button w3-hover-yellow" style="width:25%">{$_('ministry.co-visit')}</a>
  </div>
</div>
<div class="w3-container">
  <div class="w3-container">
      {#if SelectedComponent}
        <svelte:component this={SelectedComponent} />
      {/if}
    </div>
</div>
<Modal showModal={showModalInfoStand}>
	  <h4>{$_('ministry.infostand')} noch in Planung</h4>
	<p>Das Versammlungsdienstkomitee wählt geeignete getaufte Verkündiger aus.</p>
</Modal>
<Modal showModal={showModalVisit}>
  <h4>{$_('ministry.co-visit')}</h4>
	<p>Die nächste Besuchswoche ist vom <strong>20. bis 25. Juni 2023</strong> eingeplant.</p>
</Modal>
<Modal showModal={showModalTrolley}>
  <div class="w3-center">
    <a href="https://www.jwmanagement.org/de/signin" target='_blank' class="w3-button w3-yellow">Login JW Management</a>
  </div>
  <h4>Trolleydienst</h4>
	<p>Das Versammlungsdienstkomitee wählt geeignete getaufte Verkündiger aus.</p>
  <h4>Fernfahrerdienst</h4>
  <p>Die an diesem Dienstzweig teilnehmenden Verkündiger werden vom Kreisaufseher ausgewählt und erhalten eine Schulung für ihre Tätigkeit. Bitte wende Dich an das Dienstkomitee. Sie geben Deinen Wunsch an den Kreisaufseher weiter.</p>
</Modal>

<footer>
  <a href="#top" title="Home">Home</a>
</footer>