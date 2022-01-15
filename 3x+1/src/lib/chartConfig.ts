export const chartConfig = (chartData) => ({
	type: 'line',
	fill: true,
	data: {
		datasets: [
			{
				data: chartData,
				borderColor: '#bd93f9',
				pointBorderColor: '#ff79c6',
				pointBackgroundColor: '#ff79c6',
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			x: {
				type: 'linear',
				scaleLabel: {
					display: true,
				},
			},
			y: {
				min: 0,
			},
		},
		plugins: {
			title: {
				display: true,
				color: '#ff0000',
				text: `3x + 1 chart for ${chartData[0]}`,
			},
			layout: {
				padding: 20,
			},
			tooltip: {
				enabled: true,
			},
			zoom: {
				limits: {
					x: {
						min: -1,
						max: Math.max(...chartData.map((e) => e.x)) * 1.2,
					},
					y: {
						min: 0,
						max: Math.max(...chartData.map((e) => e.y)) * 1.2,
					},
				},
				pan: {
					enabled: true,
				},
				zoom: {
					wheel: {
						enabled: true,
					},
					drag: {
						enabled: true,
						modifierKey: 'shift',
					},
					pinch: {
						enabled: true,
					},
					mode: 'xy',
				},
			},
		},
	},
	zoom: {
		enabled: true,
		mode: 'xy',
	},
	plugins: [bgPlugin],
})

const bgPlugin = {
	id: 'custom_canvas_background_color',
	beforeDraw: (chart) => {
		const ctx = chart.canvas.getContext('2d')
		ctx.save()
		ctx.globalCompositeOperation = 'destination-over'
		ctx.fillStyle = '#282a36'
		ctx.fillRect(0, 0, chart.width, chart.height)
		ctx.restore()
	},
}
