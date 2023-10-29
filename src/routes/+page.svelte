<script lang="ts">
  import '../assets/styles/w3.css';
  import Menu from '$lib/components/Menu.svelte';
  import setupI18n from '$lib/services/i18n/i18n';
  import { waitLocale } from 'svelte-i18n';
  import {language} from "$lib/services/stores";
	import { onDestroy } from "svelte";
	import Meetings from '$lib/views/Meetings.svelte';

  let lang = 'de';
  let unsubscribe = language.subscribe((value) => {
    lang = value;
  });

  setupI18n(lang);

  export async function preload() {
    return waitLocale(lang);
  }

  onDestroy(unsubscribe);
</script>

<main>
  <Menu />
  <div id="main" class="w3-container">
    <div class="w3-row">
      <div class="w3-center">
        <Meetings meetingData={null} />
      </div>
    </div>
  </div>
</main>

