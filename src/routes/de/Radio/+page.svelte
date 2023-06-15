<script>
  import Radio from '../../../views/Radio.svelte';
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<Radio tableData={data.radioData} />