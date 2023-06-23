<script>
  import { onMount } from 'svelte';
  import { Popover, Button } from 'flowbite-svelte'
  import { _ } from 'svelte-i18n';
  import Modal from './Modal.svelte';
  export let meetingData;
  let placement;
  let isMobile = false;
  let mediaQuery;
  let showModal = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      mediaQuery = window.matchMedia('(max-width: 768px)');
      handleScreenChange(mediaQuery); // Check initial screen size
      mediaQuery.addEventListener('change', handleScreenChange); // Add listener for screen size changes
    }
    return () => {
      if (mediaQuery) {
        mediaQuery.removeEventListener('change', handleScreenChange); // Remove listener on component unmount
      }
    };
  });

  function handleScreenChange(event) {
    isMobile = event.matches;
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
        <h4 class="w3-right w3-cell w3-margin-right">{meetingData.date}</h4>
        <h4 class="w3-left w3-cell">{meetingData.readingProgramm}</h4>
      </div>
      {#if isMobile}
        <Button class="w3-right w3-cell w3-margin-right w3-button w3-border sm:w-auto" on:click={() => showModal=true}>Technick/Audio</Button>
      {:else}
        <Button class="w3-right w3-cell w3-margin-right w3-button w3-border sm:w-auto" id="placement-left" on:mouseenter={() => placement="left"}>Technick/Audio</Button>
      {/if}
      <h4>{$_('meeting.president')}: {meetingData.president}</h4>
      <h4 class="meeting-song">{$_('meeting.song')} {meetingData.songs.initial} {$_('conjunction')} {$_('meeting.prayer')} : {meetingData.president}</h4>
      <h4 class="meeting-subtitle">{$_('meeting.initial-comments')} (1 Min.)</h4>
    </div>

    <div class="w3-card">
      <div class="w3-container meeting-part w3-padding">
        <img class="w3-margin-right w3-padding" src="/images/diamond.jpg" alt="gems"/>
        <h3 class="gems">{$_('meeting.treasures.title')}</h3>
      </div>
      <ul>
        <li>
          <p>{meetingData.tresures.talk} (10 Min.) {meetingData.tresures.talkAssignee}</p>
        </li>
        <li>
          <p>{$_('meeting.treasures.gems')} (10 Min.) {meetingData.tresures.tresuresAssignee}</p>
        </li>
        <li>
          <p>{$_('meeting.treasures.bible-reading')} (4 Min.) {meetingData.tresures.bibleReading}</p>
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
            <p>{$_('meeting.life.congregation-biblestudy')} (30 Min.) {meetingData.life.congregationBibleStudy.assingee}</p>
            <p>{$_('meeting.life.reader')}: {meetingData.life.congregationBibleStudy.reader}</p>
          </li>
        </ul>
        <h4>{$_('meeting.final-comments')} (3 Min.)</h4>
        <p class="meeting-song">{$_('meeting.song')} {meetingData.songs.end} {$_('conjunction')} {$_('meeting.prayer')}</p>
      </div>
    </div>
  </div>
</div>
      <Modal showModal={showModal} title="Technick/Audio">
          <div class="px-4 py-2 popover-content">
            <p><b>{$_('meeting.attendants.audio')}</b>: {meetingData.attendants.audio}</p>
            <p><b>{$_('meeting.attendants.video')}</b>: {meetingData.attendants.video}</p>
            <p><b>{$_('meeting.attendants.zoom')}</b>: {meetingData.attendants.zoom}</p>
            <p><b>{$_('meeting.attendants.security')}</b>: {meetingData.attendants.security}</p>
            <p><b>{$_('meeting.attendants.hall-attendants')}</b>: {meetingData.attendants.hall}</p>
            <p><b>{$_('meeting.attendants.microphones')}</b>: {meetingData.attendants.microphones}</p>
            <p><b>{$_('meeting.attendants.podium')}</b>: {meetingData.attendants.podium}</p>
          </div>
        </Modal>

        <Popover triggeredBy="[id^='placement-']" {placement} class="w3-right w3-cell w3-margin-right" title="Technick/Audio">
          <div class="px-4 py-2 popover-content">
            <p><b>{$_('meeting.attendants.audio')}</b>: {meetingData.attendants.audio}</p>
            <p><b>{$_('meeting.attendants.video')}</b>: {meetingData.attendants.video}</p>
            <p><b>{$_('meeting.attendants.zoom')}</b>: {meetingData.attendants.zoom}</p>
            <p><b>{$_('meeting.attendants.security')}</b>: {meetingData.attendants.security}</p>
            <p><b>{$_('meeting.attendants.hall-attendants')}</b>: {meetingData.attendants.hall}</p>
            <p><b>{$_('meeting.attendants.microphones')}</b>: {meetingData.attendants.microphones}</p>
            <p><b>{$_('meeting.attendants.podium')}</b>: {meetingData.attendants.podium}</p>
          </div>
        </Popover>