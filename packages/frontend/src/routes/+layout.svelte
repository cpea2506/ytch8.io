<script lang="ts">
    import Header from "$components/Header.svelte";
    import "../app.scss";
</script>

<main class="flex min-h-screen flex-col bg-white-100">
    <Header />
    <slot />
</main>
