<script>
import { _ } from 'svelte-i18n';
    export let tableData = [
        {
            date: "01.01.2000",
            time: "0:00-23:59",
            topic: "The Truth"
        }
    ]
    export let channelName = "Channel"
</script>

<style>
  .table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

@media only screen and (max-width: 600px) {
  table {
    font-size: 14px;
  }
}

</style>

<h2>{channelName}</h2>
<table class="w3-table-all">
  <thead>
    <tr>
      <th>{$_('date')}</th>
      <th>{$_('time')}</th>
      <th>{$_('topic')}</th>
    </tr>
  </thead>
  <tbody>
    {#each tableData as data }
    <tr>
      <td>{data.date}</td>
      <td>{data.time}</td>
      <td>{data.topic}</td>
    </tr>
    {/each}
  </tbody>
</table>

