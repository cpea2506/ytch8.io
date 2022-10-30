<script lang="ts">
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
    import TextArea from "$components/core/TextArea.svelte";

    let imageSrc: string | undefined;
    let uploadInput: HTMLInputElement;

    const onImageChange = (
        event: Event & { currentTarget: EventTarget & HTMLInputElement },
    ) => {
        let image = event.currentTarget.files?.item(0);

        if (image) {
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (ev: ProgressEvent<FileReader>) => {
                imageSrc = ev.target?.result?.toString();
            };
        }
    };
</script>

<div class="my-8 mx-auto w-[960px] rounded-lg border bg-white shadow">
    <section class="flex min-h-[80px] items-center border-b px-10">
        <h1 class="text-xl font-bold">🌈 Upload new game</h1>
    </section>
    <div class="flex py-5 px-[40px]">
        <div class="flex-1">
            <div>
                <Input label="Title" class="w-[524px]" />
                <Input
                    class="w-[524px]"
                    label="Short description"
                    placeholder="Describe your project in shortest way"
                />
            </div>
            <h2 class="title">Uploads</h2>
            <div>
                <Button>Upload file</Button>
                <span class="ml-2"
                    >Upload your <span class="font-bold">.zip</span> or
                    <span class="font-bold">.html</span> game file</span
                >
            </div>
            <h2 class="title">Detail</h2>
            <div class="flex flex-col">
                <div class="mb-6">
                    <div class="font-bold">Genres</div>
                    <select class="input w-[524px] appearance-none">
                        <option disabled selected>No Genre</option>
                        <option>Action</option>
                        <option>Adventure</option>
                        <option>Fighting</option>
                        <option>Platformer</option>
                        <option>Role Playing</option>
                        <option>Shooter</option>
                        <option>Simulation</option>
                        <option>Survival</option>
                        <option>Strategy</option>
                        <option>Other</option>
                    </select>
                </div>
                <TextArea
                    label="Description"
                    placeholder="This will markup your content game page"
                />
            </div>
            <Button class="mt-6">Save me</Button>
        </div>
        <div>
            {#if imageSrc}
                <img
                    class="h-[300px] w-[315px] shadow"
                    src={imageSrc}
                    alt="game cover"
                />
                <div class="mt-2 text-center">
                    <button
                        class="underline"
                        on:click={() => (imageSrc = undefined)}
                    >
                        Remove image
                    </button>
                </div>
            {:else}
                <div
                    class="flex-col-center h-[300px] w-[315px] border border-dashed border-dim"
                >
                    <input
                        type="file"
                        bind:this={uploadInput}
                        on:change={onImageChange}
                        hidden
                    />
                    <Button on:click={() => uploadInput.click()}
                        >Upload cover image</Button
                    >
                </div>
            {/if}
        </div>
    </div>
</div>

<style lang="postcss">
    .title {
        @apply mt-10 mb-5 text-xl font-bold;
    }
</style>
