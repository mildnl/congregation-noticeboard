import { signIn, signUp, confirmSignUp, resendConfirmationCode } from '$lib/services/auth/amplifyFunctions';
import type { CognitoUser } from '@aws-amplify/auth';
import {loggedIn} from "$lib/services/stores";

/** @type {import('./$types').Actions} */
export const actions = {
    resendCode: async ({ request, cookies }) => {
        const form = await request.formData();
        const username = form.get('username');
        const code = form.get('code');

        resendConfirmationCode({ username: username });
    },
    confirmSignUp: async ({ request, cookies }) => {
        const form = await request.formData();
        const username = form.get('username');
        const code = form.get('code');

        confirmSignUp({ username: username, code: code });
    },
    login: async ({ request, cookies }) => {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password');

        await signIn({ username, password }).then(() => {
            cookies.set('loggedIn', 'true', { path: '/login' });
        });
    },
    logout: async ({ request, cookies }) => {
      // TODO: 
    },
    register: async ({ request, cookies }) => {
        const form = await request.formData();
        const username = form.get('username');
        const email = form.get('email');
        const password = form.get('password');
        const firstName = form.get('firstName');
        const lastName = form.get('lastName');
        const phoneNumber = form.get('phoneNumber');

        signUp({username:username, email:email, password:password, firstName:firstName, lastName:lastName, phoneNumber:phoneNumber});
    }
}

export function load({ cookies }) {
	const isLoggedIn = cookies.get('loggedIn');
    

    loggedIn.set(isLoggedIn === 'true');

	return {
		isLoggedIn: isLoggedIn
	};
}