<script lang="ts">
	import Grid from "./Grid.svelte";
    import {levels} from "./levels";
    import type {Level} from './levels'

    let level = levels[0];
    let size: number = level.size;
    let grid: string[]= createGrid(level);
    let found = [];

    function createGrid(level: Level): string[] {
        let copy = level.emojis.slice();
        const pairs: string[] = [];

        for (let i = 0; i < level.size ** 2 / 2; i++) {
            const index = Math.floor(Math.random() * copy.length);
            pairs.push(copy[index]);
            copy = copy.filter((_,myIndex) => myIndex != index);
        }

        let res = [...pairs, ...pairs]

        for (let i = 0; i < level.size; i++) {
            const index = Math.floor(Math.random() * res.length);
            const index2 = Math.floor(Math.random() * res.length);

            if (index != index2) {
                let tmp = res[index];
                res[index] = res[index2];
                res[index2] = tmp;
            }
        }
        return res;

    }

</script>
<div class="game">
    <div class="info">

    </div>
    <div class="grid-container">
       <Grid {grid}/> 
    </div>
    <div class="info">
        
    </div>
    <div style="font-size: 20px">
    {grid.length}{grid}
    </div>
</div>

<style>
    .game {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: min(1vmin, 0.3rem);
    }

    .info {
        width: 80em;
        height: 10em;
        background: purple;
    }

    .grid-container {
        width: 80em;
        height: 80em;
        background: teal;
    }
</style>