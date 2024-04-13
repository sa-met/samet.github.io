<script lang="ts">
	export let data;
    import CustomDefaultListitem from '$lib/components/CustomDefaultListitem.svelte';
	import Code from '$lib/components/Code.svelte';
	import { PortableText  } from '@portabletext/svelte';
	import ImageBlock from '$lib/components/ImageBlock.svelte';
	const dates = new Date(data._createdAt);
    const formattedDate = dates.toLocaleDateString('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
</script>


<div class="container mx-auto home-card my-10">
	<a href="/blog" class="btn variant-ghost-primary">
		<span><iconify-icon icon="akar-icons:arrow-back"></iconify-icon></span>
	</a>
	<div class="text-5xl ml-5 py-5">
		{data.title}
	</div>

	<div class="flex flex-row items-center justify-between flex-wrap py-4 px-6 border-b border-dashed border-gray-300">
		<time class="m-0 text-lg uppercase text-gray-600 font-red-hat-text transition-colors duration-500">
			{formattedDate}
		</time>
		<div class="view-original text-xs uppercase text-gray-600 font-red-hat-text transition-colors duration-500">
		  <div>Subject: <b class="text-white">{data.mainImage.alt}</b></div>
		</div>
	</div>
</div>
<div class="home-card py-5 my-5">
	<PortableText value={data.body} components={{
		listItem: {
				bullet: CustomDefaultListitem,
				number: CustomDefaultListitem,
				normal: CustomDefaultListitem //<-- Adding "normal" as key and defaultListItem as value will supress the warning
		},
		types: {
		// block-level components
			code: Code,
			image: ImageBlock,
		},
}} />
</div>