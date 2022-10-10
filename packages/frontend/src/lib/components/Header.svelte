<script>
    import UploadIcon from "svelte-icons/ti/TiUpload.svelte";
</script>

<div class="header navbar min-h-8 fixed">
    <div class="flex-1">
        <a href="/">
            <img src="/images/logo.png" width="120" alt="ytch8 logo" />
        </a>
        <div class="flex ml-3 flex-wrap h-full">
            <a class="small-btn btn-ghost" href="/">Browse Games</a>
            <a class="small-btn btn-ghost" href="/">
                <span class="w-4 h-4">
                    <UploadIcon />
                </span>
                Upload Game
            </a>
            <a class="small-btn btn-ghost" href="/">Game Jams</a>
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
        <a href="/login" class="small-btn btn-outline btn-primary">Login</a>
        <a href="/register" class="small-btn btn-outline btn-secondary">
            Register
        </a>
    </div>
</div>

<style>
    .header {
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .small-btn {
        @apply btn btn-sm;
    }
</style>
