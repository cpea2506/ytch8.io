<script lang="ts">
    import UploadIcon from "svelte-icons/ti/TiUpload.svelte";
    import FaAngleDown from "svelte-icons/fa/FaAngleDown.svelte";
    import { Dropdown, DropdownItem, Avatar, NavBrand } from "flowbite-svelte";
    import { page } from "$app/stores";

    $: currentUrl = $page.url.pathname;
    $: user = $page.data.user;
</script>

<div class="z-20 flex bg-white px-5 shadow">
    <div class="flex flex-1 space-x-4">
        <NavBrand href="/">
            <img src="/images/logo.svg" alt="ytch8 logo" />
        </NavBrand>
        <a class="header-btn" class:active={currentUrl == "/"} href="/"
            >Browse Games</a
        >
        <a
            class="header-btn"
            class:active={currentUrl == "/game/new"}
            href="/game/new"
        >
            <span class="h-4 w-4">
                <UploadIcon />
            </span>
            Upload Game
        </a>
        <a class="header-btn" href="/#category">Category</a>
        <a class="header-btn" href="/#new-arrival">New Arrival</a>
        <a class="header-btn" href="/about">About us</a>
    </div>
    {#if user}
        <div class="my-2 flex cursor-pointer items-center" id="user-menu">
            <Avatar src={user.image} class="mr-2 h-8 w-8" alt="user avatar" />
            {user.username}
            <div class="ml-2 h-4 w-4">
                <FaAngleDown />
            </div>
            <Dropdown frameClass="max-w-[200px]" triggeredBy="#user-menu">
                <DropdownItem slot="header">
                    <div class="font-bold">Pro User</div>
                    <div class="truncate">{user.email}</div>
                </DropdownItem>
                <DropdownItem href="/game">My games</DropdownItem>
                <DropdownItem href="/settings/profile">Settings</DropdownItem>
                <DropdownItem
                    slot="footer"
                    data-sveltekit-reload=""
                    href="/logout"
                    ><span class="text-primary">Logout</span></DropdownItem
                >
            </Dropdown>
        </div>
    {:else}
        <div class="my-2 space-x-1">
            <a href="/login" class="btn-outline">Login</a>
            <a href="/register" class="btn-outline btn-secondary"> Register </a>
        </div>
    {/if}
</div>

<style lang="scss">
    .header-btn {
        @apply flex h-full items-center font-bold;
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
