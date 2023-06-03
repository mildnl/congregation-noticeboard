<script>
  import { _ } from '../services/i18n/i18n';
  import RadioProgramm from '../components/RadioProgramm.svelte';
  const currentYear = new Date().getFullYear();
  export let tableData = {
    "Bayerischer Rundfunk":[
  {
    date: "08.01.2023",
    time: "6.45-7.00",
    topic: "Sind alle Religionen nur unterschiedliche Wege zu Gott?"
  },
  {
    date: "05.02.2023",
    time: "6.30-6.45",
    topic: "Katastrophen- und Flüchtlingshilfe als praktische Nächstenliebe"
  },
  {
    date: "05.03.2023",
    time: "6.45-7.00",
    topic: "Jesus im Faktencheck – Was wissen wir über ihn?"
  },
  {
    date: "16.04.2023",
    time: "6.45-7.00",
    topic: "Sich weniger Sorgen machen – wie?"
  },
  {
    date: "07.05.2023",
    time: "6.45-7.00",
    topic: "So reicht mein Geld länger"
  },
  {
    date: "11.06.2023",
    time: "6.30-6.45",
    topic: "Umweltschutz – eine globale Verantwortung"
  },
  {
    date: "09.07.2023",
    time: "6.45-7.00",
    topic: "Ein gesundes Leben – wie die Bibel hilft"
  },
  {
    date: "13.08.2023",
    time: "6.30-6.45",
    topic: "Eine Welt in Aufruhr – was gibt Stabilität?"
  },
  {
    date: "03.09.2023",
    time: "6.45-7.00",
    topic: "Die Bibel hat mein Leben verändert"
  },
  {
    date: "08.10.2023",
    time: "6.30-6.45",
    topic: "Die Goldene Hochzeit – Was zeichnet glückliche Ehen aus?"
  },
  {
    date: "12.11.2023",
    time: "6.45-7.00",
    topic: "Erfolgreich miteinander kommunizieren"
  },
  {
    date: "10.12.2023",
    time: "6.45-7.00",
    topic: "Die zeitlosen Gleichnisse Jesu und was wir von ihnen lernen können"
  }
],
"Norddeutscher Rundfunk": [
  {
    date: "23.04.2023",
    time: "7:15-7:30",
    topic: "Katastrophen- und Flüchtlingshilfe als praktische Nächstenliebe"
  },
  {
    date: "24.09.2023",
    time: "7:15-7:30",
    topic: "Umweltschutz – eine globale Verantwortung"
  }
]
};
</script>
<style>
     footer {
  position: fixed;
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
  color: grey;
  text-decoration: none;
  margin-left: 10px;
}
</style>
<div class="w3-container">
  <h1  class="w3-center w3-padding">{$_('menu.radio')}</h1>
  <div>
    <h3>{$_('radio.title')}</h3>
    <p>{$_('radio.description').replace('{year}', currentYear)}</p>
  </div>
  
  {#each Object.entries(tableData) as [channelName, data]}
    <RadioProgramm tableData={data} channelName={channelName} />
  {/each}
</div>


<footer>
  <a href="https://www.br.de/radio/live/bayern2/">BR2 Livestream</a>
  <a href="https://www.ndr.de/nachrichten/info/programm/livestream150.html">NDR Info Livestream</a>
  <a href="https://jwconf.org/sendungen">Archiv</a>
</footer>
