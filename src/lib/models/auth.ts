export interface AuthToken {
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export function emptyAuthToken() {
    return {
        access_token: '',
        refresh_token: '',
        expires_in: 0,
    } as AuthToken;
}

export const SESSION_TOKEN = "__session";
export const REFRESH_TOKEN = "__refresh";
