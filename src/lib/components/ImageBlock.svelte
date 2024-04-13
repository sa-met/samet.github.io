<script lang="ts">
	import type { PortableTextBlock } from '@sanity/types';
  import SanityImage from './SanityImage.svelte'

  export let portableText: any
  $: ({value} = portableText) 
</script>

{#if value.asset}
  <figure>
    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}
  </figure>
{/if}