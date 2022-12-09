<script lang="ts">
    import Button from "$components/core/Button.svelte";
    import { Carousel } from "flowbite-svelte";
    import { images } from "./+server.js";
    import { page } from "$app/stores";

    let name = $page.params.name;
    let username = $page.params.username;

    if (!username) {
        username = $page.data.user.username;
    }
</script>

<div class="my-5 mx-auto w-[944px] rounded border bg-white shadow xl:m-auto">
    <div class="border-b p-5 text-2xl font-bold">
        {name}
    </div>

    <div class="flex space-x-4 p-5">
        <div class="max-w-4xl flex-1">
            <Carousel {images} showIndicators={false} slideControls={false} />
        </div>
        <div class="flex max-w-[280px] flex-col space-y-2">
            <img
                src="https://images2.alphacoders.com/706/thumb-1920-706162.jpg"
                class=" rounded"
                alt="game cover"
            />
            <p class="text-sm">
                lorLorem ipsum dolor sit amet, qui minim labore adipisicing
                minim sint cillum sint consectetur cupidatat.
            </p>
            <div class="text-sm">
                <span class="font-bold">Release Date: </span> 29/11/2022
            </div>
            <div class="text-sm">
                <span class="font-bold">Developer: </span>
                {username}
            </div>
            <div class="text-sm">
                <span class="font-bold">Release Date: </span> 29/11/2022
            </div>
            <div class="text-sm">
                <span class="font-bold">Popular tag: </span> Adventure, Lmao
            </div>
            <Button class="w-full">Play game</Button>
        </div>
    </div>
</div>
