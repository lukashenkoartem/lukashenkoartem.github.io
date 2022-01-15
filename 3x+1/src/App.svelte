<script lang="ts">
	import Chart from './lib/Chart.svelte'
	import { store as myChart } from './lib/store.ts'

	let num = 3
	let numData = [num]

	const update = () => {
		numData = [num]
		while (true) {
			let cur = numData[numData.length - 1]

			if (cur == 1) {
				break
			}
			if (cur % 2 == 0) {
				numData.push(cur / 2)
			} else {
				numData.push(3 * cur + 1)
			}
		}
	}
	update()

	const getImage = () => {
		var a = document.createElement('a')
		a.href = $myChart.toBase64Image()
		a.download = `chart_${num}.png`
		a.click()
	}
</script>

<main data-theme="dracula">
	<h1 class="">3x + 1 Visualiser</h1>
	<section class="ui">
		<input
			class="input-primary text-gray-700 p-2"
			type="number"
			name="num"
			id="num"
			placeholder="Enter number here"
			bind:value={num}
		/>
		<button class="btn btn-primary" on:click={update}>Go!</button>
		<button class="btn btn-secondary" on:click={getImage}
			>Download as image</button
		>
	</section>
	<Chart data={numData} />
</main>

<style lang="postcss">
	h1 {
		@apply text-4xl text-center font-mono text-[#ebcb8b];
	}
	h2 {
		@apply text-3xl text-center font-sans text-[#a3be8c];
	}

	.ui {
		@apply my-4 mx-auto;
		@apply flex flex-col w-6/12 md:flex-row justify-center gap-4;
	}
</style>
