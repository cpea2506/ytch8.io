<script lang="ts">
    export let label: string;
    const { placeholder = "Type here" } = $$restProps;

    let extraClass = "";
    export { extraClass as class };

    $: if (extraClass.length > 0) {
        extraClass = ` ${extraClass}`;
    }
</script>

<div class="mb-6">
    <label for={label}>
        <div class="font-semibold">{label}</div>
        <input
            id={label}
            {placeholder}
            class="input{extraClass}"
            {...$$restProps}
        />
    </label>
</div>
