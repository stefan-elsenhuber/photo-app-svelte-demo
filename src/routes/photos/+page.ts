import type { PageLoad } from './$types';

export const load = (async () => {
    const resp = await fetch("https://sveltekit-workshop-cityjs-2024-api.vercel.app/images");
    const jsonData = await resp.json();
    return {photos: jsonData};
}) satisfies PageLoad;