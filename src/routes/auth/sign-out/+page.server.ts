import { REFRESH_TOKEN, SESSION_TOKEN } from "$lib/models/auth";
import { Routes } from "$lib/route";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ locals, cookies }) => {
        locals.accessToken = '';
        locals.refreshToken = '';

        cookies.delete(SESSION_TOKEN, { path: "/" });
        cookies.delete(REFRESH_TOKEN, { path: "/" });

        redirect(302, Routes.SignIn);
    },
};
