import { getLimitedPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
	const response = await fetch('https://api.lanyard.rest/v1/users/894594782897262635').then(res => res.json());
	const stats = await fetch(`https://api.github-star-counter.workers.dev/user/sa-met`).then(res => res.json());
    const repos = await fetch(`https://api.github.com/users/sa-met/repos?type=owner&per_page=20`).then(res => res.json());
	const posts = await getLimitedPosts();
	let topRepos = [];
	if (!posts) {
		throw error(404, 'No posts found');
	}

    if (!repos.message) {
   	 topRepos = repos.sort((a: Record<string, any>, b: Record<string, any>) => b.stargazers_count - a.stargazers_count).slice(0, 4)
	} else {
	 topRepos = [{
		name: "API rate limit exceeded",
		description: "API rate limit exceeded",
		language: "HTML",
		stargazers_count: "0",
		forks_count: "0"
	 }]
	}

	return { lanyardResponse: response, stats, topRepos, posts };
}