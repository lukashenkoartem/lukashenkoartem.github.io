<script lang="ts">
	import { afterUpdate } from 'svelte'
	import {
		Chart,
		LineController,
		LinearScale,
		CategoryScale,
		PointElement,
		LineElement,
	} from 'chart.js'
	import zoomPlugin from 'chartjs-plugin-zoom'
	import { chartConfig } from './chartConfig.ts'
	import { store as myChart } from './store.ts'

	Chart.register(
		LineController,
		LinearScale,
		CategoryScale,
		PointElement,
		LineElement,
		zoomPlugin
	)

	export let data
	$: data = data.map((v, k) => ({ x: k, y: v }))

	let ctx
	afterUpdate(() => {
		ctx = document.getElementById('chart').getContext('2d')
		if ($myChart) $myChart.destroy()
		myChart.set(new Chart(ctx, chartConfig(data)))
	})
</script>

<canvas id="chart" width="1.5" height="1" />
