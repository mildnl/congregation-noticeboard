 
import { Auth } from 'aws-amplify';
import { loggedIn, registering} from '$lib/services/stores'


export const signIn = async (username: string, password: string) => {
		try {
			const user = await Auth.signIn(username, password).then(() => loggedIn.set(true));
			return user;
		} catch (error) {
			console.error(error);
		}
	};

	export async function signOut() {
    try {
      await Auth.signOut().then(() => loggedIn.set(false));
      console.log('User logged out');
      // Redirect or perform other actions on successful logout
    } catch (error) {
      console.log('Error:', error);
      // Handle logout error
    }
  }

export const signUp = async (username: string, password: string, email: string) => {
		try {
			console.log("Signup clicked");
			console.log(username, password);
      await Auth.signUp({
        username,
        password, 
        attributes: {
          email
        },
				autoSignIn: { 
                   enabled: true,
                }
			}).then(() => registering.set(true));

		} catch (error) {
			console.log('error signing up:', error);
		}
	};

	export async function confirmSignUp(username:string, code:string) {
  try {
	  await Auth.confirmSignUp(username, code).then(() => {
		  loggedIn.set(true);
		  registering.set(false);
	  });
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