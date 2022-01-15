import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
	publicDir: false,
	build: {
		outDir: "public"
	},
	base: "/3x-1/",
	plugins: [svelte()]
})
