<script lang="ts">
    import Counter from "$components/Counter.svelte";
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-col justify-center items-center flex-1">
    <h1 class="w-full">
        <span class="block relative w-full h-0 welcome">
            <picture>
                <source srcset="svelte-welcome.webp" type="image/webp" />
                <img
                    class="absolute w-full h-full top-0 block"
                    src="svelte-welcome.png"
                    alt="Welcome"
                />
            </picture>
        </span>
    </h1>

    <Counter />
</section>

<style lang="scss">
    .welcome {
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }
</style>
