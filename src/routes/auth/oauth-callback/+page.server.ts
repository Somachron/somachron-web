import { exchangeCode } from "$lib/api/auth.server";
import { REFRESH_TOKEN, SESSION_TOKEN } from "$lib/models/auth";
import { Routes } from "$lib/route";
import { error, redirect } from "@sveltejs/kit";

export async function load({ locals, url, cookies }: any) {
    const code = url.searchParams.get("code");
    if (!code) {
        throw error(400, { message: "Missing code" });
    }

    var authSuccess = false;
    try {
        let authToken = await exchangeCode(code);

        let session_expiry = new Date();
        session_expiry.setTime(Date.now() + (authToken.expires_in * 1000));

        let refresh_expiry = new Date();
        refresh_expiry.setTime(Date.now() + (authToken.expires_in * 1000 * 60 * 24 * 7));

        cookies.set(SESSION_TOKEN, authToken.access_token, {
            path: "/",
            expires: session_expiry,
            maxAge: authToken.expires_in,
            secure: true,
        });
        cookies.set(REFRESH_TOKEN, authToken.refresh_token, {
            path: "/",
            expires: refresh_expiry,
            maxAge: 7 * 24 * 60 * 60,
            secure: true,
        });

        locals.accessToken = authToken.access_token;
        locals.refreshToken = authToken.refresh_token;

        authSuccess = true;
    } catch (e) {
        authSuccess = false;
    }

    if (authSuccess) {
        throw redirect(302, Routes.CloudPhotos);
    } else {
        throw redirect(302, Routes.SignIn);
    }
};
