<script>
// @ts-nocheck
    import { waitLocale } from 'svelte-i18n';
  import { _ } from 'svelte-i18n';
  import {language} from '$lib/services/stores'

  /**
	 * @type {number}
	 */
  let screenSize;
  $: width = screenSize <= 768 ? 50 : 100;
  $: column = screenSize <= 768 ? 'w3-col': '';
  $: barItem = screenSize >= 768 ? 'w3-bar-item' : '';

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
  };

  let currentLanguage;
  language.subscribe((value) => {
    currentLanguage = value;
  });

  export async function preload() {
    return waitLocale(lang);
  }
</script>

<svelte:window bind:innerWidth={screenSize} />

<header class="w3-container w3-padding">
  <button id="openNav" class="w3-button w3-xlarge" on:click={openMenu}>&#9776;</button>
  <h1 class="w3-center">{$_('header.title')}</h1>
</header>

<div class="w3-sidebar w3-bar-block w3-card w3-animate-left" style="display:none" id="mySidebar">
  <button class="{barItem} {column} w3-button w3-large" on:click={closeMenu}>{#if screenSize >= 768}
               Close 
            {/if} &times;</button>
    <div class="w3-row">
        <a href="/de/Meetings" class="{barItem} {column} w3-button w3-hover-gray"style:width={width} data-title='menu.meetings'>
            <img src="/images/meeting.png" alt="Meetings" class="w3-icon" style="width: 24px; height: 24px;"> 
            {#if screenSize >= 768}
                {$_('menu.meetings')}
            {/if}
        </a>
        <a href="/de/Ministry" class="{barItem} {column} w3-button w3-hover-yellow"style:width={width} data-title='menu.ministry'>
            <img src="/images/talking.png" alt="Ministry" class="w3-icon" style="width: 24px; height: 24px;"> 
            {#if screenSize >= 768}
                {$_('menu.ministry')}
            {/if}
        </a>
        <a href="/de/Radio" class="{barItem} {column} w3-button w3-hover-blue"style:width={width} data-title='menu.radio'>
            <img src="/images/radio.png" alt="Radio" class="w3-icon" style="width: 24px; height: 24px;"> 
            {#if screenSize >= 768}
                {$_('menu.radio')}
            {/if}
        </a>
        <a href="/de/Announcements" class="{barItem} {column} w3-button w3-hover-teal"style:width={width} data-title='menu.announcements'>
            <img src="/images/promotion.png" alt="Announcements" class="w3-icon" style="width: 24px; height: 24px;"> 
            {#if screenSize >= 768}
                {$_('menu.announcements')}
            {/if}
        </a>
        <a href="/de/Organisation" class="{barItem} {column} w3-button w3-hover-red"style:width={width} data-title='menu.organisation'>
            <img src="/images/teamwork.png" alt="Organisation" class="w3-icon" style="width: 24px; height: 24px;"> 
           {#if screenSize >= 768}
                {$_('menu.organisation.title')}
            {/if} 
        </a>
        <a href="/de/Conventions" class="{barItem} {column} w3-button w3-hover-black"style:width={width} data-title='menu.conventions'>
            <img src="/images/stadium.png" alt="Conventions" class="w3-icon" style="width: 24px; height: 24px;"> 
           {#if screenSize >= 768}
                {$_('menu.conventions')}
            {/if}  
        </a>
        
            <a href="/de/Admin" class="{barItem} {column} w3-button w3-hover-green" style:width={width} data-title='menu.login'>
            <img src="/images/user.png" alt="Login" class="w3-icon" style="width: 24px; height: 24px;">
            {#if screenSize >= 768}
                {$_('menu.admin')}
            {/if}   
            </a>
            <div class="w3-dropdown-hover">
                <button class="w3-button">Language {currentLanguage}</button>
                <div class="w3-dropdown-content w3-bar-block w3-card-4">
                    <button on:click={() => language.set('de')}  class="w3-bar-item w3-button">DE</button >
                    <button on:click={() => language.set('en')} class="w3-bar-item w3-button">EN</button >
                </div>
            </div>
        </div>
</div>
