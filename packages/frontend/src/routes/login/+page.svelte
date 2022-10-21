<script>
    import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
</script>

<div class="flex-center h-[calc(100vh-50px)]">
    <form class="w-[500px] rounded border bg-white">
        <div class="max-h-20 border-b p-8">
            <h1 class="text-xl font-bold">
                Log into your <span class="font-medium"
                    >ytch<span class="text-[#ff2e51]">8.</span>io</span
                >
                account
            </h1>
        </div>

        <div class="p-8">
            <div class="mb-4">
                <Input label="Username or email" class="w-full" require />
            </div>
            <div class="mb-4">
                <Input
                    label="Password"
                    class="w-full"
                    type="password"
                    require
                />
            </div>
            <div class="flex items-center border-b">
                <div class="mb-4">
                    <Button>Log in</Button>
                    <span class="ml-2 text-[#858585]">
                        or
                        <a
                            href="/login"
                            class="mx-1 font-semibold text-black underline"
                            >Create account</a
                        >
                        ·
                        <a
                            href="/login"
                            class="mx-1 font-semibold text-black underline"
                            >Forgot password</a
                        >
                    </span>
                </div>
            </div>

            <div class="mt-2">
                <h2 class="mb-3 font-semibold">Or log in with another site</h2>
                <Button icon={DiGithubBadge} outline>Log in with GitHub</Button>
            </div>
        </div>
    </form>
</div>
