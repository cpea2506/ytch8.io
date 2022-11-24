<script lang="ts">
    export let image: string;
    export let href: string;
    export let title: string;
    export let description: string;
    export let author: string;
</script>

<a class="rounded bg-white p-5 shadow" {href}>
    <img src={image} class="aspect-[250/250] rounded shadow" alt="game cover" />
    <div class="top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-black">
        <a {href} class="decoration-primary hover:underline">
            <div class="mr-[6px] mb-[5px] font-bold text-primary">
                {title}
            </div>
        </a>
        <div class="mb-[5px] text-sm text-dim-200">{description}</div>
        <div class="mb-[5px] flex items-center text-sm">{author}</div>
    </div>
</a>
