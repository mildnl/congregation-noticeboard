<script>
  import Announcements from '$lib/views/Announcements.svelte';
    /** @type {import('./$types').PageData} */
  export let data;
</script>

<Announcements announcementItems={data.announcementItems} />