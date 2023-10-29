<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<div class="w3-container w3-center">
  <h1>Herzlich willkommen in unserer Versammlung</h1>
  <p>Dies ist eine kurze Einführung in unsere Versammlung. Weitere Informationen zu unseren Versammlungen, Veranstaltungen und Aktivitäten finden Sie hier.</p>

  <div class="w3-row">
    <button class="w3-btn w3-black" on:click={() => goto('/de/login')}>Einloggen</button>
    <button class="w3-btn w3-black" on:click={() => goto('/de/meetings')}>Versammlungen</button>
  </div>
  <p>Hinweis: Namen werden nur angezeigt, wenn Sie eingeloggt sind.</p>
</div>

