<script lang="ts">
	// Self-hosted fonts, latin only.
	import '@fontsource/poppins/latin-400.css';
	import '@fontsource/poppins/latin-500.css';
	import '@fontsource/poppins/latin-600.css';
	import '@fontsource/patrick-hand/latin-400.css';
	import '@fontsource-variable/roboto-mono/wght.css';
	import poppins400 from '@fontsource/poppins/files/poppins-latin-400-normal.woff2?url';
	import poppins600 from '@fontsource/poppins/files/poppins-latin-600-normal.woff2?url';
	import '../app.css';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href={poppins400} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={poppins600} crossorigin="anonymous" />
</svelte:head>

{@render children()}
