import { SESSION_TOKEN } from "$lib/models/auth";
import { Routes } from "$lib/route";
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoadEvent } from "./$types";

export async function load({ cookies }: LayoutServerLoadEvent) {
    const session = cookies.get(SESSION_TOKEN);
    if (!session) {
        throw redirect(302, Routes.SignIn);
    }

    // const session = await auth.api.getSession({ headers: request.headers });

    // if (!session) {
    // redirect(302, Routes.SignIn);
    // }

    return {};
}
