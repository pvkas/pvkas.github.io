<script lang="ts">
	import Panel from '#lib/components/Panel.svelte';
</script>

<svelte:head>
	<title>Page not found - Vikas Padaliya</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="lost">
	<Panel title="404" level="h1">
		<p class="hand">This page doesn't exist.</p>
		<p>The link may be old, or the address may have a typo.</p>
		<a href="/">Go to the home page</a>
	</Panel>
</main>

<style>
	.lost {
		display: grid;
		place-items: center;
		min-height: 100svh;
		padding: 16px;
	}

	.lost :global(.panel) {
		width: min(100%, 480px);
		text-align: center;
	}

	p,
	a {
		font-family: var(--font-mono);
		font-size: 0.875rem;
	}

	.hand {
		margin-bottom: 8px;
		font-family: var(--font-hand);
		font-size: 1.375rem;
	}

	a {
		display: inline-block;
		margin-top: 16px;
	}
</style>
