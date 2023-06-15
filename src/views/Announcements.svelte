<script>
  import AnnouncementItem from '../components/AnnouncementItem.svelte';
  import { _ } from 'svelte-i18n';
  export let announcementItems;
</script>

<div class="w3-container">
  <h1 class="w3-center w3-padding w3-panel w3-teal">{$_('menu.announcements')}</h1>
  {#each announcementItems as item}
    <AnnouncementItem announcmentData={item} />
  {/each}
</div>

