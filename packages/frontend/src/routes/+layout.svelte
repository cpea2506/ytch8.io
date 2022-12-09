<script lang="ts">
    import "../app.scss";
    import Header from "$components/Header.svelte";
    import Footer from "$components/Footer.svelte";
    import PageTransition from "$components/core/PageTransition.svelte";
    import { page } from "$app/stores";

    let pathname = $page.url.pathname;
</script>

<main class="flex min-h-screen flex-col bg-white-100">
    <Header />
    <PageTransition>
        <slot />
    </PageTransition>
    {#if !pathname.endsWith("play")}
        <Footer />
    {/if}
</main>
