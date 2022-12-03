<script lang="ts">
    import { Label, Input } from "flowbite-svelte";

    export let label: string;

    let placeholder = "";

    switch ($$props.type) {
        case "password":
            placeholder = "•••••••••";
            break;
        case "email":
            placeholder = "Johnu@example.com";
            break;
        default:
            placeholder = "Try something";
    }
</script>

<Label class="mb-6 space-y-2" for={label}>
    <span>{label}</span>
    <Input on:focus required id={label} {placeholder} {...$$restProps} />
</Label>
