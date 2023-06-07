<script>
    import { useForm, validators, HintGroup, Hint, email, required } from "svelte-use-form";
  import { _ } from '../services/i18n/i18n';
  const form = useForm();
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
      talk: ["Jehova ist der ‚Vater der Vaterlosen (8 Min.) Werner Kimm", "Aktuelles (7 Min.) Mayk Jäger"],
      congregationBibleStudy: {
        assignee: "Mayk Jäger",
        reader: "Rainer Blosat"
      }
    }
}
  function addMeetingProgramm(params) {
    
  }
</script>

    <form use:form class="w3-container">
    
        <label class="w3-text-green" for="president"><b>meeting.president</b></label>
        <input class="w3-input w3-border" type="text" name="president">
        
        <label class="w3-text-green" for="tresures"><b>{$_('meeting.treasures.talk')}</b></label>
        <input class="w3-input w3-border" type="text" name="treasures">
    
    <button class="w3-btn w3-green" disabled={!$form.valid} on:click={addMeetingProgramm}>Register</button>
    
</form>