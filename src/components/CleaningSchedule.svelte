<script>
import { _ } from 'svelte-i18n';
    export let tableData = [
        {
            date: "01.01.2023",
            mainCleaning: "1 PDG Klaus Ende",
            softCleaning: "5 PDG Matthias Meyer",
            gardenCleaning: "1 PDG Klaus Ende",
        },
       {
            date: "08.01.2023",
            mainCleaning: "3 Warburg (S.Reinicke)",
            softCleaning: "1 PDG Klaus Ende",
            gardenCleaning: "3 Warburg (S.Reinicke)"
        } 
    ]
</script>

<div class="w3-container">
    <h4 class="w3-center">{$_('organisation.cleaning.title')}</h4>
    <div class="w3-panel w3-red">
        <p>{$_('organisation.cleaning.encouragement')}</p>
    </div>
    <div class="w3-responsive">
        <table class="w3-table-all w3-hoverable">
            <thead>
                <tr class="w3-red">
                    <th>{$_('date')}</th>
                    <th>{$_('organisation.cleaning.main-cleaning')}</th>
                    <th>{$_('organisation.cleaning.intermediate-cleaning')}</th>
                    <th>{$_('organisation.cleaning.garden-maintenance')}</th>
                </tr>
            </thead>
            <tbody>
                {#each tableData as data}
                <tr>
                    <td>{data.date}</td>
                    <td>{data.mainCleaning}</td>
                    <td>{data.softCleaning}</td>
                    <td>{data.gardenCleaning}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
    <div class="w3-panel">
        <h4>{$_('organisation.cleaning-coordinator')} Bad Arolsen: <strong>Klaus Ende / Cai Kewitz</strong></h4>
        <h4>{$_('organisation.cleaning-coordinator')} Diemelstadt: <strong>Günter Herwede</strong></h4>
    </div>
</div>
