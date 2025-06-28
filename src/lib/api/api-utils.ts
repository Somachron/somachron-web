import type { ApiEmpty } from "$lib/models/api";

export const applicationJsonHeader = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

export async function mapApiResponse<T>(
    response: Response,
    def: T,
): Promise<T> {
    let data: T;
    let req_id = response.headers.get("x-b-id") || "";

    if (response.status === 200 || response.status === 201) {
        let json = await response.json();
        try {
            data = json as T;
        } catch (e) {
            data = def;
        }
    } else {
        data = def;
        let msg = await response.text();
        try {
            let json = JSON.parse(msg);
            msg = json.message;
        } catch (e) { }

        throw {
            status: response.status,
            req_id: req_id,
            msg,
        } as ApiEmpty;
    }

    return data;
}
