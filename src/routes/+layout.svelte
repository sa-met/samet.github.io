<script lang="ts">
	import '../app.postcss';
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';
	import { TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
    import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { faUser, faHouse, faGears, faGear } from '@fortawesome/free-solid-svg-icons';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import DarkMode  from "../lib/darkmode.svelte";
	import 'iconify-icon'
	hljs.registerLanguage('xml', xml); 
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
    storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const popupClick: PopupSettings = {
		event: 'click',
		target: 'version',
		placement: 'top'
	};

 </script>

<div class="bg-gradient-to-br variant-soft-surface variant-soft-surface mx-auto rounded-full h-51 my-2 w-[19rem]">
    <TabGroup
        justify="justify-center"
        active="bg-gradient-to-br variant-glass-primary variant-glass-primary"
        hover="hover:variant-glass-primary"
        flex="flex-2 lg:flex-none"
        rounded="rounded-lg"
        border=""
        class="p-1 child:p-2"
        regionList="space-x-2"
    >
		<TabAnchor href="/" selected={$page.url.pathname === '/'}>
			<FontAwesomeIcon icon={faHouse} class="mt-1"/>
		</TabAnchor>

        <TabAnchor href="/github" selected={$page.url.pathname === '/github'}>
			<iconify-icon icon="mingcute:github-fill" class="text-xl mt-1"></iconify-icon>        </TabAnchor>

        <TabAnchor href="/blog" selected={$page.url.pathname === '/blog'}>
			<iconify-icon icon="fluent-mdl2:blog" class="text-xl mt-1"></iconify-icon>        </TabAnchor>

		<TabAnchor>
			<div use:popup={popupClick}>
				 <FontAwesomeIcon icon={faGear}  />
			</div>
		 </TabAnchor>
        
    </TabGroup>
</div>
<div class="card p-3 w-48 shadow-xl variant-glass-primary" data-popup="version">
	<nav class="list-nav">
		<ul>
			<li>
				<div class="flex">
					<span>Dark/Light</span>
					<span class="w-6 ml-10"><DarkMode /></span>
				</div>
			</li>
		</ul>
	</nav>
</div>
<div class="h-full w-full md:w-[50rem] mx-auto">
    <slot />
</div>
