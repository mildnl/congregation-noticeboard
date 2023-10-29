<script lang='ts'>
  import Calendar from '@event-calendar/core';
  import TimeGrid from '@event-calendar/time-grid';
  import DayGridMonth from '@event-calendar/day-grid';
  import ListGrid from '@event-calendar/list';
  import {language} from '$lib/services/stores'
  import { _ } from 'svelte-i18n';
	import { onDestroy } from 'svelte';

  let currentLanguage = 'de';
  let unsubscribe = language.subscribe((value) => {
    currentLanguage = value;
  });
  onDestroy(unsubscribe);

    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString(currentLanguage, { month: 'long' });

    function generateEvent(title:string, startDate: string | number | Date, endDate: Date, time: string) {
        const startTime = new Date(startDate);
        const [hours, minutes] = time.split(':');
        startTime.setHours(Number(hours), Number(minutes));
    
        const endTime = new Date(startTime.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
        return {
          title: title,
          start: startTime,
          end: endTime
        };
    }

    function generateEvents(title:string, dayOfWeek:string, repeatSchedule:string, time:string) {
      const startDate = new Date(); // Current date and time

      // Set the start day to the next occurrence of the specified day of the week
      let startDay = startDate.getDay();
      let daysToAdd = (7 + daysToNumber(dayOfWeek) - startDay) % 7;
      startDate.setDate(startDate.getDate() + daysToAdd);

      const events = [generateEvent(title, startDate, startDate, time)];

      // Helper function to add events based on the given interval
      function addEventByInterval(interval:number) {
        for (let i = 1; i < interval; i++) {
          startDate.setDate(startDate.getDate() + interval); // Add interval days
          events.push(generateEvent(title, startDate, startDate, time));
        }
      }

      // Check the repeat schedule and generate additional events accordingly
      if (repeatSchedule === 'weekly') {
        addEventByInterval(7); // Add events every 7 days
      } else if (repeatSchedule === 'bi-weekly') {
        addEventByInterval(14); // Add events every 14 days
      } else if (repeatSchedule === 'monthly') {
        addEventByInterval(30); // Add events every 30 days
      }

      return events;
    }

    function daysToNumber(dayOfWeek:string) {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days.indexOf(dayOfWeek);
    }

    // Example usage:
    let jaegerSaturday = generateEvents('Kö PDG Jäger', 'Saturday', 'weekly', '10:00');
    let meyerSaturday = generateEvents('Kö PDG Meyer', 'Saturday', 'weekly', '10:00');
    let meyerThursday = generateEvents('Kö PDG Meyer', 'Thursday', 'weekly', '9:30');
    let mollThursday = generateEvents('Zo PDG Moll', 'Monday', 'monthly', '19:00');
    function combineLists(...lists) {
        return [].concat(...lists);
    }
    let events = combineLists(jaegerSaturday,meyerSaturday,meyerThursday,mollThursday)
    let plugins = [TimeGrid, DayGridMonth, ListGrid];
    let options = {
    view: window.innerWidth < 768 ? 'dayGridMonth' : 'timeGridWeek', // Change the view based on the screen width
    height: window.innerWidth < 768 ? 'auto' : '800px', // Adjust the height based on the screen width
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: window.innerWidth < 768 ? 'dayGridMonth' : 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    scrollTime: '09:00:00',
    dayMaxEvents: true,
    nowIndicator: true,
    events: events,
  };
</script>
<div class="w3-container">
    <div class="w3-panel">
        <h3 class="w3-center">{$_('ministry.pioneer-announcement').replace('{month}', currentMonth)}</h3>
    </div>
    <div class="w3-card w3-white w3-padding">
        <Calendar {plugins} {options} />
    </div>
</div>

