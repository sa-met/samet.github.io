import { error } from '@sveltejs/kit';

export async function load() {
	const stats = await fetch(`https://api.github-star-counter.workers.dev/user/sa-met`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/sa-met/repos`).then(res => res.json());
	let topRepos = [];

    if (!repos.message) {
   	 topRepos = repos.sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count).slice(0, 15)
	} else {
	 topRepos = [{
		name: "API rate limit exceeded",
		description: "API rate limit exceeded",
		language: "HTML",
		stargazers_count: "0",
		forks_count: "0"
	 }]
	}

	return { stats, topRepos };
}