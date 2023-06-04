<script>
    import { _ } from '../services/i18n/i18n';
    export let tableData = [
        {
            date: "01.01.2000",
            time: "0:00-23:59",
            topic: "The Truth"
        }
    ]
    export let channelName = "Channel"
</script>

<div class="w3-container">
    <h4 class="w3-center">{$_('organisation.cleaning.title')}</h4>
    <div class="w3-panel w3-red">
        <p>
            {$_('organisation.cleaning.encouragement')}
        </p>
    </div>
</div>