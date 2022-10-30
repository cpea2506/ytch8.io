<script lang="ts">
    import type { SvelteComponent } from "svelte";

    export let icon: typeof SvelteComponent | undefined = undefined;
    export let outline = false;

    let extraClass = "";
    export { extraClass as class };

    $: if (extraClass.length > 0) {
        // add space before to distinguish from other classes
        extraClass = ` ${extraClass}`;
    }
</script>

<button
    class={extraClass}
    class:btn-outline={outline}
    class:btn={!outline}
    on:click
    {...$$restProps}
>
    {#if icon}
        <div class="h-6 w-6">
            <svelte:component this={icon} />
        </div>
    {/if}
    <slot />
</button>
