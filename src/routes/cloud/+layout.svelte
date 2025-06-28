<script lang="ts">
    import { Routes } from "$lib/route";

    let { data, children } = $props();
</script>

<div>
    <form action={`${Routes.SignOut}`} method="POST">
        <button type="submit"> Logout </button>
    </form>
</div>
{@render children()}
