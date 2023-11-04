 
import { Auth } from 'aws-amplify';
import { loggedIn, registering } from '$lib/services/stores';
import type { CognitoUser } from '@aws-amplify/auth';



type SignInParameters = {
  username: string;
  password: string;
};

export async function signIn({ username, password }: SignInParameters) {
  try {
    const user:CognitoUser = await Auth.signIn(username, password).then((value) => {
      loggedIn.set(true);
      return value;
    });

    return user;
  } catch (error) {
    console.log('error signing in', error);
  }
};

	export async function signOut() {
    try {
		  await Auth.signOut();
		  loggedIn.set(false);
      console.log('User logged out');
      // Redirect or perform other actions on successful logout
    } catch (error) {
      console.log('Error:', error);
      // Handle logout error
    }
  }

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export async function signUp({ username, password, email, phoneNumber }: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      username,
      password,
      attributes: {
        email, // optional
        phoneNumber, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        enabled: false,
      },
    });
	  console.log(user);
	  registering.set(true);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

type ConfirmSignUpParameters = {
  username: string;
  code: string;
};

export async function confirmSignUp({ username, code }: ConfirmSignUpParameters) {
  try {
	  await Auth.confirmSignUp(username, code);
	  registering.set(false);
  } catch (error) {
    console.log('error confirming sign up', error);
  }
}

	export const getCurrentUser = async () => {
		try {
            console.log("getCurrentUser clicked");
			const user = await Auth.currentAuthenticatedUser({
				bypassCache: false,
			});
			console.log(user);
			console.info(JSON.stringify(user));
			return user;
		} catch (error) {
			console.error(error);
		}
	};

	export async function resendConfirmationCode(username:string) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}