<script>
import  Meetings from "../views/Meetings.svelte";
import '../styles/w3.css';
import Menu from '../components/Menu.svelte'
import setupI18n from '../services/i18n/i18n'
import { waitLocale } from 'svelte-i18n'
let i18n = setupI18n('de');
let language = 'de';
export async function preload() {
  return waitLocale('de');
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
               <Meetings />
            </div>
            <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
        </div>
      </div>
    </div>
</main>
