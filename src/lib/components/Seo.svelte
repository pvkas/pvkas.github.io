<script lang="ts">
	import { creativeTools, site, techStack } from '#lib/data.ts';

	const person = {
		'@type': 'Person',
		'@id': `${site.url}/#person`,
		name: 'Vikas Padaliya',
		alternateName: ['pvkas', 'vkas'],
		url: site.url,
		image: `${site.url}/img/vkas.webp`,
		jobTitle: 'Software Engineer',
		description: site.description,
		homeLocation: { '@type': 'Place', name: site.location },
		worksFor: { '@type': 'Organization', name: 'Localport', url: site.localport },
		knowsAbout: [...techStack.flat(), ...creativeTools].map((s) => s.name),
		sameAs: [site.x]
	};

	const graph = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebSite',
				'@id': `${site.url}/#website`,
				url: site.url,
				name: 'Vikas Padaliya',
				inLanguage: 'en'
			},
			{
				'@type': 'ProfilePage',
				'@id': `${site.url}/#profile`,
				url: site.url,
				name: site.title,
				isPartOf: { '@id': `${site.url}/#website` },
				mainEntity: person
			}
		]
	};

	// Raw JSON-LD; escape "<" so it can't close the script tag.
	const jsonLd = `<script type="application/ld+json">${JSON.stringify(graph).replace(/</g, '\\u003c')}<\/script>`;
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta name="author" content="Vikas Padaliya" />
	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
	<link rel="canonical" href="{site.url}/" />

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="Vikas Padaliya" />
	<meta property="og:locale" content="en_IN" />
	<meta property="og:url" content="{site.url}/" />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:image" content={site.image} />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="627" />
	<meta property="og:image:alt" content="Vikas Padaliya, software engineer building Localport" />
	<meta property="profile:first_name" content="Vikas" />
	<meta property="profile:last_name" content="Padaliya" />
	<meta property="profile:username" content="vkas_padaliya" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content={site.xHandle} />
	<meta name="twitter:creator" content={site.xHandle} />
	<meta name="twitter:title" content={site.title} />
	<meta name="twitter:description" content={site.description} />
	<meta name="twitter:image" content={site.image} />
	<meta name="twitter:image:alt" content="Vikas Padaliya, software engineer building Localport" />

	{@html jsonLd}
</svelte:head>
