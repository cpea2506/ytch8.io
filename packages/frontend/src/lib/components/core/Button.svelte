<script lang="ts">
    import clx from "classnames";

    export let outline = false;
</script>

<button
    class={clx("inline-flex justify-between", $$props.class)}
    class:btn-outline={outline}
    class:btn={!outline}
    on:click
    {...$$restProps}
>
    <slot name="icon" />
    <slot />
</button>
