<script lang="ts">
    import Button from "$components/core/Button.svelte";
    import Input from "$components/core/Input.svelte";
    import Textarea from "$components/core/TextArea.svelte";
    import {
        Dropzone,
        Select,
        Label,
        Fileupload,
        Helper,
    } from "flowbite-svelte";
    import { page } from "$app/stores";

    const { genres } = $page.data;
    let gameImage: string | undefined;
    let gameFile: string;
    let selectedGenre: string;

    const onImageChange = (event: Event) => {
        let correct_event = event as Event & {
            currentTarget: EventTarget & HTMLInputElement;
        };

        let image = correct_event.currentTarget.files?.item(0);

        if (image) {
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (ev: ProgressEvent<FileReader>) => {
                gameImage = ev.target?.result?.toString();
            };
        }
    };
</script>

<div class="my-5 mx-auto w-[960px] rounded border bg-white shadow">
    <div class="border-b p-5 text-2xl font-bold">🌈 Upload new game</div>
    <form class="flex p-5">
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
                <Fileupload
                    type="file"
                    bind:value={gameFile}
                    inputClass="block w-[524px] cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none"
                    hidden
                />
                <Helper class="ml-2"
                    >Upload your <span class="font-bold">.zip</span> or
                    <span class="font-bold">.html</span> game file</Helper
                >
            </div>

            <h2 class="title">Detail</h2>
            <div class="flex flex-col">
                <Label class="mb-6 space-y-2">
                    <span class="font-bold">Genres</span>
                    <Select
                        class="w-[524px]"
                        items={genres.map(({ id, name }) => ({
                            value: id,
                            name,
                        }))}
                        placeholder="Select your genres"
                        bind:value={selectedGenre}
                    />
                </Label>
                <Textarea
                    label="Description"
                    placeholder="This will markup your content game page"
                />
            </div>
            <Button class="mt-6">Save me</Button>
        </div>
        <div>
            {#if gameImage}
                <img
                    class="h-[300px] w-[315px] rounded shadow"
                    src={gameImage}
                    alt="game cover"
                />
                <div class="mt-2 text-center">
                    <button
                        class="underline"
                        on:click={() => (gameImage = undefined)}
                    >
                        Remove image
                    </button>
                </div>
            {:else}
                <Dropzone
                    on:change={onImageChange}
                    divClass="h-[300px] w-[315px]"
                    id="dropzone-file"
                >
                    <p class="mb-2 text-sm text-gray-500">
                        <span class="font-semibold text-primary"
                            >Click to upload</span
                        > your game cover
                    </p>
                    <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                </Dropzone>
            {/if}
        </div>
    </form>
</div>

<style lang="postcss">
    .title {
        @apply mt-10 mb-5 text-xl font-bold;
    }
</style>
