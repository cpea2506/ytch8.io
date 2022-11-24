<script lang="ts">
    import "../app.scss";
    import Header from "$components/Header.svelte";
    import type { LayoutData } from "./$types.js";
    import PageTransition from "$components/PageTransition.svelte";

    export const trailingSlash = "always";
    export let data: LayoutData;
</script>

<main class="flex min-h-screen flex-col bg-white-100">
    <Header />
    <PageTransition url={data.currentRoute}>
        <slot />
    </PageTransition>
</main>
