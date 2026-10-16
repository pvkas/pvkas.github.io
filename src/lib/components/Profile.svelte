<script lang="ts">
	import { builtSystems, practices, site } from '#lib/data.ts';
</script>

<header class="profile">
	<img
		class="avatar"
		src="/img/vkas.webp"
		srcset="/img/vkas-400.webp 400w, /img/vkas.webp 640w"
		sizes="(min-width: 768px) min(320px, 30vh), min(300px, 24vh)"
		alt="Vikas Padaliya"
		width="640"
		height="640"
		fetchpriority="high"
	/>

	<div class="name">
		<h1>Vikas Padaliya</h1>
		<p class="hand role">{site.role}</p>
	</div>

	<div class="about">
		<div class="lead">
			<p>Handcrafting SaaS products.</p>
			<p>
				<span class="keep"
					>Building <a class="product" href={site.localport} target="_blank" rel="noopener"
						><img src="/img/localport.webp" alt="" width="28" height="28" />Localport<span class="sr-only"> (opens in a new tab)</span></a
					>:</span
				>
				<span class="keep">secure tunnels and remote access.</span>
			</p>
		</div>

		<div class="tags-block">
			<p>In my experience I've worked on building</p>
			<ul class="tags" aria-label="Systems I've built">
				{#each builtSystems as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>

		<div class="tags-block">
			<p>Writing & implementing</p>
			<ul class="tags" aria-label="Engineering practices">
				{#each practices as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</div>

		<p class="love">
			Avid Open Source Lover
			<svg class="heart" viewBox="0 0 256 256" width="16" height="16" aria-hidden="true">
				<path
					fill="currentColor"
					d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"
				/>
			</svg>
		</p>
	</div>

	<nav class="actions" aria-label="Links">
		<a class="button primary" href={site.localport} target="_blank" rel="noopener">
			<img src="/img/localport.webp" alt="" width="18" height="18" />Try Localport<span class="sr-only"> (opens in a new tab)</span>
		</a>
		<a class="button" href={site.x} target="_blank" rel="noopener me">
			<svg viewBox="0 0 24 24" aria-hidden="true">
				<path
					fill="currentColor"
					d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
				/>
			</svg>
			Follow on X<span class="sr-only"> (opens in a new tab)</span>
		</a>
	</nav>
</header>

<style>
	/* Fits one screen on mobile */
	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: clamp(14px, 2.6svh, 28px);
		min-height: 100svh;
		padding: clamp(20px, 4svh, 48px) 16px;
		text-align: center;
	}


	.avatar {
		width: auto;
		height: clamp(120px, 24svh, 300px);
		aspect-ratio: 1;
		border-radius: 50%;
		object-fit: cover;
		box-shadow: var(--elevation-raised);
	}

	.name {
		display: grid;
		gap: 2px;
	}

	.hand {
		font-family: var(--font-hand);
		line-height: 1.35;
	}

	.role {
		font-size: 1.1875rem;
		color: var(--muted);
	}

	h1 {
		font-size: clamp(1.75rem, 2.6vw, 2.375rem);
		font-weight: 600;
		line-height: 1.15;
		letter-spacing: -0.02em;
	}

	.about {
		display: grid;
		gap: clamp(12px, 2.2svh, 22px);
		width: 100%;
		max-width: 30rem;
		font-size: 0.875rem;
		color: var(--muted);
	}

	.lead {
		display: grid;
		gap: 2px;
		color: var(--chalk);
	}

	.keep {
		white-space: nowrap;
	}

	.tags-block {
		display: grid;
		gap: 8px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 5px;
		padding: 0;
		list-style: none;
	}

	.tags li {
		padding: 1px 8px;
		border-radius: var(--radius-sm);
		background: var(--fill-subtle);
		box-shadow: var(--elevation-tag);
		color: var(--chalk);
		font-size: 0.75rem;
		line-height: 1.25rem;
		white-space: nowrap;
	}

	.love {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 6px;
		color: var(--chalk);
	}

	.heart {
		color: var(--heart);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
	}

	/* Primary button */
	.primary {
		background-color: var(--contrast);
		box-shadow: var(--elevation-button-contrast);
	}

	.primary:hover {
		background-color: var(--contrast-hover);
	}

	@media (min-width: 768px) {
		.avatar {
			height: clamp(160px, 30svh, 320px);
		}

		.tags li {
			font-size: 0.7812rem;
			padding: 2px 9px;
		}
	}

</style>
