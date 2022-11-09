<script>
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
</script>

<form class="my-5 mx-auto w-[944px] rounded border bg-white shadow xl:m-auto">
    <div class="border-b p-5 text-2xl font-bold">
        Create account on Ytch<span class="text-primary">8.</span>io
    </div>

    <div class="flex">
        <div class="flex-1">
            <div class="p-5">
                <Input label="Username" class="w-full" required />
                <Input
                    label="Password"
                    class="w-full"
                    type="password"
                    required
                />
                <Input
                    label="Confirm Password"
                    class="w-full"
                    type="password"
                    required
                />
                <Input label="Email" class="w-full" required />
                <label class="mb-5 flex items-center" for="checkbox">
                    <input id="checkbox" type="checkbox" required />
                    <span class="ml-2 text-sm"
                        >I accept the <a
                            href="/login"
                            class="text-primary underline">Term of Service</a
                        ></span
                    >
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
            </div>
            <div class="border-t p-5">
                <h2 class="mb-3 font-semibold">Or log in with another site</h2>
                <Button icon={DiGithubBadge} outline>Log in with GitHub</Button>
            </div>
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
</form>
