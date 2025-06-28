import { BACKEND_URL } from "$env/static/private";
import { emptyAuthToken, type AuthToken } from "$lib/models/auth";
import { applicationJsonHeader, mapApiResponse } from "./api-utils";

export async function exchangeCode(code: string): Promise<AuthToken> {
    const url = `${BACKEND_URL}/auth/exchange-code`;
    const res = await fetch(url, {
        method: "POST",
        headers: applicationJsonHeader,
        body: JSON.stringify({ code: code })
    });
    return mapApiResponse(res, emptyAuthToken());
}
