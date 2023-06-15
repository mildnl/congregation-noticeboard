<script>
  import { _ } from 'svelte-i18n';
  import MeetingProgramm from '../components/MeetingProgramm.svelte';
  export let meetingData;
</script>

<div class="w3-container w3-padding w3-panel w3-grey">
  <h1 class="w3-center">{$_('menu.meetings')}</h1>
</div>
<div class="w3-row">
  <div class="w3-col s12">
    <MeetingProgramm {meetingData}/>
  </div>
</div>


