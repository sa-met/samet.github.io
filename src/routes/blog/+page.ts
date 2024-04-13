import { getLimitedPosts } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export async function load() {
	const posts = await getLimitedPosts();

	if (!posts) {
		throw error(404, 'No posts found');
	}
	return { posts };
}