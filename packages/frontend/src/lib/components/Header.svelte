<script>
    import UploadIcon from "svelte-icons/ti/TiUpload.svelte";
</script>

<div class="flex h-14 items-center bg-white px-5 shadow">
    <div class="flex flex-1">
        <a href="/" class="flex items-center">
            <img src="/images/logo.svg" alt="ytch8 logo" />
        </a>
        <div class="ml-2 flex">
            <a class="header-btn" href="/">Browse Games</a>
            <a class="header-btn" href="/game/new">
                <span class="h-4 w-4">
                    <UploadIcon />
                </span>
                Upload Game
            </a>
            <a class="header-btn" href="/">Game Jams</a>
        </div>
    </div>
    <div class="flex items-center gap-2">
        <form>
            <input
                type="text"
                placeholder="Search..."
                class="input p-1.5 text-sm"
            />
        </form>
        <a href="/login" class="btn-outline">Login</a>
        <a href="/register" class="btn-outline btn-secondary"> Register </a>
    </div>
</div>

<style lang="scss">
    .header-btn {
        @apply flex h-full items-center font-bold;

        margin: 0 10px;
        padding: 5px 0;
        border-top: 4px solid transparent;
        border-bottom: 4px solid transparent;

        &:hover {
            border-bottom: 4px solid #ff2449;
        }
    }
</style>
