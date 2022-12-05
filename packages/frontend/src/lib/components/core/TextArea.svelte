<script lang="ts">
    import { Label, Textarea } from "flowbite-svelte";

    export let label: string;
    export let placeholder = "Type here";
</script>

<Label for={label} class="mb-6 space-y-2">
    <span class="font-bold">{label}</span>
    <Textarea id={label} {placeholder} class="h-52 w-[524px]" />
</Label>
