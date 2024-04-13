import { error } from '@sveltejs/kit';
import { getPost } from '../../../lib/utils/sanity';

export async function load({ params }) {
	const post = await getPost(params.slug);
	if (post) return post;

	if (!post) {
		throw error(404, 'No posts found');
	}
	
	return { post };
}