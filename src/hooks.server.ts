import { handleSession } from 'svelte-kit-cookie-session';
import { config } from 'dotenv';
config(); 

const secret = process.env.SESSION_SECRET;

export const handle = handleSession({
	chunked: true, // Optional, default is false - if true, the session will be chunked into multiple cookies avoiding the browser limit for cookies
	secret: secret as string
});