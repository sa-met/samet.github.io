<script lang="ts">
    export let title: string;
    export let description: string;
    export let slug: string;
    export let image: string;
    export let date: string;
    export let tag: string;

    const dates = new Date(date);
    const formattedDate = dates.toLocaleDateString('tr-TR', { year: 'numeric', month: '2-digit', day: '2-digit' });
    
    function sort(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + "...";
		} else {
			return text;
		}
	}
</script>

<a href={`/blog/${slug}`}>
    <div class="flex flex-col p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
     <div class="mx-auto p-2">
        <img
        class="w-50 rounded-md"
        src={image}
        alt="Cover image for {title}"/>
       </div>
            <h1 class="font-semibold mt-2 mb-1">{title}</h1>
            <p class="text-sm text-gray-800/70 dark:text-gray-100/70">{sort(description+"...")}</p>
            <div class="flex gap-5 mt-5">
                <div class="home-card w-auto h-full">
                    <b>#</b>{tag}
                 </div>
            </div>
            <div class="mt-auto text-right text-gray-400 text-sm">
                {formattedDate}
            </div>    
    </div>
</a>
