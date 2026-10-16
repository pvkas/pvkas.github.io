<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		title: string;
		/** h1 on standalone pages. */
		level?: 'h1' | 'h2';
		children: Snippet;
	}

	let { id, title, level = 'h2', children }: Props = $props();
</script>

<section {id} class="panel" aria-labelledby={id ? `${id}-title` : undefined}>
	<svelte:element this={level} id={id ? `${id}-title` : undefined} class="panel-title">
		{title}
	</svelte:element>
	{@render children()}
</section>

<style>
	.panel {
		display: grid;
		gap: 20px;
		padding: 24px var(--gutter) var(--gutter);
		border-radius: var(--radius-lg);
		background: var(--surface);
		box-shadow: var(--elevation-raised);
		scroll-margin-top: var(--gutter);
	}

	.panel-title {
		font-family: var(--font-mono);
		font-size: 1.25rem;
		font-weight: 600;
		line-height: 1.75rem;
		letter-spacing: -0.01em;
		text-align: center;
	}
</style>
