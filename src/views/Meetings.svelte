<script>
  import { _ } from '../services/i18n/i18n';
  import MeetingProgramm from '../components/MeetingProgramm.svelte';
  let meetingData = {
    date: "29. Mai",
    readingProgramm: "2 Cronika 28-29",
    songs: {
      initial: 54,
      middle: 56,
      end: 86 
    },
    tresures: {
      talk: "Du kannst Jehova dienen – trotz einer schwierigen Kindheit"
    },
    ministry: {
      firstCall: ["Rebekka Ende / Elisabeth Woller"],
      returnVisit: ["Sandra Jäger / Natalja Fur"],
      bibleStudy: "Uwe Siefert / Cai Kewitz",
      talk: null
    },
    life: {
      talk: ["Jehova ist der ‚Vater der Vaterlosen (8 Min.) Werner Kimm", "Aktuelles (7 Min.) Mayk Jäger"],
    }
  }
</script>
<style>
  div.header {
    text-align: center;
    margin-left: auto;
  }

  footer {
  position:relative;
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

<MeetingProgramm meetingData={meetingData}/>


<footer>
  <a href="https://www.flaticon.com/de/kostenlose-icons/diamant" title="diamant Icons">Freepik - Diamant</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/weizen" title="weizen Icons">Freepik - Wheat</a>
  <a href="https://www.flaticon.com/de/kostenlose-icons/schaf" title="schaf Icons">Freepik - Sheep</a>
</footer>