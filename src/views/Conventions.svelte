<script>
import { _ } from 'svelte-i18n';
	import ConventionCard from '../components/ConventionCard.svelte';
  let conventionInvites = [
    {
      date: '07.10.2023',
      location: 'Stadthalle, Gütersloh',
      host: 'conventions.host-co'
    },
    {
      date: '19.05.2024',
      location: 'Stadthalle, Gütersloh',
      host: 'conventions.host-bethel'
    }
  ]

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
  <h1 class="w3-center w3-padding w3-panel w3-black">{$_('menu.conventions')}</h1>
</div>
<div class="w3-container">
  <h4 class="w3-center">{$_('conventions.announcment')}</h4>

  <div class="w3-row">
      {#each conventionInvites as invite}
      <div class="w3-col s6">
        <ConventionCard conventionData={invite}/>
      </div>
      {/each}
  </div>
</div>


<footer>
  <a href="#top" title="Home">Home</a>
</footer>