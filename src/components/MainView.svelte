<script>
    export let SelectedComponent
</script>

<div  id="main">
    <div class="w3-container">
      <div class="w3-row">
        <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
        <div class="w3-col w3-container w3-white w3-padding-64" style="width:80%">
           <svelte:component this={SelectedComponent} /> 
        </div>
        <div class="w3-col w3-container" style="width:10%">&nbsp;</div>
    </div>
  </div>
</div>