<script>
  import { _ } from 'svelte-i18n';
  import RadioProgramm from '../components/RadioProgramm.svelte';
  const currentYear = new Date().getFullYear();
  export let tableData;
</script>

<div class="w3-container">
  <h1 class="w3-center w3-padding w3-panel w3-blue">{$_('menu.radio')}</h1>
  <div>
    <h3>{$_('radio.title')}</h3>
    <p>{$_('radio.description').replace('{year}', currentYear)}</p>
  </div>
  <div class="w3-padding">
    <div class="w3-bar w3-blue w3-border">
      <a href="https://www.br.de/radio/live/bayern2/" class="w3-button" style="width: 32%">BR2 Livestream</a>
      <a href="https://www.ndr.de/nachrichten/info/programm/livestream150.html" class="w3-button" style="width: 32%">NDR Info Livestream</a>
      <a href="https://jwconf.org/sendungen" class="w3-button" style="width: 32%">Archiv</a>
    </div>
  </div>
  <div class="w3-padding w3-bar">
  </div>

  {#each Object.entries(tableData) as [channelName, data]}
    <RadioProgramm tableData={data} channelName={channelName} />
  {/each}
</div>