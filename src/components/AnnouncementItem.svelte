<script>
import { _ } from 'svelte-i18n';
  export let announcmentData = {
    date: null,
    announcments: [
        {
            title: null,
            text: null
        }
    ]
  }
</script>
<div class="w3-container w3-margin-left">
    <h5>{announcmentData.date}</h5>
    <ol>
        {#each announcmentData.announcments as announcment}
            <li>
                <h5>{announcment.title}</h5>
                <p>{announcment.text}</p>
            </li>
        {/each}
    </ol>
</div>