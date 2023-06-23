<script>
  import Meetings from '$lib/views/Meetings.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Meetings meetingData={data.meetingData} />