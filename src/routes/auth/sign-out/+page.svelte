<script lang="ts">
    import { browser } from "$app/environment";
    import { Routes } from "$lib/route";
    import { LoaderCircle } from "@lucide/svelte";

    if (browser) {
        window.location.href = Routes.SignIn;
    }
</script>

<div
    class="flex h-screen w-screen items-center justify-center place-items-center"
>
    <div class="flex w-full items-center justify-center">
        <LoaderCircle class="animate-spin size-12" />
    </div>
</div>
