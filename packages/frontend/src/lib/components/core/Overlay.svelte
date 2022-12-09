<script lang="ts">
    import { Spinner } from "flowbite-svelte";

    export let overlay = false;
</script>

<div class="relative">
    <slot />
    {#if overlay}
        <div
            class="flex-center absolute inset-0 rounded bg-black bg-opacity-50 shadow shadow-primary"
        >
            <Spinner size="14" color="red" />
        </div>
    {/if}
</div>
