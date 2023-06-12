<script>
  import AnnouncementItem from '../components/AnnouncementItem.svelte';

import { _ } from 'svelte-i18n';
let announcementItems = [
  {
    date: "Mai 2023",
    announcments: [
        {
            title: "Jahresartikel",
            text: "Die Jahresartikel für 2024 werden ab Oktober 2023 zum Herunterladen bereitgestellt. Verkündiger, die gedruckte Ausgaben wünschen, können ab sofort folgende Artikel beim Literaturdiener anfordern: Gebundener Jahrgang 2023 (enthält Wachtturm und Erwachet!) und Täglich in den Schriften forschen 2024. Darüber hinaus kann die Braille Version von Täglich in den Schriften forschen 2024 angefordert werden."
        },
        {
            title: "Betheldienst",
            text: "Da sich das theokratische Werk weltweit ausdehnt, besteht ein großer Bedarf an jungen ledigen Brüdern, die bereit sind, im Bethel oder bei theokratischen Großbauprojekten mitzuhelfen. Bist du zwischen 19 und 35 Jahre alt und seit mindestens einem Jahr getauft, ermuntern wir dich, eine Bewerbung um eine Mitgliedschaft im Weltweiten Orden der Sondervollzeitdiener der Zeugen Jehovas (A-8) auszufüllen. Bist du zwischen 19 und 55 Jahre alt und seit mindestens einem Jahr getauft, aber deine Umstände erlauben es dir derzeit nicht, langfristig zu dienen, ermuntern wir dich, eine Bewerbung als Helfer (A-19) auszufüllen. Bist du daran interessiert, in einem dieser Bereiche zu dienen, sprich bitte den Sekretär deiner Versammlung an, um weitere Hinweise zu erhalten, wie du eine Bewerbung einreichen kannst. Außerdem wurde die Anzahl der Fertigkeiten, unter denen Bewerber bei einer Online-Bewerbung wählen können, erweitert. Bitte aktualisiere deshalb bei einer bereits aktiven Bewerbung bei Bedarf die Angaben zu deinen Fertigkeiten und deinen Erfahrungen und teile uns deine aktuelle kurz- oder langfristige Verfügbarkeit mit."
        },
        {
            title: "Google Assistant Sprachbefehle für jw.org",
            text: "Aufgrund einer dauerhaften Änderung von Google werden ab Juni 2023 Sprachbefehle für jw.org für Google Assistant nicht mehr unterstützt. Diese Änderung hat keine Auswirkungen auf den jw.org-Skill für Amazon Alexa."
        }
    ]
  }
]
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
  <h1 class="w3-center w3-padding w3-panel w3-teal">{$_('menu.announcements')}</h1>
  {#each announcementItems as item}
    <AnnouncementItem announcmentData={item} />
  {/each}
</div>

<footer class="w3-container w3-center w3-padding">
  <a href="/" title="Home">Home</a>
</footer>
