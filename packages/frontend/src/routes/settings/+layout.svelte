<script lang="ts">
    import { Tabs, TabItem } from "flowbite-svelte";
</script>

<div class="my-5 mx-auto w-[944px] rounded border bg-white p-5 shadow">
    <Tabs
        activeClasses="p-4 w-full group-first:rounded-tl group-last:rounded-tr text-primary bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none"
        inactiveClasses="p-4 w-full group-first:rounded-tl group-last:rounded-tr text-gray-500 hover:text-gray-600 hover:bg-gray-50"
        style="none"
        defaultClass="flex divide-x divide-gray-200 shadow dark:divide-gray-700"
    >
        <TabItem class="w-full" open>
            <span slot="title">Profile</span>
            <slot />
        </TabItem>
    </Tabs>
</div>
