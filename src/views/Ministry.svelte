<script>
  import MinistrySchedule from '../components/MinistrySchedule.svelte';
import { _ } from '../services/i18n/i18n';
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
    <a href="#top" class="w3-bar-item w3-button w3-hover-yellow" style="width:33%">{$_('menu.organisation.cleaning')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-yellow" style="width:33%">{$_('menu.organisation.ministry-groups')}</a>
    <a href="#top" class="w3-bar-item w3-button w3-hover-yellow" style="width:33%">{$_('menu.organisation.organisation-plan')}</a>
  </div>
</div>
<div class="w3-container">
  <MinistrySchedule/>
</div>


<footer>
</footer>