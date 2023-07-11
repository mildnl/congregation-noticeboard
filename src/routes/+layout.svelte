<script lang="ts">
	import Menu from "$lib/components/Menu.svelte";
  import "../assets/styles/w3.css"
  import awsmobile from '../aws-exports';
	import { Amplify } from "aws-amplify";
  Amplify.configure(awsmobile);
</script>

<style>
  :global(body) {
    background-color: whitesmoke;
  }

  footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  footer a {
    color: #000;
    margin-left: 5px;
  }
</style>

<main>
  <Menu />
  <div id="main" class="w3-container">
    <div class="w3-container w3-white w3-padding-16">
      <div class="w3-row">
        <div class="w3-center">
          <slot />
        </div>
      </div>
    </div>
  </div>
</main>

<footer class="w3-container w3-center w3-padding">
  <a href="https://www.flaticon.com/de/kostenlose-icons/diamant" title="diamant Icons">Diamant</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/weizen" title="weizen Icons">Wheat</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/meeting" title="meeting Icons">Meeting</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/promotion" title="promotion Icons">Promotion</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/radio" title="radio Icons">Radio</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/stadium" title="stadium Icons">Stadium</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/talking" title="talking Icons">Talking</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/teamwork" title="teamwork Icons">Teamwork</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/user" title="user Icons">User</a>
</footer>