<script lang="ts">
	export let data;
	import { urlFor } from '$lib/utils/image';

	 function time(date) {
      let dates = new Date(date);
	  let formattedDate = dates.toLocaleDateString('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' });
	 
	 return formattedDate;
	}	
	function sort(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + "...";
		} else {
			return text;
		}
	}
</script>

	<div class="py-10 my-6 home-card">
		<h2 class="font-medium text-4xl">Blog 📰</h2>
	</div>

	{#each data.posts as post, i} 
	<a href={`/blog/${post.slug.current}`}>
		<div class="home-card m-5 py-5 my-5 md:flex hover:border-slate-700 hover:shadow-xl">
			<div class="rounded-lg">
				<img src={urlFor(post.mainImage).url()} class="rounded-lg  md:w-[20rem]" />
			</div>
			<div class="md:ml-5 md:text-left text-2xl md:text-4xl md:w-1/2">
				<div class="py-2">
				  {post.title}
				</div>
				<p class="text-sm text-gray-400">
					{sort(post.description+"...", 200)}
				</p>
			</div>
			<div class="text-sm text-right ml-auto">
				{time(post._createdAt)}
			</div>
		</div>
	  </a>	
	{/each}