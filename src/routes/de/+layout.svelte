<script>
import Menu from '../../../components/Menu.svelte'
import { init } from '../../services/i18n/i18n'
import locale from '../services/i18n/i18n'
import { waitLocale } from 'svelte-i18n'
let language;
export async function preload() {
  language= locale;
  return waitLocale();
}
</script>

<style>
  :global(body) {
    background-color:whitesmoke;
  }
</style>
<main>
    <Menu bind:language/>
    <div  id="main">
        <div class="w3-container">
          <div class="w3-row">
            <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
            <div class="w3-col w3-container w3-white w3-padding-64" style="width:80%">
               <slot></slot>
            </div>
            <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
        </div>
      </div>
    </div>
</main>
