<script lang="ts">
    import { page } from "$app/stores";
    import Header from "$components/Header.svelte";
</script>

<div class="mx-0 my-4 flex items-center">
    <span class="relative top-[-0.05rem] text-5xl font-extralight">500</span>
    <div
        class="mb-4 flex min-h-[2.5rem] items-center border-l border-slate-300 pb-4"
    >
        <h1>
            {$page.error?.message}
        </h1>
    </div>
</div>
