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
            <div class="relative">
                <div
                    class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2"
                >
                    <svg
                        aria-hidden="true"
                        class="h-4 w-4 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        /></svg
                    >
                </div>
                <input
                    type="search"
                    id="search"
                    class="input block w-full rounded pl-8 text-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Search"
                    required
                />
            </div>
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
