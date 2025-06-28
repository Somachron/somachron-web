<script lang="ts">
    import { Toaster } from "$lib/components/ui/sonner";
    import "../app.css";

    let { children } = $props();
</script>

<Toaster richColors={true} position="top-center" />

<main>
    {@render children()}
</main>
