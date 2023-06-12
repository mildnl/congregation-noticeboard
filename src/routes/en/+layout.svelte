<script>
import Menu from '../../components/Menu.svelte'
import { waitLocale } from 'svelte-i18n'
let language;
export async function preload() {
  language= waitLocale();
  return language;
}
</script>

<style>
  :global(body) {
    background-color:whitesmoke;
  }
</style>
<main>
  <Menu bind:language/>
  <div id="main" class="w3-container">
    <div class="w3-container w3-white w3-padding-16">
      <div class="w3-row">
        <div class="w3-col s1">&nbsp;</div>
        <div class="w3-col s10">
          <slot></slot>
        </div>
        <div class="w3-col s1">&nbsp;</div>
      </div>
    </div>
  </div>
</main>

