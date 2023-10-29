<script>

import { _ } from 'svelte-i18n';

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
   console.log(params)
   
    // makePostRequest(params)
  }
</script>

    <form class="w3-container">

        <label class="w3-text-green" for="date"><b>{$_('date')}</b></label>
        <input class="w3-input w3-border" type="date" name="date">

        <label class="w3-text-green" for="readingProgramm"><b>readingProgramm</b></label>
        <input class="w3-input w3-border" type="text" name="readingProgramm">

        <label class="w3-text-green" for="president"><b>meeting.president</b></label>
        <input class="w3-input w3-border" type="text" name="president">

        <label class="w3-text-green" for="song-1"><b>Song #1</b></label>
        <input class="w3-input w3-border" type="text" name="song-1">

        <label class="w3-text-green" for="song-2"><b>Song #2</b></label>
        <input class="w3-input w3-border" type="text" name="song-2">

        <label class="w3-text-green" for="song-3"><b>Song #3</b></label>
        <input class="w3-input w3-border" type="text" name="song-3">

        <label class="w3-text-green" for="tresuresTitle"><b>{$_('meeting.treasures.talk')}</b></label>
        <input class="w3-input w3-border" type="text" name="treasuresTitle">

        <label class="w3-text-green" for="tresuresAssignee"><b>{$_('meeting.treasures.talk')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="treasuresAssignee">

        <label class="w3-text-green" for="gemsAssignee"><b>{$_('meeting.treasures.gems')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="gemsAssignee">

        <label class="w3-text-green" for="bibleReading"><b>{$_('meeting.treasures.bible-reading')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="bibleReading">

        <label class="w3-text-green" for="firstCallAssignee"><b>{$_('meeting.ministry.initial-call')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="firstCallAssignee">

        <label class="w3-text-green" for="rvAssignee"><b>{$_('meeting.ministry.return-visit')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="rvAssignee">

        <label class="w3-text-green" for="bsAssignee"><b>{$_('meeting.ministry.bible-study')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="bsAssignee">

        <label class="w3-text-green" for="lifeTalkTitle"><b>{$_('meeting.life.title')}</b></label>
        <input class="w3-input w3-border" type="text" name="lifeTalkTitle">

        <label class="w3-text-green" for="lifeTalkAssignee"><b>{$_('meeting.life.title')} Asignee</b></label>
        <input class="w3-input w3-border" type="text" name="lifeTalkAssignee">

        <label class="w3-text-green" for="cbsHost"><b>{$_('meeting.life.congregation-biblestudy')} Host</b></label>
        <input class="w3-input w3-border" type="text" name="cbsHost">

        <label class="w3-text-green" for="cbsReader"><b>{$_('meeting.life.title')} {$_('meeting.life.reader')}</b></label>
        <input class="w3-input w3-border" type="text" name="cbsReader">
    <button class="w3-btn w3-green" disabled={!$form.valid} on:click={addMeetingProgramm}>Register</button>
    
</form>