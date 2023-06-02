<script>
  import { _ } from '../services/i18n/i18n';
  import MeetingProgramm from '../components/MeetingProgramm.svelte';
  let weekDate = "22.–28. Mai"
  let songs = {
    initial: 80,
    middle: 1,
    end: 2
  }
  let lifeAndMinistry = {
    weeklySchedule: "2. CHRONIKA 25–27",
    talk: "Jehova kann dir viel mehr geben als das"
  }
  let christianLife = {
    talk: "\w*"
  }
</script>
<style>
  div.header {
    text-align: center;
    margin-left: auto;
  }

  footer {
  position: fixed;
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
<div class="header">
  <h1>{$_('menu.meetings')}</h1>
</div>

<MeetingProgramm weekDate={weekDate} songs={songs} lifeAndMinistry={lifeAndMinistry} christianLife={christianLife}/>


<footer>
  <a href="https://www.flaticon.com/de/kostenlose-icons/diamant" title="diamant Icons">Freepik - Diamant</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/weizen" title="weizen Icons">Freepik - Wheat</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/schaf" title="schaf Icons">Freepik - Sheep</a>
</footer>