<script>
import { Popover, Button } from 'flowbite-svelte'
import { _ } from 'svelte-i18n';
  let assignees = {
    president: '',
    treasures: {
      talk: '',
      gems: '',
      reading: ''
    },
  ministryFirstCall: [], 
  ministryReturnVisit: [], 
  ministryBibleStudy: '', 
  ministryTalk: '', 
  lifeParts: [], 
  congregationBibleStudy: {
    assignee: '', 
    reader: '', 
  },
  attendants: {
    audio: 0, 
    video: 0, 
    zoom: 0, 
    security: 0, 
    hall: 0, 
    microphones: 0, 
    podium: 0, 
  },
};

export const meetingData = {
  date: '', 
  readingProgramm: '', 
  songs: {
    initial: 0, 
    middle: 0, 
    end: 0, 
  },
  treasures: {
    talk: '', 
    gems: 0, 
    bibleReading: '', 
  },
  ministry: {
    firstCall: [], 
    returnVisit: [], 
    bibleStudy: '', 
    talk: '', 
  },
  life: {
    parts: [{
      title: '',
      time: '',
      assingee: ''
    }],
    congregationBibleStudy: {
      reader: '',
    },
  },
  assignees,
};

  let placement;
</script>

<style>
div.meeting-part {
  display: flex;
  align-items: center;
  background-color: white;
  padding-left: 30px;

  font-size: x-large;
}

.meeting-schedule {
  font-family: Arial, sans-serif;
  background-color: whitesmoke;
}

h4 {
  font-family: Arial, sans-serif; 
}

</style>
<div class="w3-container">
  <div class="meeting-schedule">
    <div class="w3-container w3-card">
      <div class="w3-cell-row">
        <h4 class="w3-right w3-cell w3-margin-right">{meetingData.date}</h4>
        <h4 class="w3-left w3-cell">{meetingData.readingProgramm}</h4>
      </div>
      <Button class="w3-right w3-cell w3-margin-right w3-button w3-border" id="placement-left" on:mouseenter={()=> placement="left"}>Technick/Audio</Button>
        <Popover triggeredBy="[id^='placement-']" {placement} class="w3-right w3-cell w3-margin-right" title="Technick/Audio">
              <p><b>{$_('meeting.attendants.audio')}</b>: {assignees.attendants.audio}</p>
              <p><b>{$_('meeting.attendants.video')}</b>: {assignees.attendants.video}</p>
              <p><b>{$_('meeting.attendants.zoom')}</b>: {assignees.attendants.zoom}</p>
              <p><b>{$_('meeting.attendants.security')}</b>: {assignees.attendants.security}</p>
              <p><b>{$_('meeting.attendants.hall-attendants')}</b>: {assignees.attendants.hall}</p>
              <p><b>{$_('meeting.attendants.microphones')}</b>: {assignees.attendants.microphones}</p>
              <p><b>{$_('meeting.attendants.podium')}</b>: {assignees.attendants.podium}</p>
        </Popover>
      <h4>{$_('meeting.president')}: {assignees.president}</h4>
      <h4 class="meeting-song">{$_('meeting.song')} {meetingData.songs.initial} {$_('conjunction')} {$_('meeting.prayer')} : {assignees.president}</h4>
      <h4 class="meeting-subtitle">{$_('meeting.initial-comments')} (1 Min.)</h4>
    </div>

    <div class="w3-card">
      <div class="w3-container meeting-part w3-padding">
        <img class="w3-margin-right w3-padding" src="/images/diamond.jpg" alt="gems"/>
        <h3 class="gems">{$_('meeting.treasures.title')}</h3>
      </div>
      <ul>
        <li>
          <p>{meetingData.treasures.talk} (10 Min.) {assignees.treasures.talk}</p>
        </li>
        <li>
          <p>{$_('meeting.treasures.gems')} (10 Min.) {assignees.treasures.gems}</p>
        </li>
        <li>
          <p>{$_('meeting.treasures.bible-reading')} (4 Min.) {assignees.treasures.reading}</p>
        </li>
      </ul>
    </div>

    <div class="w3-card">
      <div class="w3-container meeting-part w3-padding">
        <img class="w3-margin-right w3-padding" src="/images/weizen.png" alt="ministry"/>
        <h3 class="gems">{$_('meeting.ministry.title')}</h3>
      </div>
      <ul>
        {#if meetingData.ministry.firstCall.length > 0}
          {#each meetingData.ministry.firstCall as part }
            <li>
              <p>{$_('meeting.ministry.initial-call')} (3 Min.) - {part}</p>
            </li>
          {/each}
        {/if}
        {#if meetingData.ministry.returnVisit.length > 0}
          {#each meetingData.ministry.returnVisit as part }
            <li>
              <p>{$_('meeting.ministry.return-visit')} (4 Min.) - {part}</p>
            </li>
          {/each}
        {/if}
        {#if meetingData.ministry.bibleStudy != null}
          <li>
            <p>{$_('meeting.ministry.bible-study')} (5 Min.) - {meetingData.ministry.bibleStudy}</p>
          </li>
        {/if}
        {#if meetingData.ministry.talk != null}
          <li>
            <p>{$_('meeting.ministry.talk')} (5 Min.) - {meetingData.ministry.talk}</p>
          </li>
        {/if}
      </ul>
    </div>

    <div class="w3-card">
      <div class="w3-container meeting-part w3-padding">
        <img class="w3-margin-right w3-padding" src="/images/schaf.png" alt="ministry"/>
        <h3 class="gems">{$_('meeting.life.title')}</h3>
      </div>
      <div class="w3-container">
        <p class="meeting-song">{$_('meeting.song')} {meetingData.songs.middle}</p>
        <ul>
          {#each meetingData.life.parts as part}
            <li>
              <p>{part.title} ({part.time} Min.) {part.assingee}</p>
            </li>
          {/each}
          <li>
            <p>{$_('meeting.life.congregation-biblestudy')} (30 Min.) {assignees.congregationBibleStudy.assignee}</p>
            <p>{$_('meeting.life.reader')}: {assignees.congregationBibleStudy.reader}</p>
          </li>
        </ul>
        <h4>{$_('meeting.final-comments')} (3 Min.)</h4>
        <p class="meeting-song">{$_('meeting.song')} {meetingData.songs.end} {$_('conjunction')} {$_('meeting.prayer')}</p>
      </div>
    </div>
  </div>
</div>