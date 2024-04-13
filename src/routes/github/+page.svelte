<script lang="ts">
	export let data;
    import RepoItem from '$lib/components/RepoItem.svelte';
</script>

	<div class="py-10 my-6 home-card">
		<h2 class="font-medium text-4xl">Projects 🛠️</h2>
	</div>
 <div class="home-card">
	<div class="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-2">
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