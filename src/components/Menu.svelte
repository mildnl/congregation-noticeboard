<script>
    import { _ } from '../services/i18n/i18n';
    export const language = 'de'
    function openMenu() {
document.getElementById("main").style.marginLeft = "25%";
document.getElementById("mySidebar").style.width = "25%";
document.getElementById("mySidebar").style.display = "block";
document.getElementById("openNav").style.display = 'none';
}
function closeMenu() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}
</script>
<header class="w3-container w3-padding">
    <button id="openNav" class="w3-button w3-xlarge" on:click={openMenu}>&#9776;</button>
    <h1 class="w3-center">{$_('header.title')}</h1>
</header>


<div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">
    <button class="w3-bar-item w3-button w3-large" on:click={closeMenu}>Close &times;</button>
    {#if language === 'de'}
        <a href="/de/Meetings" class="w3-bar-item w3-button w3-hover-gray"  data-title='menu.meetings'>{$_('menu.meetings')}</a>
        <a href="/de/Ministry" class="w3-bar-item w3-button w3-hover-yellow" data-title='menu.ministry'>{$_('menu.ministry')}</a>
        <a href="/de/Radio" class="w3-bar-item w3-button w3-hover-blue"  data-title='menu.radio'>{$_('menu.radio')}</a>
        <a href="/de/Announcements" class="w3-bar-item w3-button w3-hover-teal"  data-title='menu.announcements'>{$_('menu.announcements')}</a>
        <a href="/de/Organisation" class="w3-bar-item w3-button w3-hover-red"  data-title='menu.organisation'>{$_('menu.organisation.title')}</a>
        <a href="/de/Conventions" class="w3-bar-item w3-button w3-hover-black" data-title='menu.conventions'>{$_('menu.conventions')}</a> 
        <div class="w3-row">
            <a href="/de/Admin" class="w3-col  w3-button w3-hover-green" style="width:50%" data-title='menu.login'>Login</a> 
            <a href="/en/Meetings" class="w3-col  w3-button w3-hover-green" style="width:50%"  data-title='menu.login'>En</a>
        </div>
    {/if}
    {#if language === 'en'}
        <a href="/en/Meetings" class="w3-bar-item w3-button w3-hover-gray"  data-title='menu.meetings'>{$_('menu.meetings')}</a>
        <a href="/en/Ministry" class="w3-bar-item w3-button w3-hover-yellow" data-title='menu.ministry'>{$_('menu.ministry')}</a>
        <a href="/en/Radio" class="w3-bar-item w3-button w3-hover-blue"  data-title='menu.radio'>{$_('menu.radio')}</a>
        <a href="/en/Announcements" class="w3-bar-item w3-button w3-hover-teal"  data-title='menu.announcements'>{$_('menu.announcements')}</a>
        <a href="/en/Organisation" class="w3-bar-item w3-button w3-hover-red"  data-title='menu.organisation'>{$_('menu.organisation.title')}</a>
        <a href="/en/Conventions" class="w3-bar-item w3-button w3-hover-black" data-title='menu.conventions'>{$_('menu.conventions')}</a> 
        <div class="w3-row">
            <a href="/en/Admin" class="w3-col  w3-button w3-hover-green" style="width:50%" data-title='menu.login'>Login</a> 
            <a href="/de/Meetings" class="w3-col  w3-button w3-hover-green" style="width:50%"  data-title='menu.login'>De</a>
        </div>
    {/if}
</div>