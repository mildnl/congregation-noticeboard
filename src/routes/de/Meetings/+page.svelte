<script>
  import Meetings from '../../../views/Meetings.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Meetings meetingData={data.meetingData} />