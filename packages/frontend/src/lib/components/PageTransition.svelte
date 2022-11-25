<script lang="ts">
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";

    const duration = 250;

    $: currentUrl = $page.url.pathname;
</script>

{#key currentUrl}
    <div
        in:fly={{ x: -5, y: 3, duration, delay: duration }}
        out:fly={{ x: 5, duration }}
        class="flex-1"
    >
        <slot />
    </div>
{/key}
