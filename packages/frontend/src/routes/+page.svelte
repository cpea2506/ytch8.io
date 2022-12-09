<script lang="ts">
    import Game from "$components/Game.svelte";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay } from "swiper";
    import {
        game_bg_images,
        genre_images,
        allGames,
        top_games,
    } from "./+server.js";
    import { fade } from "svelte/transition";
    import "swiper/css/bundle";

    let currentGenres = "Action";
</script>

<div>
    <div class="relative h-[calc(100vh-55px)]">
        <Swiper modules={[Autoplay]} autoplay loop>
            {#each game_bg_images as bg_image}
                <SwiperSlide>
                    <img class="w-full" src={bg_image} alt="game cover" />
                </SwiperSlide>
            {/each}
        </Swiper>
        <div
            class="absolute inset-0 z-10 bg-gradient-to-b from-white-100 via-transparent to-black"
        />
        <div class="absolute top-10 left-1/2 z-20 -translate-x-1/2">
            <img src="/images/logo.svg" class="w-[310px]" alt="ytch8 logo" />
        </div>
        <div class="absolute top-32 left-1/2 z-20 -translate-x-1/2">
            <div>
                <span class="mr-[2px] text-xl font-medium text-primary">Y</span
                >outh -
                <span class="mr-[2px] text-xl font-medium text-primary">T</span
                >alented -
                <span class="mr-[2px] text-xl font-medium text-primary">C</span
                >ompetitive -
                <span class="mr-[2px] text-xl font-medium text-primary">H</span
                >ard working
            </div>
        </div>
        <div class="absolute bottom-0 z-20 w-full space-y-4 py-5 px-8">
            <span class="text-2xl font-bold text-white">Recomendation</span>
            <div class="flex space-x-10">
                {#each top_games as { name, image, link }}
                    <Game {name} {image} {link} />
                {/each}
            </div>
        </div>
    </div>
</div>
<div class="flex h-screen" id="category">
    <div
        class="flex flex-[0.5] flex-col justify-evenly space-y-4 bg-[#282c34] p-4"
    >
        <a
            class="flex-center h-32 rounded bg-[#e06c75] text-3xl font-bold text-white"
            on:mouseover={() => (currentGenres = "Action")}
            on:focus={() => (currentGenres = "Action")}
            href="/"
        >
            Action
        </a>
        <a
            class="flex-center h-32 rounded bg-[#e5c07b] text-3xl font-bold text-white"
            on:mouseover={() => (currentGenres = "Adventure")}
            on:focus={() => (currentGenres = "Adventure")}
            href="/"
        >
            Adventure
        </a>
        <a
            class="flex-center h-32 rounded bg-[#98c379] text-3xl font-bold text-white"
            on:mouseover={() => (currentGenres = "Platformer")}
            on:focus={() => (currentGenres = "Platformer")}
            href="/"
        >
            Platformer
        </a>
        <a
            class="flex-center h-32 rounded bg-[#61afef] text-3xl font-bold text-white"
            on:mouseover={() => (currentGenres = "Fighting")}
            on:focus={() => (currentGenres = "Fighting")}
            href="/"
        >
            Fighting
        </a>
    </div>
    <div
        class="grid flex-1 grid-cols-5 space-x-2 space-y-2 overflow-auto"
        transition:fade
    >
        {#each genre_images as genre}
            {#if genre == currentGenres}
                <img src={genre} alt="genre" />
            {/if}
            {#each allGames as { name, genre, image, link }}
                {#if genre.includes(currentGenres)}
                    <Game {name} {image} {link} />
                {/if}
            {/each}
        {/each}
    </div>
</div>
