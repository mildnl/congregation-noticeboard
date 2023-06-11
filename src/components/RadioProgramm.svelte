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

<h2>{channelName}</h2>
<table>
  <tbody>
    <th>{$_('date')}</th>
    <th>{$_('time')}</th>
    <th>{$_('topic')}</th>
    {#each tableData as data }
    <tr>
      <td>
        {data.date}
      </td>
      <td>
        {data.time}
      </td>
      <td>
        {data.topic}
      </td>
    </tr>
    {/each}
  </tbody>
</table>