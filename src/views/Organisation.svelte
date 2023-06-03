<script>
  import { _ } from '../services/i18n/i18n';
  function handleAlert(text) {
      alert(text + " hängt an der Bekanntmachungstafel im Königreichsaal aus.")
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

<h1 class="w3-center w3-padding">{$_('menu.organisation.title')}</h1>

<div class="w3-bar w3-dark-grey">
  <a href="#top" class="w3-bar-item w3-button " style="width:33%">{$_('menu.organisation.cleaning')}</a>
  <a href="#top" on:click={handleAlert("Der Organisationsplan der Versammlung")} class="w3-bar-item w3-button " style="width:33%">{$_('menu.organisation.ministry-groups')}</a>
  <a href="#top" on:click={handleAlert("Die Einteilung der Predigtdienstgruppen")} class="w3-bar-item w3-button " style="width:33%">{$_('menu.organisation.organisation-plan')}</a>
</div>

<div>
  {#if SelectedComponent}
    <svelte:component this={SelectedComponent} />
  {/if}
</div>