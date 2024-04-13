<script lang="ts">
	import { Motion } from 'svelte-motion'
	export let data;
	import { browser } from '$app/environment';
	import { onMount, onDestroy } from 'svelte';
	import { urlFor } from '$lib/utils/image';

	const user = data.lanyardResponse.data.discord_user;
	const status = data.lanyardResponse.data.discord_status;
	const spotify = data.lanyardResponse.data.spotify;
	const activities = data.lanyardResponse.data.activities;
	let progress = 0;
	let totalDuration = 0;
	let spotifyUpdateInterval: any;

	onMount(() => {
		if (spotify && browser) {
			totalDuration = Math.floor((spotify.timestamps.end - spotify.timestamps.start) / 1000);
			progress = Math.floor((Date.now() - spotify.timestamps.start) / 1000);
			function updateProgress() {
				progress = Math.floor((Date.now() - spotify.timestamps.start) / 1000);
			}

			spotifyUpdateInterval = setInterval(function () {
				updateProgress();
				if (progress >= totalDuration) {
					clearInterval(spotifyUpdateInterval);
					location.reload();
				}
			}, 1000);
		}
	});

	onDestroy(() => {
		clearInterval(spotifyUpdateInterval);
	});

	function formatTimestamp(start: number) {
		const current = Math.floor((Date.now() - start) / 1000);
		return `${
			Math.floor(current / 60) >= 60
				? `${Math.floor(Math.floor(current / 60) / 60).toLocaleString('en-US', {
						minimumIntegerDigits: 2,
						useGrouping: false,
				  })}:`
				: ``
		}${Math.floor(Math.floor(current / 60) - Math.floor(Math.floor(current / 60) / 60) * 60).toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false,
		})}:${Math.floor(current % 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`;
	}
    import Techitems from '../lib/components/Techitems.svelte';
	import RepoItem from "../lib/components/RepoItem.svelte";
	import Card from "../lib/components/Card.svelte";
</script>

<div class="container md:flex w-full h-full mx-auto justify-center items-center py-10 p-5 px-5 home-card">
	<div class="mx-auto relative">
		<img class="w-72 rounded-lg border-gray-300 border-2 profile-image " alt="avatar" src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}" />
		<img class="rounded-lg absolute top-2.5 left-2.5 w-[calc(100%-30px)] h-[calc(100%-30px)]" alt="avatar" src="https://cdn.discordapp.com/avatars/{user.id}/{user.avatar}" />
	</div>

	<div class="md:w-1/2 mt-5">
		<h2 class="text-4xl">Hey, I'm {user.username}👋</h2>
		<h3 class="text-sm text-black dark:text-gray-300 leading-6 font-light tracking-wide ml-2 mt-5 md:mt-5 md:ml-0 md:w-[25rem]"> I'm Samet, a self-taught software engineer from Turkey, currently residing in the United States. At 21 years old, I've embarked on a journey into the world of technology, fueled by my passion for coding, gaming, and sports. Today, I'm here to share my story of growth and learning in the field of full-stack web development.</h3>
	</div>
</div>
	{#if data.lanyardResponse.data.listening_to_spotify}
	<div class="container mt-10 w-full h-full mx-auto variant-glass-success justify-center items-center py-10 p-5 px-5 home-card">
            <h1 class="text-black dark:text-gray-100 font-semibold text-base mb-2 flex items-center justify-center">
                Listening to Spotify
                <span class="ml-2 w-2 h-2">
                    <span class="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
                    <span class="absolute w-2 h-2 bg-red-600 rounded-full" />
                </span>
            </h1>

            <div class="w-full h-[6rem] flex flex-row items-center justify-start">
                <img
                    src={spotify.album_art_url}
                    class="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none"
                    alt={spotify.album}
                />
                <div class="w-56 h-full flex flex-col items-start justify-center">
                    <a
                        href={`https://open.spotify.com/track/${spotify.track_id}`}
                        target="_blank"
                        rel="noreferrer"
                        class="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:underline truncate"
                    >
                        {spotify.song}
                    </a>
                    <p class="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
                        {spotify.artist}
                    </p>
                </div>
            </div>
			<progress class="progress progress-success w-full" value={progress} max={totalDuration} />
			<div>
				{formatTimestamp(spotify.timestamps.start)}
			</div>
        </div>
		{/if}
<div class="container mt-10 w-full h-full mx-auto justify-center items-center py-10 p-5 px-5 home-card">
	<h2 class="font-medium text-3xl mb-4">Languages and Frameworks 💻</h2>
	<p class="dark:text-gray-300 leading-6 font-light tracking-wide mb-6 md:w-[40rem]">
		I use a variety of tools to streamline my development process and increase the quality of both my code,
		and my projects. Below is a list of technologies and languages I've had experience with in the past, or
		use currently.
	</p>
	<div class="flex flex-wrap p-4 text-center mx-auto justify-center items-center">
		<Techitems title="Windows 11" icon="mingcute:windows-fill" />
		<Techitems title="Android" icon="material-symbols:android" />
		<Techitems title="VSCode" icon="devicon-plain:vscode"/>
		<Techitems title="TypeScript" icon="simple-icons:typescript"/>
		<Techitems title="JavaScript" icon="ri:javascript-fill"/>
		<Techitems title="Node.js" icon="fa6-brands:node"/>
		<Techitems title="MongoDB" icon="simple-icons:mongodb"/>
		<Techitems title="Next.js" icon="ri:nextjs-fill"/>
		<Techitems title="React.js" icon="ri:reactjs-fill"/>
		<Techitems title="Svelte" icon="ri:svelte-fill"/>
		<Techitems title="Npm" icon="simple-icons:npm"/>
		<Techitems title="Github" icon="mingcute:github-fill"/>
		<Techitems title="Yarn" icon="file-icons:yarn"/>
		<Techitems title="Git" icon="bi:git"/>
		<Techitems title="React Native" icon="tabler:brand-react-native"/>
		<Techitems title="Tailwind Css" icon="simple-icons:tailwindcss"/>
	</div>
</div>

<div class="container mt-10 w-full h-full mx-auto justify-center items-center py-10 p-5 px-5 my-10 home-card">
	<h2 class="font-medium text-3xl mb-4">Projects 🛠️</h2>
            <p class="text-gray-800 dark:text-gray-300 leading-6 font-light tracking-wide mb-6">
				I'm passionate about open source and enjoy creating projects on{" "}
				 <a
				href="https://github.com/sa-met"
				rel="noreferrer"
				class="font-semibold text-violet-500 hover:underline"
			>
				GitHub
			</a> 
			to learn and share knowledge with others. While my projects may not have garnered widespread attention yet, I'm proud of the <span class="font-bold text-black dark:text-slate-200">{data?.stats?.stars || 0}</span> stars they've earned so far. Here are some of my most popular repositories:
            </p>
			<div class="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
				{#if data.topRepos}
				{#each data.topRepos.entries() as repo}
				<RepoItem
					name={repo[1].name}
					description={repo[1].description}
					stars={repo[1].stargazers_count}
					forks={repo[1].forks_count}
					language={repo[1].language}
				/>
				{/each}
				{/if}
            </div>
</div>

<div class="container mt-10 w-full h-full mx-auto justify-center items-center py-10 p-5 px-5 my-10 home-card">
	<h2 class="font-medium text-3xl mb-4">Blog 📰</h2>
	
	<div class="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
		{#if data.posts}
			{#each data.posts.entries() as post}
				<Card
				title={post[1].title}
				description={post[1].description}
				slug={post[1].slug.current}
				image={urlFor(post[1].mainImage).url()}
				date={post[1]._createdAt}
				tag={post[1].mainImage.alt}
			/>
			{/each}
		{/if}
	</div>
</div>
<style lang="postcss">
@keyframes changeGlowColor {
  0% { box-shadow: 0 0 5px #fff; }
  50% { box-shadow: 0 0 5px #f00; }
  100% { box-shadow: 0 0 5px #00f; }
}

@keyframes float {
  0%, 100% { transform: translateY(-5px); }
  50% { transform: translateY(5px); }
}

@keyframes glow {
	0% {
		@apply bg-primary-400/50 blur-[20px];
	}
	33% {
		@apply bg-secondary-400/50 blur-[20px];
	}
	66% {
		@apply bg-tertiary-400/50 blur-[20px];
	}
	100% {
		@apply bg-primary-400/50 blur-[20px];
	}
}

.profile-image-container {
  @apply relative;
}

.profile-image {
  @apply shadow-lg ring-offset-8 ring-white ring-opacity-50;
  animation: float 3s ease-in-out infinite, changeGlowColor 3s linear infinite, glow 5s linear infinite;;
}
</style>
