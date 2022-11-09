<script>
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
</script>

<form class="m-auto w-[462px] rounded border bg-white shadow">
    <div class="border-b p-5 text-2xl font-bold">
        Log into your Ytch<span class="text-primary">8.</span>io account
    </div>

    <div class="p-5">
        <Input label="Username or email" class="w-full" required />
        <Input label="Password" class="w-full" type="password" required />
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
    </div>

    <div class="border-t p-5">
        <h2 class="mb-3 font-semibold">Or log in with another site</h2>
        <Button icon={DiGithubBadge} outline>Log in with GitHub</Button>
    </div>
</form>
