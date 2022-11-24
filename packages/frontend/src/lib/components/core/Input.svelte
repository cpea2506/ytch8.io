<script lang="ts">
    export let label: string;
    const { placeholder = "Type here", type = "text" } = $$restProps;

    let extraClass = "";
    export { extraClass as class };

    if (extraClass.length > 0) {
        extraClass = `${extraClass} `;
    }
</script>

<div class="mb-5">
    <label for={label}>
        <div class="text-sm font-semibold">{label}</div>
        <input
            on:focus
            id={label}
            {type}
            {placeholder}
            class="{extraClass}input w-full focus:border-blue-500 focus:ring-blue-500"
            {...$$restProps}
        />
    </label>
</div>
