<script lang="ts">
    import Game from "$components/Game.svelte";
    import { page } from "$app/stores";

    let user = $page.data.user;
</script>

<div class="mx-auto mt-10 max-w-[960px]">
    <span class="text-3xl font-bold">
        {user.username}
    </span>

    <div
        class="my-8 mx-auto grid max-w-[960px] grid-cols-3 gap-y-[25px] gap-x-[10px]"
    >
        <Game
            author="Tuong Student"
            name="One minute Bandit"
            description="Stop bandits to save the good guy"
            image="https://img.itch.zone/aW1nLzk2NzY4NzkucG5n/315x250%23c/3W6HUa.png"
            link="https://tuong-student.itch.io/one-minute-bandit"
        />
        <Game
            author="Tuong Student"
            name="Lil Knight"
            description="Here come the hero"
            image="https://img.itch.zone/aW1nLzEwMzMzMzk3LnBuZw==/315x250%23c/%2B6S3VS.png"
            link="https://tuong-student.itch.io/the-little-knight"
        />
        <Game
            author="KhangDui"
            description="Run out of your nightmare"
            name="Monster Chase"
            image="https://img.itch.zone/aW1nLzEwMzMyMDM5LnBuZw==/315x250%23c/f7Gz%2FI.png"
            link="https://khangdui.itch.io/monster-chase"
        />
        <Game
            author="KhangDui"
            description="Protect your fruit from starving wolfs"
            name="Artifact"
            image="https://img.itch.zone/aW1nLzEwMzMxOTgxLnBuZw==/315x250%23c/16uGy5.png"
            link="https://khangdui.itch.io/artifact"
        />
        <Game
            author="KhangDui"
            description="An adventure to go back home from hell"
            name="Sleepy Pypy"
            image="https://img.itch.zone/aW1nLzEwMzMxODkzLnBuZw==/315x250%23c/1bLQhL.png"
            link="https://khangdui.itch.io/sleepy-pypy"
        />
        <Game
            author="Thanh Tuong"
            description="An adventure to go back home from hell"
            name="Cube jump"
            image="https://img.itch.zone/aW1nLzEwMzMwMDQ5LnBuZw==/315x250%23c/w7sNFl.png"
            link="https://tuong-student.itch.io/cube-jump"
        />
    </div>
</div>
