<script lang="ts">
    import { Tabs, TabItem } from "flowbite-svelte";
</script>

<div class="my-5 mx-auto w-[944px] rounded border bg-white shadow xl:m-auto">
    <Tabs
        style="full"
        defaultClass="flex rounded-lg divide-x divide-gray-200 shadow dark:divide-gray-700"
    >
        <TabItem class="w-full" open>
            <span slot="title">Profile</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Profile:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Dashboard</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Dashboard:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Settings</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Settings:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
        <TabItem class="w-full">
            <span slot="title">Users</span>
            <p class="text-sm text-gray-500 dark:text-gray-400">
                <b>Users:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
            </p>
        </TabItem>
    </Tabs>
</div>
