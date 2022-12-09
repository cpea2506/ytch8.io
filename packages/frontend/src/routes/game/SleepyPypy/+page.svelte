<script lang="ts">
    import Button from "$components/core/Button.svelte";
    import { Carousel } from "flowbite-svelte";
    import { images } from "./+server.js";
    import { page } from "$app/stores";

    let username = $page.params.username;

    if (!username) {
        username = "Khang Dui";
    }
</script>

<div class="my-5 mx-auto w-[944px] rounded border bg-white shadow xl:m-auto">
    <div class="border-b p-5 text-2xl font-bold">Sleepy Pypy</div>

    <div class="flex space-x-4 p-5">
        <div class="max-w-4xl flex-1">
            <Carousel
                {images}
                loop
                showIndicators={false}
                slideControls={false}
            />
        </div>
        <div class="flex max-w-[280px] flex-col justify-between space-y-2">
            <img
                src="/images/game_cover/sleepy.png"
                class=" rounded"
                alt="game cover"
            />
            <p class="text-sm">Protect your Artifact out of dangerous wolfs</p>
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
                <span class="font-bold">Popular tag: </span> Adventure, Action
            </div>
            <a href="/game/SleepyPypy/play" rel="external">
                <Button class="w-full">Play game</Button></a
            >
        </div>
    </div>
</div>
