<script lang="ts">
    export let image: string;
    export let link: string;
    export let name: string;
    export let description: string | null = null;
    export let author: string | null = null;
</script>

<a
    class="relative h-[250px] flex-1 rounded border border-white bg-white shadow"
    href={link}
>
    <img class="h-full w-full rounded shadow" src={image} alt="game cover" />
    <div
        class="absolute inset-0 flex flex-col justify-end gap-1 rounded bg-gradient-to-t from-black px-5 pb-4 shadow"
    >
        <a href={link} class="decoration-primary hover:underline">
            <div class="font-bold text-primary">
                {name}
            </div>
        </a>
        {#if description}
            <div class="truncate text-sm text-white">{description}</div>
        {/if}
        {#if author}
            <div class="text-end font-bold text-secondary">{author}</div>
        {/if}
    </div>
</a>
