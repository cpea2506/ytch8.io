<script lang="ts">
    import Header from "$components/Header.svelte";
    import "../app.scss";
</script>

<main class="flex flex-1 flex-col">
    <Header />
    <slot />
</main>
