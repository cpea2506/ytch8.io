<script lang="ts">
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
    import { Alert, Checkbox, Modal, Spinner } from "flowbite-svelte";
    import type { ActionData } from "./$types.js";
    import GoogleButton from "$components/core/GoogleButton.svelte";

    export let form: ActionData;
    let overlay = false;

    const onFocus = () => {
        if (form) {
            form.error = false;
        }
    };
</script>

<div class="my-5 mx-auto w-[944px] rounded border bg-white shadow xl:m-auto">
    <Modal bind:open={overlay} size="xs" permanent>
        <div class="space-y-2 text-center">
            <Spinner color="red" />
            <p>Prepare for the new world coming...</p>
        </div>
    </Modal>
    <div class="border-b p-5 text-2xl font-bold">
        Create account on Ytch<span class="text-primary">8.</span>io
    </div>

    <div class="flex">
        <div class="flex-1">
            <form class="p-5" method="post" action="?/register">
                {#if form?.error}
                    <Alert class="mb-6" color="red">{form?.message}</Alert>
                {/if}

                <Input
                    on:focus={onFocus}
                    label="Username"
                    name="username"
                    type="text"
                />
                <Input
                    on:focus={onFocus}
                    label="Password"
                    name="password"
                    type="password"
                />
                <Input
                    on:focus={onFocus}
                    label="Confirm Password"
                    name="confirm-password"
                    type="password"
                />
                <Input
                    on:focus={onFocus}
                    label="Email"
                    type="email"
                    name="email"
                />

                <label class="mb-5 flex items-center" for="checkbox">
                    <Checkbox on:focus={onFocus}>
                        I accept the
                        <a
                            href="/register"
                            class="ml-1 text-primary hover:underline"
                            >Term of Service</a
                        >.
                    </Checkbox>
                </label>
                <div class="flex items-center">
                    <Button>Create account</Button>
                    <span class="ml-2 text-sm text-dim-200">
                        or already had an account?
                        <a
                            href="/login"
                            class="mx-1 font-semibold text-black underline"
                            >Login</a
                        >
                    </span>
                </div>
            </form>
            <form class="border-t p-5" action="?/loginWithGithub" method="post">
                <h2 class="mb-3 font-semibold">Or log in with another site</h2>
                <div class="flex space-x-2">
                    <Button outline on:click={() => (overlay = true)}>
                        <div slot="icon" class="h-6 w-6">
                            <DiGithubBadge />
                        </div>
                        Log in with GitHub
                    </Button>
                    <GoogleButton
                        bind:isLoading={overlay}
                        on:click={() => (overlay = true)}
                    />
                </div>
            </form>
        </div>
        <div class="flex flex-1 flex-col gap-5 border-l p-5">
            <div class="text-xl font-bold">
                Who should register on Ytch<span class="text-primary">8.</span
                >io
            </div>
            <div class="font-bold">I want to play games!</div>
            <div class="text-sm">
                Although registration isn’t required, creating an account will
                give you the ability to create collections of your favorites.
            </div>
            <div class="font-bold">I’m a developer/creator!</div>
            <div class="text-sm">
                This’ve been designed for creative types of all kinds to quickly
                distribute their work easily as possible.
            </div>
        </div>
    </div>
</div>
