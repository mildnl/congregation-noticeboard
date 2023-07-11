<script>
  import Conventions from '$lib/views/Conventions.svelte';
    /** @type {import('./$types').PageData} */
  export let data;
</script>

<Conventions conventionInvites={data.conventionInvites}/>