export interface Skill {
	name: string;
	href: string;
	/** File name in static/img/skills, without extension. */
	icon: string;
}

export interface Milestone {
	year: string;
	title: string;
	/** Paragraphs of trusted HTML. */
	body: string[];
	current?: boolean;
}

export const site = {
	url: 'https://www.pvkas.com',
	title: 'Vikas Padaliya | Backend & Infra Engineer, building Localport',
	role: 'Engineer, tinkerer, builder',
	description:
		'Backend and infrastructure engineer, 8 years in DevOps, cloud and distributed systems. Building Localport: secure tunnels and remote access.',
	image: 'https://www.pvkas.com/img/vkas-preview.jpg',
	x: 'https://x.com/vkas_padaliya',
	linkedin: 'https://www.linkedin.com/in/pvkas13',
	xHandle: '@vkas_padaliya',
	localport: 'https://localport.io',
	location: 'Rajkot, India'
} as const;

export const builtSystems = [
	'Cloud & Networking Automation',
	'AI Agents',
	'Search Engines',
	'Recommendation Systems',
	'Admin & Moderation Systems',
	'APIs',
	'Microservices',
	'Conversational Bots',
	'Serverless WebApps'
];

export const practices = ['CI/CD', 'ETL', 'IaC', 'Zero Downtime'];

/** One row per line. */
export const techStack: Skill[][] = [
	[
		{ name: 'Go', href: 'https://go.dev/', icon: 'Go' },
		{ name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: 'TS' },
		{ name: 'JavaScript', href: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: 'JS' },
		{ name: 'Python', href: 'https://www.python.org/', icon: 'Python' },
		{ name: 'C', href: 'https://en.wikipedia.org/wiki/C_(programming_language)', icon: 'C' },
		{ name: 'Shell', href: 'https://www.shellscript.sh/', icon: 'Shell' }
	],
	[
		{ name: 'Svelte', href: 'https://svelte.dev/', icon: 'svelte' },
		{ name: 'GraphQL', href: 'https://graphql.org/', icon: 'Graphql' },
		{ name: 'Serverless', href: 'https://www.serverless.com/', icon: 'Serverless' },
		{ name: 'NestJS', href: 'https://nestjs.com/', icon: 'Nest' },
		{ name: 'Bot Framework', href: 'https://dev.botframework.com/', icon: 'BF' },
		{ name: 'Flask', href: 'https://flask.palletsprojects.com/', icon: 'Flask' },
		{ name: 'Dialogflow', href: 'https://cloud.google.com/dialogflow', icon: 'Dialogflow' },
		{ name: 'Rasa', href: 'https://rasa.com/', icon: 'Rasa' },
		{ name: 'Firebase', href: 'https://firebase.google.com/', icon: 'Firebase' },
		{ name: 'Airflow', href: 'https://airflow.apache.org/', icon: 'Airflow' }
	],
	[
		{ name: 'MongoDB', href: 'https://www.mongodb.com/', icon: 'Mongo' },
		{ name: 'PostgreSQL', href: 'https://www.postgresql.org/', icon: 'Postgre' },
		{ name: 'Elasticsearch', href: 'https://www.elastic.co/', icon: 'Elastic' },
		{ name: 'Redis', href: 'https://redis.io/', icon: 'Redis' },
		{ name: 'Dgraph', href: 'https://dgraph.io/', icon: 'Dgraph' },
		{ name: 'Kafka', href: 'https://kafka.apache.org/', icon: 'Kafka' }
	],
	[
		{ name: 'Docker', href: 'https://www.docker.com/', icon: 'Docker' },
		{ name: 'Kubernetes', href: 'https://kubernetes.io/', icon: 'Kubernetes' },
		{ name: 'Terraform', href: 'https://www.terraform.io/', icon: 'Terraform' },
		{ name: 'Ansible', href: 'https://www.ansible.com/', icon: 'Ansible' }
	],
	[
		{ name: 'AWS', href: 'https://aws.amazon.com/', icon: 'AWS' },
		{ name: 'Azure', href: 'https://azure.microsoft.com/', icon: 'Azure' },
		{ name: 'Google Cloud', href: 'https://cloud.google.com/', icon: 'GCP' },
		{ name: 'DigitalOcean', href: 'https://www.digitalocean.com/', icon: 'DO' }
	]
];

export const creativeTools: Skill[] = [
	{ name: 'Figma', href: 'https://www.figma.com/', icon: 'Figma' },
	{ name: 'Photoshop', href: 'https://www.adobe.com/products/photoshop.html', icon: 'PS' },
	{ name: 'Illustrator', href: 'https://www.adobe.com/products/illustrator.html', icon: 'AI' },
	{ name: 'After Effects', href: 'https://www.adobe.com/products/aftereffects.html', icon: 'AE' },
	{ name: 'Blender', href: 'https://www.blender.org/', icon: 'Blender' },
	{ name: 'FL Studio', href: 'https://www.image-line.com/', icon: 'FL' },
	{ name: 'Ableton Live', href: 'https://www.ableton.com/', icon: 'Ableton' }
];

export const journey: Milestone[] = [
	{
		year: '2026 ...',
		title: 'Building Localport',
		current: true,
		body: [
			'After spending time working closely with visionary startup founders and passionate Indie Hackers, absorbing their invaluable insights and experiences, I took the leap and started building my own products.',
			'<a class="product" href="https://localport.io" target="_blank" rel="noopener"><img src="/img/localport.webp" alt="" width="20" height="20" />Localport<span class="sr-only"> (opens in a new tab)</span></a>: secure tunnels and remote access for every machine. A persistent public URL for anything you run, and private access to every device you deploy.'
		]
	},
	{
		year: '2025',
		title: 'AI Agent, Moderation System, Spent time with startup founders',
		body: [
			'Worked on building a custom AI agent with RAG. Built an Admin and Moderation system for a professional networking platform. Jumped on the AI hype train to experience Vibe and AI assisted coding. Went back to handcrafting code, but use AI to be my extra hands. Had an incredible, life-changing experience connecting and collaborating with visionary startup founders, learning how great products get made. It set me up to start building products of my own.'
		]
	},
	{
		year: '2024',
		title: 'AI, Feed',
		body: [
			'I worked on building feed generation for brands & teams involved in a collaborative professional network. It included dynamic post generation for activities happening in the network, achieving milestones etc.',
			'Moderator system to manage activity in a complex professional network product.',
			'Played with different types of open source AI models and their use cases.',
			'Different architectures to build custom AI models integrated with a data lake.'
		]
	},
	{
		year: '2023',
		title: 'AI, Search Engine',
		body: [
			'Working professionally to build a search engine for a collaborative professional network. My responsibilities involved building data pipelines for data aggregation, indexing, generating custom queries for text searches and implementing the ranking system in the search engine. I also spent time learning and experimenting with open source AI models for use cases like text summarization & QnA.'
		]
	},
	{
		year: '2022',
		title: 'AI, Web3',
		body: [
			'Working closely with startups around AI and Collaboration Networks. Using my existing knowledge in AI & NLP, I helped develop and integrate an end-to-end service which predicts emotion from voice. As one of the early users and beta testers of GPT-OpenAI (since 2020), I spent a lot of time experimenting with AI technologies. Meanwhile I also contributed to a startup building an emerging peer to peer professional network as a Backend & DevOps engineer. From trying to build a bridge between web2 and web3 for next-gen applications, I pivoted towards AI applications.'
		]
	},
	{
		year: '2021',
		title: 'BlockChain, Graph Databases, Zero Downtime, Event Driven Microservice',
		body: [
			'Got the chance to work on growing startups with massive user growth. Scale & stability become the primary requirement of a startup at this stage. I worked on implementing zero downtime using methods like blue-green deployments, and testing with canary builds. One of my core responsibilities was to develop and migrate to event driven microservices, while leading features like a recommendation engine service built on graph databases. As the tech world was already shifting towards new technologies like blockchain and crypto, I spent a decent amount of time learning and experimenting with it.'
		]
	},
	{
		year: '2020',
		title: 'Python, Elastic Search, Ansible, Kubernetes',
		body: [
			'Working in a service based startup, I got the opportunity to work with different startups and people around the world. Since every idea has its own tech requirements, I have worked in different languages: building architectures like master-slave for workload distribution, writing ETL, APIs, cache systems and NLP bots. All while taking care of DevOps responsibilities and developing solid knowledge of IaC and Kubernetes.'
		]
	},
	{
		year: '2019',
		title: 'Nodejs, MongoDB, Docker, Azure',
		body: [
			'While working as a DevOps intern, I was also one of the core backend developers in MEAN & MERN stack projects. Writing and integrating APIs, web scraping and scripts. Started building strong knowledge around containerization while getting my hands on AWS and Azure. Thus, I started my tech journey.'
		]
	},
	{
		year: '2018',
		title: 'Linux, Administration, Cloud, AWS',
		body: [
			'As the industry was shifting towards cloud computing, I used the knowledge I had of networking and jumped into cloud computing. I started by taking courses on AWS, which helped me learn administration and UNIX, and eventually made me play around with Linux. This was when I really started loving open source and its community. Finally I decided to join a company as a DevOps intern.'
		]
	},
	{
		year: '2017',
		title: 'Figma, XD, Networking',
		body: [
			'While working part time as a designer, I shifted my work towards UI/UX. As I was working closely with the industry while studying, I found one interesting domain: networking. So I took a few CISCO and VMware courses, where I learned how to configure and manage networks, bare metal, virtual machines, switches, routers and firewalls.'
		]
	},
	{
		year: '2016',
		title: 'Java, Android, Illustrator, Premiere',
		body: [
			'As a part of academics, I learned Java and Android. Out of personal interest I contributed to a couple of mobile applications. To create assets for them I spent a lot of time creating icons, screens and animations using Illustrator. Meanwhile I also helped create posters, teasers and brochures for college. I was also working as a part time designer in a startup.'
		]
	},
	{
		year: '2015',
		title: 'C++, Shell',
		body: [
			'After spending a lot of time working with all these different tools and programs, I developed an interest in computers and chose it as my career path. The very first things I got to learn were languages like C, C++ and basic shell scripting, along with software engineering fundamentals.'
		]
	},
	{
		year: '2013-2014',
		title: 'Blender, FL Studio, Ableton Live',
		body: [
			'Playing with 2D animation and VFX eventually led me to 3D animation and asset building. Since every short clip needs an audio track, that drove me towards making music. I used tools like FL Studio and Ableton Live to create samples and music tracks.'
		]
	},
	{
		year: '2012',
		title: 'Photoshop, After Effects',
		body: [
			'Having an interest in drawing, I got my hands on creating digital art. Started with basic editing in Photoshop, then made short films and animations in After Effects. I still feel the same excitement about the VFX industry.'
		]
	}
];
