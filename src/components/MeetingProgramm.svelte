<script>
  import { _ } from '../services/i18n/i18n';
  export let weekDate = "22.–28. Mai"
  export let songs = {
    initial: 80,
    middle: 1,
    end: 2
  }
  export let lifeAndMinistry = {
    weeklySchedule: "2. CHRONIKA 25–27",
    talk: "Jehova kann dir viel mehr geben als das"
  }
  export let christianLife = {
    talk: "\w*"
  }
</script>

<style>
  

div.meeting-part {
  display: flex;
  align-items: center;
  background-color: white;
  padding-left: 30px;
  color: grey;

  font-size: x-large;
}

h4.gems {
  color: #000000;
  padding-right: 50px;
  text-align: right;
  margin-left: auto;
  font-size: 24px;
  margin-bottom: 10px;
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


<h4 class="header">{weekDate}</h4>
<div class="meeting-schedule">
    <h3 class="meeting-title">{lifeAndMinistry.weeklySchedule}</h3>
    <p class="meeting-song">{$_('meeting.song')} {songs.initial} {$_('conjunction')} {$_('meeting.prayer')}</p>
    <h4 class="meeting-subtitle">{$_('meeting.initial-comments')} (1 Min.)</h4>
</div>

<div class="meeting-schedule">
  <div class="meeting-part">
    <img src="src/images/diamond.jpg" alt="gems"/>
    <h3 class="gems">{$_('meeting.life-and-ministry.title')}</h3>
  </div>
    <p>{lifeAndMinistry.talk} (10 Min.)</p>
    <p>{$_('meeting.life-and-ministry.gems')} (10 Min.):</p>
    <p>{$_('meeting.life-and-ministry.bible-reading')} (5 Min.)</p>
</div>
<div class="meeting-schedule">
    <div class="meeting-part">
        <img src="src/images/weizen.png" alt="ministry"/>
        <h3 class="gems">{$_('meeting.improve-your-ministry.title')}</h3>
    </div>
</div> 
<div class="meeting-schedule">
    <h4>{$_('meeting.final-comments')} (3 Min.)</h4>
    <p class="meeting-song">{$_('meeting.song')} {songs.initial} {$_('conjunction')} {$_('meeting.prayer')}</p>
</div>
    