<script lang="ts">
	import type { Skill } from '#lib/data.ts';

	interface Props {
		label: string;
		/** One row per line. */
		rows: Skill[][];
	}

	let { label, rows }: Props = $props();
</script>

<div class="well" role="group" aria-label="{label} (links open in a new tab)">
	{#each rows as row, r (r)}
		<ul class="row">
			{#each row as skill (skill.icon)}
				<li>
					<a href={skill.href} target="_blank" rel="noopener" data-label={skill.name}>
						<img
							src="/img/skills/{skill.icon}.webp"
							alt={skill.name}
							width="44"
							height="44"
							decoding="async"
						/>
					</a>
				</li>
			{/each}
		</ul>
	{/each}
</div>

<style>
	.well {
		display: grid;
		gap: 8px;
		container-type: inline-size;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 8px;
		padding: 0;
		list-style: none;
	}

	a {
		position: relative;
		display: block;
		border-radius: var(--radius-sm);
		transition: transform 0.2s var(--ease);
	}

	img {
		width: 44px;
		height: 44px;
		border-radius: var(--radius-sm);
		box-shadow: var(--elevation-button);
	}

	/* Tooltip */
	a::after {
		content: attr(data-label);
		position: absolute;
		left: 50%;
		bottom: calc(100% + 8px);
		z-index: 1;
		padding: 2px 8px;
		border-radius: var(--radius-sm);
		background: var(--raised);
		box-shadow: var(--elevation-button);
		color: var(--chalk);
		font-size: 0.75rem;
		line-height: 1.25rem;
		white-space: nowrap;
		pointer-events: none;
		opacity: 0;
		transform: translate(-50%, 4px);
		transition:
			opacity 0.15s,
			transform 0.15s var(--ease);
	}

	a:hover,
	a:focus-visible {
		transform: translateY(-2px);
	}

	a:hover::after,
	a:focus-visible::after {
		opacity: 1;
		transform: translate(-50%, 0);
	}

	/* Smaller icons in narrow containers */
	@container (max-width: 460px) {
		.row {
			gap: 6px;
		}

		img {
			width: 40px;
			height: 40px;
		}
	}
</style>
