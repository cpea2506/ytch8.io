<script lang="ts">
    import { page } from "$app/stores";
    import Input from "$components/core/Input.svelte";
    import Button from "$components/core/Button.svelte";

    let user = $page.data.user;
</script>

<form method="post" class="px-20">
    <div class="relative mx-auto mb-6 w-[200px] space-y-2">
        <img
            class="h-[200px] w-[200px] rounded-full"
            src={user.image}
            alt="avatar"
        />
        <Button class="absolute bottom-0 rounded-lg bg-primary" id="avatar-edit"
            >Edit</Button
        >
    </div>
    <Input label="Username" labelClass="font-bold" value={user.username} />
    <Input disabled label="Email" labelClass="font-bold" value={user.email} />
    <Input
        label="New Password"
        labelClass="font-bold"
        value=""
        type="password"
    />
    <Button>Save me</Button>
</form>
