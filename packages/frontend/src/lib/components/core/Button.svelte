<script lang="ts">
    import clx from "classnames";
    import type { SvelteComponent } from "svelte";

    export let icon: typeof SvelteComponent | undefined = undefined;
    export let outline = false;
</script>

<button
    class={clx("inline-flex justify-between", $$props.class)}
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
