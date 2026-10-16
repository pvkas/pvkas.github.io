<script lang="ts">
	import type { Milestone } from '#lib/data.ts';

	interface Props {
		milestones: Milestone[];
	}

	let { milestones }: Props = $props();
</script>

<ol class="timeline">
	{#each milestones as m (m.year)}
		<li class:current={m.current}>
			<span class="dot" aria-hidden="true"></span>
			<h3 class="year">{m.year}</h3>
			<p class="title">{m.title}</p>
			<div class="body">
				{#each m.body as paragraph, i (i)}
					<!-- Trusted HTML from data.ts -->
					<p>{@html paragraph}</p>
				{/each}
			</div>
		</li>
	{/each}
</ol>

<style>
	.timeline {
		--dot: 13px;
		/* Dot centre on the year line */
		--dot-y: 0.875rem;

		padding: 0;
		list-style: none;
	}

	li {
		position: relative;
		padding: 0 0 40px calc(var(--dot) + 20px);
	}

	li:last-child {
		padding-bottom: 0;
	}

	/* Rail between dot centres */
	li:not(:last-child)::before {
		content: '';
		position: absolute;
		left: calc(var(--dot) / 2 - 0.5px);
		top: var(--dot-y);
		bottom: calc(var(--dot-y) * -1);
		width: 1px;
		background: var(--hairline-strong);
	}

	.dot {
		position: absolute;
		left: 0;
		top: calc(var(--dot-y) - var(--dot) / 2);
		z-index: 1;
		width: var(--dot);
		height: var(--dot);
		border-radius: 50%;
		background: var(--surface);
		border: 2px solid var(--faint);
		/* Masks the rail around the dot */
		box-shadow: 0 0 0 4px var(--surface);
	}

	.current .dot {
		background: var(--chalk);
		border-color: var(--chalk);
	}

	.year {
		font-family: var(--font-mono);
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 1.75rem;
		letter-spacing: -0.01em;
	}

	.title {
		margin-top: 2px;
		font-size: 0.9375rem;
		font-weight: 600;
		line-height: 1.375rem;
		color: var(--chalk);
	}

	.body {
		margin-top: 10px;
		max-width: 72ch;
		color: var(--muted);
		line-height: 1.7;
	}
</style>
