import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { PUBLIC_BASE_URL } from "$env/static/public";
import { Routes } from "$lib/route";
import { redirect, type Actions } from "@sveltejs/kit";
import { OAuth2Client } from "google-auth-library";

export const actions: Actions = {
    oauth: async () => {
        const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, `${PUBLIC_BASE_URL}${Routes.OAuth}`);

        const authorizeUrl = client.generateAuthUrl({
            access_type: 'offline',
            scope: "https://www.googleapis.com/auth/userinfo.profile openid",
            prompt: "consent",
        });

        throw redirect(302, authorizeUrl);
    }
}
