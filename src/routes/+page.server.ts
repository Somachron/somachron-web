import { Routes } from "$lib/route";
import { redirect } from "@sveltejs/kit";

export async function load() {
    redirect(302, Routes.CloudPhotos);
}
