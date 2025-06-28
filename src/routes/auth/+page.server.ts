import { Routes } from "$lib/route";
import { redirect } from "@sveltejs/kit";

export async function load() {
    throw redirect(302, Routes.SignIn);
}
