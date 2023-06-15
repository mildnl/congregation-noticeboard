<script>
  import Announcements from '../../../views/Announcements.svelte';
    /** @type {import('./$types').PageData} */
  export let data;
</script>

<Announcements announcementItems={data.announcementItems} />