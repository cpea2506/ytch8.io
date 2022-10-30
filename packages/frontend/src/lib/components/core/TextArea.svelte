<script lang="ts">
    export let label: string;
    export let placeholder = "Type here";
</script>

<div class="mb-6">
    <label for={label}>
        <div class="font-bold">{label}</div>
        <textarea id={label} {placeholder} class="input h-52 w-[524px]" />
    </label>
</div>
