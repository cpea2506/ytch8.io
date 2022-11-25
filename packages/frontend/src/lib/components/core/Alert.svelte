<script lang="ts">
    export let type: "error" | "warning" | "info" | "success" = "success";

    let background: string;

    switch (type) {
        case "error":
            background = "bg-red-100 text-red-700";
            break;
        case "warning":
            background = "bg-yellow-100 text-yellow-700";
            break;
        case "info":
            background = "bg-blue-100 text-blue-700";
            break;
        default:
            background = "bg-green-100 text-green-700";
    }
</script>

<div class="mb-4 rounded-lg p-4 text-sm {background}" role="alert">
    <slot />
</div>
