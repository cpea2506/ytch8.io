<script lang="ts">
    import UploadIcon from "svelte-icons/ti/TiUpload.svelte";
</script>

<div class="h-12">
    <div
        class="navbar min-h-8 fixed bg-base-100 z-[100] shadow shadow-neutral-content"
    >
        <div class="flex-1">
            <a href="/">
                <img src="/images/logo.svg" alt="ytch8 logo" />
            </a>
            <div class="flex gap-2 ml-2 flex-wrap h-full">
                <a class="btn btn-sm btn-ghost" href="/">Browse Games</a>
                <a class="btn btn-sm btn-ghost" href="/game/new">
                    <span class="w-4 h-4">
                        <UploadIcon />
                    </span>
                    Upload Game
                </a>
                <a class="btn btn-sm btn-ghost" href="/">Game Jams</a>
            </div>
        </div>
        <div class="flex-none gap-2">
            <form class="form-control">
                <input
                    type="text"
                    placeholder="Search..."
                    class="input input-sm input-bordered focus:outline-none"
                />
            </form>
            <a href="/login" class="btn btn-sm btn-outline btn-primary">Login</a
            >
            <a href="/register" class="btn btn-sm btn-outline btn-secondary">
                Register
            </a>
        </div>
    </div>
</div>
