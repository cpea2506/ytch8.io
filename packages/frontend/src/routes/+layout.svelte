<script lang="ts">
    import Header from "$components/Header.svelte";
    import "../app.scss";
</script>

<main class="flex flex-col bg-[#f4f4f4]">
    <Header />
    <slot />
</main>
