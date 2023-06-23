<script>
  import MinistrySchedule from '../components/MinistrySchedule.svelte';
	import Modal from '../components/Modal.svelte';
  import { _ } from 'svelte-i18n';

  let showModalInfoStand = false;
  let showModalVisit = false;
  let showModalTrolley = false;

  function toggleModalInfoStand(modalBool) {
    showModalInfoStand = !showModalInfoStand
  }
  function toggleModalVisit(modalBool) {
    showModalVisit = !showModalVisit
  }
  function toggleModalTrolley(modalBool) {
    showModalTrolley = !showModalTrolley
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

<div class="w3-container">
  <h1 class="w3-center w3-padding w3-panel w3-yellow">{$_('menu.ministry')}</h1>
</div>
<div class="w3-padding">
  <div class="w3-bar w3-white w3-border">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p on:click={toggleModalTrolley(showModalTrolley)} class="w3-bar-item w3-button w3-hover-yellow" style="width:33%">{$_('ministry.trolley')}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p on:click={toggleModalInfoStand(showModalInfoStand)} class="w3-bar-item w3-button w3-hover-yellow" style="width:33%">{$_('ministry.infostand')}</p>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p on:click={toggleModalVisit(showModalVisit)} class="w3-bar-item w3-button w3-hover-yellow" style="width:33%">{$_('ministry.co-visit')}</p>
  </div>
</div>
<div class="w3-container">
  <div class="w3-container">
    <MinistrySchedule />
  </div>
</div>
<Modal showModal={showModalInfoStand}>
  <!-- TODO add translation --> 
  <h4>{$_('ministry.infostand')} noch in Planung</h4>
  <p>Das Versammlungsdienstkomitee wählt geeignete getaufte Verkündiger aus.</p>
</Modal>
<Modal showModal={showModalVisit}>
  <!-- TODO add translation --> 
  <h4>{$_('ministry.co-visit')}</h4>
  <p>Die nächste Besuchswoche ist vom <strong>20. bis 25. Juni 2023</strong> eingeplant.</p>
</Modal>
<Modal showModal={showModalTrolley}>
  <!-- TODO add translation --> 
  <div class="w3-center">
    <a href="https://www.jwmanagement.org/de/signin" target='_blank' class="w3-button w3-yellow">Login JW Management</a>
  </div>
  <h4>Trolleydienst</h4>
  <p>Das Versammlungsdienstkomitee wählt geeignete getaufte Verkündiger aus.</p>
  <h4>Fernfahrerdienst</h4>
  <p>Die an diesem Dienstzweig teilnehmenden Verkündiger werden vom Kreisaufseher ausgewählt und erhalten eine Schulung für ihre Tätigkeit. Bitte wende Dich an das Dienstkomitee. Sie geben Deinen Wunsch an den Kreisaufseher weiter.</p>
</Modal>

<footer class="w3-container w3-center w3-padding">
  <a href="/" title="Home">Home</a>
</footer>
