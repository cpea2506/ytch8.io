<script lang="ts">
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
    import Alert from "$components/core/Alert.svelte";
    import type { ActionData } from "./$types.js";
    import { enhance } from "$app/forms";

    export let form: ActionData;

    const onFocus = () => {
        if (form) {
            form.error = false;
        }
    };
</script>

<form class="my-10 mx-auto w-[462px] rounded border bg-white shadow">
    <div class="border-b p-5 text-2xl font-bold">
        Log into your Ytch<span class="text-primary">8.</span>io account
    </div>

    <form class="p-5" method="post" use:enhance>
        {#if form?.error}
            <Alert type="error">
                {form?.message}
            </Alert>
        {/if}
        <Input
            on:focus={onFocus}
            type="email"
            label="Email"
            name="email"
            required
        />
        <Input
            on:focus={onFocus}
            label="Password"
            type="password"
            name="password"
            required
        />
        <div class="flex items-center">
            <Button>Log in</Button>
            <span class="ml-2 text-sm text-dim-200">
                or
                <a
                    href="/register"
                    class="mx-1 font-semibold text-black underline"
                    >Create account</a
                >
                ·
                <a
                    href="/register"
                    class="mx-1 font-semibold text-black underline"
                    >Forgot password</a
                >
            </span>
        </div>
    </form>

    <div class="border-t p-5">
        <h2 class="mb-3 font-semibold">Or log in with another site</h2>
        <Button icon={DiGithubBadge} outline>Log in with GitHub</Button>
    </div>
</form>
