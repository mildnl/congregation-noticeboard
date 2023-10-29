<script>
import { _ } from 'svelte-i18n';
	import ConventionCard from '../components/ConventionCard.svelte';
  export let conventionInvites = [{
    date: null,
    location: null,
    host: null
  }];
</script>

<div class="w3-container">
  <h1 class="w3-center w3-padding w3-panel w3-black">{$_('menu.conventions')}</h1>
</div>
<div class="w3-container">
  <h4 class="w3-center">{$_('conventions.announcment')}</h4>

  <div class="w3-row">
    {#each conventionInvites as invite}
    <div class="w3-col s12 m6">
      <ConventionCard conventionData={invite}/>
    </div>
    {/each}
  </div>
</div>

