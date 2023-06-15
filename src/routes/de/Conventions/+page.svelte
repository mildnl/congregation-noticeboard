<script>
  import Conventions from '../../../views/Conventions.svelte';
    /** @type {import('./$types').PageData} */
  export let data;
</script>

<Conventions conventionInvites={data.conventionInvites}/>