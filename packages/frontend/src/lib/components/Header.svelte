<script>
    import UploadIcon from "svelte-icons/ti/TiUpload.svelte";
    import { page } from "$app/stores";

    $: currentUrl = $page.url.pathname;
</script>

<div class="flex bg-white px-5 shadow">
    <div class="flex flex-1 gap-1">
        <a href="/" class="my-auto">
            <img src="/images/logo.svg" alt="ytch8 logo" />
        </a>
        <a class="header-btn" class:active={currentUrl == "/"} href="/"
            >Browse Games</a
        >
        <a
            class="header-btn"
            class:active={currentUrl == "/game/new/"}
            href="/game/new"
        >
            <span class="h-4 w-4">
                <UploadIcon />
            </span>
            Upload Game
        </a>
    </div>
    <div class="flex items-center gap-2">
        <form>
            <input type="text" placeholder="Search..." class="input text-sm" />
        </form>
        <a href="/login" class="btn-outline">Login</a>
        <a href="/register" class="btn-outline btn-secondary"> Register </a>
    </div>
</div>

<style lang="scss">
    .header-btn {
        @apply mx-2 flex h-full items-center font-bold;
        @apply border-t-4 border-t-transparent;
        @apply border-b-4 border-b-transparent;

        &:hover {
            @apply border-b-4 border-b-primary;
        }
    }

    .active {
        @apply border-b-4 border-b-primary;
    }
</style>
