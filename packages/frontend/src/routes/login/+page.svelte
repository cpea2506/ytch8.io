<script lang="ts">
    import type { ActionData } from "./$types.js";
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
    import { Alert, Modal, Spinner } from "flowbite-svelte";
    import GoogleButton from "$components/core/GoogleButton.svelte";

    export let form: ActionData;
    let overlay = false;

    const onFocus = () => {
        if (form) {
            form.error = false;
        }
    };
</script>

<svelte:head>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<form class="my-10 mx-auto w-[462px] rounded border bg-white shadow">
    <Modal bind:open={overlay} size="xs" permanent>
        <div class="space-y-2 text-center">
            <Spinner color="red" />
            <p>Prepare for the new world coming...</p>
        </div>
    </Modal>
    <div class="border-b p-5 text-2xl font-bold">
        Log into your Ytch<span class="text-primary">8.</span>io account
    </div>

    <form class="p-5" action="?/login" method="post">
        {#if form?.error}
            <Alert class="mb-6" color="red">{form?.message}</Alert>
        {/if}
        <Input on:focus={onFocus} label="Email" type="email" name="email" />
        <Input
            on:focus={onFocus}
            label="Password"
            type="password"
            name="password"
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
        <h2 class="mb-3 flex items-center font-semibold">
            Or log in with another site
        </h2>
        <div class="flex space-x-2">
            <form action="?/loginWithGithub" method="post">
                <Button
                    on:click={() => (overlay = true)}
                    outline
                    formaction="?/loginWithGithub"
                >
                    <div slot="icon" class="h-6 w-6">
                        <DiGithubBadge />
                    </div>
                    Log in with GitHub
                </Button>
            </form>
            <GoogleButton
                on:click={() => (overlay = true)}
                bind:isLoading={overlay}
            />
        </div>
    </div>
</form>
