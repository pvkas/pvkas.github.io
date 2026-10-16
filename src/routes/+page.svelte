<script lang="ts">
	import Journey from '#lib/components/Journey.svelte';
	import Panel from '#lib/components/Panel.svelte';
	import Profile from '#lib/components/Profile.svelte';
	import Seo from '#lib/components/Seo.svelte';
	import SkillRow from '#lib/components/SkillRow.svelte';
	import { creativeTools, journey, techStack } from '#lib/data.ts';
</script>

<Seo />

<svelte:head>
	<link
		rel="preload"
		as="image"
		type="image/webp"
		imagesrcset="/img/vkas-400.webp 400w, /img/vkas.webp 640w"
		imagesizes="(min-width: 768px) min(320px, 30vh), min(300px, 24vh)"
		fetchpriority="high"
	/>
</svelte:head>

<div class="page">
	<div class="aside">
		<Profile />
	</div>

	<main>
		<Panel id="skills" title="Knowledge Container">
			<SkillRow label="Tech stack" rows={techStack} />
			<p class="aside-note">Side quests: gaming, design, motion and music</p>
			<SkillRow label="Design, motion and music" rows={[creativeTools]} />
		</Panel>

		<Panel id="journey" title="Journey">
			<Journey milestones={journey} />
		</Panel>
	</main>
</div>

<style>
	.aside {
		background: var(--ink);
		border-bottom: 1px solid var(--hairline);
	}

	main {
		display: grid;
		gap: var(--gutter);
		width: 100%;
		max-width: 1080px;
		margin-inline: auto;
		padding: var(--gutter);
	}

	.aside-note {
		margin: 4px 0 -8px;
		font-family: var(--font-hand);
		font-size: 1.375rem;
		line-height: 1.3;
		text-align: center;
	}

	@media (min-width: 768px) {
		.page {
			display: grid;
			grid-template-columns: minmax(300px, 5fr) minmax(0, 7fr);
			align-items: start;
		}

		.aside {
			border-bottom: 0;
			border-right: 1px solid var(--hairline);
		}

		main {
			padding-block: clamp(20px, 4vh, 48px);
		}
	}

	/* Sticky profile on tall screens only */
	@media (min-width: 768px) and (min-height: 600px) {
		.aside {
			position: sticky;
			top: 0;
			height: 100svh;
			overflow-y: auto;
			scrollbar-width: none;
		}
	}

	@media (min-width: 1600px) {
		.page {
			grid-template-columns: minmax(300px, 2fr) minmax(0, 3fr);
		}
	}
</style>
