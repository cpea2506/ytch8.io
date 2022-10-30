<script>
    export let image;
    export let link;
    export let title;
    export let description;
    export let author;
</script>

<div class="rounded bg-white p-5 shadow">
    <a href={link}>
        <img
            src={image}
            class="aspect-[315/250] rounded shadow"
            alt="game cover"
        />
    </a>
    <div class="mt-3">
        <a href={link} class="decoration-primary hover:underline">
            <div class="mr-[6px] mb-[5px] font-bold text-primary">
                {title}
            </div>
        </a>
        <div class="mb-[5px] text-sm text-dim-200">{description}</div>
        <div class="mb-[5px] flex items-center text-sm">{author}</div>
    </div>
</div>
