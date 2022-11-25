<script lang="ts">
    import { page } from "$app/stores";

    export let image =
        "https://www.freepnglogos.com/uploads/discord-logo-png/discord-icon-all-the-cool-kids-are-moving-discord-podfeet-podcasts-0.png";

    $: user = $page.data.user;
</script>

<button
    id="dropdownAvatarNameButton"
    data-dropdown-toggle="dropdownAvatarName"
    class="flex items-center rounded-full text-sm font-medium text-gray-900 hover:text-blue-600 focus:ring-4 focus:ring-gray-100 md:mr-0"
>
    <span class="sr-only">Open user menu</span>
    <img class="mr-2 h-8 w-8 rounded-full" src={image} alt="user avatar" />
    {user.username}
    <svg
        class="mx-1.5 h-4 w-4"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
        /></svg
    >
</button>

<!-- Dropdown menu -->
<div
    id="dropdownAvatarName"
    class="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow"
>
    <div class="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div class="font-medium ">Pro User</div>
        <div class="truncate">{user.email}</div>
    </div>
    <ul
        class="py-1 text-sm text-gray-700"
        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
    >
        <li>
            <a href="/" class="block py-2 px-4 hover:bg-gray-100">My games</a>
        </li>
        <li>
            <a href="/" class="block py-2 px-4 hover:bg-gray-100">Profile</a>
        </li>
    </ul>
    <form class="py-1" action="/logout">
        <button class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
            >Log out</button
        >
    </form>
</div>
