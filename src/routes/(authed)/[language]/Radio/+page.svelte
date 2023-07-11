<script>
  import Radio from '$lib/views/Radio.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Radio tableData={data.radioData} />