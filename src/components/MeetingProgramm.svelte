<script>
  import { _ } from '../services/i18n/i18n';
  export let meetingData = {
    date: null,
    readingProgramm: null,
    songs: {
      initial: null,
      middle: null,
      end: null 
    },
    tresures: {
      talk: null
    },
    ministry: {
      firstCall: [],
      returnVisit: [],
      bibleStudy: null,
      talk: null
    },
    life: {
      talk: null,
    }
  }
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
        <h4 class="w3-left w3-cell">{meetingData.readingProgramm}</h4>
        <h4 class="w3-right w3-cell w3-margin-right">{meetingData.date}</h4>
      </div>
      <h4 class="meeting-song">{$_('meeting.song')} {meetingData.songs.initial} {$_('conjunction')} {$_('meeting.prayer')}</h4>
      <h4 class="meeting-subtitle">{$_('meeting.initial-comments')} (1 Min.)</h4>
    </div> 

      <div class="w3-card">
            <div class="w3-container meeting-part w3-padding">
          <img class="w3-margin-right w3-padding" src="src/images/diamond.jpg" alt="gems"/>
          <h3 class="gems">{$_('meeting.treasures.title')}</h3>
      </div>
      <ul>
        <li>
          <p>{meetingData.tresures.talk} (10 Min.)</p>
        </li>
        <li>
          <p>{$_('meeting.treasures.gems')} (10 Min.):</p>
        </li>
        <li>
          <p>{$_('meeting.treasures.bible-reading')} (5 Min.)</p>
        </li>
      </ul>
          <div class="w3-card">
      <div class="w3-container meeting-part w3-padding">
        <img class="w3-margin-right w3-padding" src="src/images/weizen.png" alt="ministry"/>
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
        <div class="w3-card">
        <div class="w3-container meeting-part w3-padding">
         <img class="w3-margin-right w3-padding" src="src/images/schaf.png" alt="ministry"/>
         <h3 class="gems">{$_('meeting.life.title')}</h3>
        </div>
        <div class="w3-container">
          <p class="meeting-song">{$_('meeting.song')} {meetingData.songs.middle}</p>
        <ul>
          {#each meetingData.life.talk as part}
            <li>
              <p>{part}</p> 
            </li>
          {/each}
          <li>
            <p>{$_('meeting.life.congregation-biblestudy')}</p>
          </li>
        </ul>
        <h4>{$_('meeting.final-comments')} (3 Min.)</h4>
        <p class="meeting-song">{$_('meeting.song')} {meetingData.songs.end} {$_('conjunction')} {$_('meeting.prayer')}</p>
        </div>
      </div>
    </div>
  </div>  
    </div>  
</div>
