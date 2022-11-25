<script lang="ts">
    import "../app.scss";
    import Header from "$components/Header.svelte";
    import PageTransition from "$components/PageTransition.svelte";

    export const trailingSlash = "always";
</script>

<main class="flex min-h-screen flex-col bg-white-100">
    <Header />
    <PageTransition>
        <slot />
    </PageTransition>
</main>
