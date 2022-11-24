<script lang="ts">
    import { fly } from "svelte/transition";

    const duration = 250;

    export let url = "";
</script>

{#key url}
    <div
        in:fly={{ x: -5, y: 3, duration, delay: duration }}
        out:fly={{ x: 5, duration }}
        class="flex-1"
    >
        <slot />
    </div>
{/key}
