<script lang="ts">
    import { Motion } from 'svelte-motion'
    export let name: string;
    export let description: string;
    export let stars: string;
    export let forks: string;
    export let language: string;

    const Languages = {
        TypeScript: "#2b7489",
        Python: "#3572A5",
        JavaScript: "#f7df1e",
        HTML: "#FF5733",
        null: "#f7df1e"
    };
    $: languageStyle = `background-color: ${Languages[language]}; border: solid 3px ${Languages[language]}`;
</script>

<a href={`https://github.com/sa-met/${name}`} rel="noreferrer" target="_blank">
    <div class="flex flex-col h-36 p-4 bg-white/10 dark:bg-black/10 rounded-md border border-slate-400 hover:border-slate-700 dark:border-slate-800 dark:hover:border-slate-600 transition-colors duration-75 cursor-pointer">
        <h1 class="font-semibold mb-1">{name}</h1>
        <p class="text-sm text-gray-800/70 dark:text-gray-100/70">{description}</p>
        <div class="mt-auto flex flex-row gap-4 text-gray-700 dark:text-gray-300 text-sm">
            <p class="flex flex-row items-center">
                <Motion initial="hidden" animate="show" variants={{ hidden: { translateY: 200 }, show: { translateY: 0 } }} let:motion>
                    <div use:motion  class="w-5 h-5 rounded-full mr-1" style={languageStyle}></div> 
                  </Motion>
                {language}
            </p>

            <p class="flex flex-row items-center justify-center">
                <iconify-icon class="text-xl" icon="material-symbols:star"></iconify-icon>
                {stars}
            </p>
            <p class="flex flex-row items-center justify-center">
                <iconify-icon class="text-xl" icon="octicon:repo-forked-16"></iconify-icon>
               {forks}
            </p>
        </div>
    </div>
</a>
