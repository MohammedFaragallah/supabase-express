import { Novu } from "@novu/node";

const NOVU_API_KEY = process.env.NOVU_API_KEY!;

export const novu = new Novu(NOVU_API_KEY);
