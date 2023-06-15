<script>
import Menu from '../../components/Menu.svelte'
import { waitLocale } from 'svelte-i18n'
export async function preload() {
  return waitLocale();
}
</script>

<style>
  :global(body) {
    background-color:whitesmoke;
  }
</style>

<main>
  <Menu/>
  <div id="main" class="w3-container">
    <div class="w3-container w3-white w3-padding-16">
      <div class="w3-row">
        <div class="w3-col m1 l1 w3-hide-small">&nbsp;</div>
        <div class="w3-col s12 m10 l10">
          <slot></slot>
        </div>
        <div class="w3-col m1 l1 w3-hide-small">&nbsp;</div>
      </div>
    </div>
  </div>
</main>

