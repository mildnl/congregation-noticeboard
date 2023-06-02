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
.column {
  float: center;
  
}

/* Middle column */
.column.middle {
  width: 100%;
  padding: 20px;
}

div.meeting-part {
  display: flex;
  align-items: center;
  background-color: white;
  padding-left: 30px;
  color: grey;

  font-size: x-large;
}

.header {
  display: flex;
  font-size: x-large;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.meeting-schedule {
  font-family: Arial, sans-serif;
  background-color: whitesmoke;
  padding: 10;
}

.meeting-title {
  font-size: 18px;
  margin-bottom: 5px;
}

.meeting-subtitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.meeting-song {
  margin-top: 10px;
  font-weight: bold;
}

</style>
<div class="column middle">
  <h4 class="header">{meetingData.date}</h4>
  <div class="meeting-schedule">
    <h3 class="meeting-title">{meetingData.readingProgramm}</h3>
    <p class="meeting-song">{$_('meeting.song')} {meetingData.songs.initial} {$_('conjunction')} {$_('meeting.prayer')}</p>
    <h4 class="meeting-subtitle">{$_('meeting.initial-comments')} (1 Min.)</h4>

    <div class="meeting-part">
      <img src="src/images/diamond.jpg" alt="gems"/>
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

      <div class="meeting-part">
          <img src="src/images/weizen.png" alt="ministry"/>
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

      <div class="meeting-part">
          <img src="src/images/schaf.png" alt="ministry"/>
          <h3 class="gems">{$_('meeting.life.title')}</h3>
      </div>
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
