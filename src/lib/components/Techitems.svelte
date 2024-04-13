<script lang="ts">
    import { popup } from '@skeletonlabs/skeleton';
    import type { PopupSettings } from '@skeletonlabs/skeleton';
    export let title: string;
    export let icon: string;

    const popupHover: PopupSettings = {
	event: 'hover',
	target: title,
	placement: 'top'
};
</script>

<div class="flex md:p-2 md:ml-3 ml-3">
    <div class="" use:popup={popupHover}>
        <span><iconify-icon icon="{icon}" class="text-2xl md:text-4xl"></iconify-icon></span>
    </div>

    <div class="card p-2 variant-glass-surface text-white" color="color: white;" data-popup={title}>
        {title}
    </div>
</div>