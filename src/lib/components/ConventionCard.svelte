<script>
import { _ } from 'svelte-i18n';
  export let conventionData = {
    date: null,
    location: null,
    host: null
  };
</script>
<div class="w3-container s3-margin">
  <div class="w3-card-4 w3-padding">
  <table class="w3-center">
    <tr>
      <th>
        {$_('date')}
      </th>
      <th>
        {$_('location')}
      </th>
    </tr> 
    <tr>
      <td>
        <h4>{conventionData.date}</h4>
      </td>
      <td>
      <h4>{conventionData.location}</h4>
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
          {$_(conventionData.host)}
      </td>
    </tr>
  </table>      
</div>
</div>
