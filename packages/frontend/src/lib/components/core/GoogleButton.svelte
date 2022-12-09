<script lang="ts">
    import { PUBLIC_GOOGLE_CLIENT_ID } from "$env/static/public";
    import * as db from "$api/database/index.js";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    export let isLoading = false;

    onMount(() => {
        window.loginWithGoogle = async (response) => {
            isLoading = true;

            const [error, result] = await db.gg.login({
                credential: response.credential,
            });

            if (error) {
                return;
            }

            if (result) {
                isLoading = false;

                document.cookie = `userid=${result.data};path=/`;
                goto("/", { invalidateAll: true, replaceState: true });
            }
        };
    });
</script>

<svelte:head>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
</svelte:head>

<div
    id="g_id_onload"
    data-client_id={PUBLIC_GOOGLE_CLIENT_ID}
    data-context="signin"
    data-ux_mode="popup"
    data-sveltekit-reload=""
    data-callback="loginWithGoogle"
    data-auto_prompt="false"
/>

<div
    class="g_id_signin"
    data-type="standard"
    data-shape="rectangular"
    data-theme="outline"
    data-text="signin_with"
    data-size="medium"
    data-locale="en-GB"
    data-logo_alignment="left"
    on:click
    on:keypress
/>
