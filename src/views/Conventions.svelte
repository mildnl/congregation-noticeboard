<script>
  import { _ } from '../services/i18n/i18n';
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

<h1 class="w3-center w3-padding w3-panel w3-black">{$_('menu.conventions')}</h1>

<footer>
  <a href="#top" title="Home">Home</a>
</footer>