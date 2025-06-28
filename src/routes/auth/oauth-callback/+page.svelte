<script lang="ts">
    import { isTypeApiEmpty } from "$lib/utils";
    import { LoaderCircle } from "@lucide/svelte";
    import { toast } from "svelte-sonner";

    let { data } = $props();

    if (isTypeApiEmpty(data)) {
        toast.error(data.msg);
    }
</script>

<div
    class="flex h-screen w-screen items-center justify-center place-items-center"
>
    <div class="flex w-full items-center justify-center">
        <LoaderCircle class="animate-spin size-12" />
    </div>
</div>
