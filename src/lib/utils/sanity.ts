import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const client = createClient({
	projectId: "5ta8aojz",
	dataset: "production",
	useCdn: false,
	apiVersion: '2021-08-31'
});

export async function getPosts(): Promise<Post[]> {
	return await client.fetch(groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
		title, 
		description, 
		publishedAt, 
		slug
	}`);
}

export async function getLimitedPosts(): Promise<Post[]> {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...5]`
	);
}

export async function getPost(slug: string): Promise<Post | null> {
	try {
		const result = await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, { slug });
		return result;
	} catch (error) {
		console.error('Error fetching post:', error);
		return null;
	}
}

export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	description: string;
	slug: Slug;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
