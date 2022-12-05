<script lang="ts">
    export let image: string;
    export let link: string;
    export let name: string;
    export let description: string;
    export let author: string;
</script>

<a class="relative aspect-[250/300] rounded shadow" href={link}>
    <img class="h-full w-full rounded shadow" src={image} alt="game cover" />
    <div
        class="absolute inset-0 flex flex-col justify-end gap-1 rounded bg-gradient-to-t from-black px-5 pb-4 shadow"
    >
        <a href={link} class="decoration-primary hover:underline">
            <div class="text-xl font-bold text-primary">
                {name}
            </div>
        </a>
        <div class="truncate text-sm text-white">{description}</div>
        <div class="text-end font-bold text-secondary">{author}</div>
    </div>
</a>
