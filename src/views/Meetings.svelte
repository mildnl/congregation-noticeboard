<script>
import { _ } from 'svelte-i18n';
  import MeetingProgramm from '../components/MeetingProgramm.svelte';
  let meetingData = {
    date: "29. Mai",
    readingProgramm: "2 Cronika 28-29",
    president: 'Dirk Moll',
    songs: {
      initial: 54,
      middle: 56,
      end: 86 
    },
    tresures: {
      talk: "Du kannst Jehova dienen – trotz einer schwierigen Kindheit",
      talkAssignee: "Daniel Heinrich",
      tresuresAssignee: "Lothar Weigmann",
      bibleReading: "Marius Schmidt"
    },
    ministry: {
      firstCall: ["Rebekka Ende / Elisabeth Woller"],
      returnVisit: ["Sandra Jäger / Natalja Fur"],
      bibleStudy: "Uwe Siefert / Cai Kewitz",
      talk: null
    },
    life: {
      parts: [
          {
              title:"Jehova ist der ‚Vater der Vaterlosen", 
              time:8,
              assignee:"Werner Kimm"
              
          }, 
          {
              title:"Aktuelles", 
              time: 7,
              assignee:"Mayk Jäger"
              
          }
          ],
      congregationBibleStudy: {
        assignee: "Mayk Jäger",
        reader: "Rainer Blosat"
      }
    }
  }
</script>

<div class="w3-container w3-padding w3-panel w3-grey">
  <h1 class="w3-center">{$_('menu.meetings')}</h1>
</div>
<div class="w3-row">
  <div class="w3-col s12">
    <MeetingProgramm meetingData={meetingData}/>
  </div>
</div>


