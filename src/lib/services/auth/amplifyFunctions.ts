 
import { Auth } from 'aws-amplify';
import { writable } from 'svelte/store';

export const store = writable({});
export const logout = () => store.set({});
  
 type SignUpParameters = {
    username: string;
    password: string;
    given_name: string;
    family_name: string;
    email: string;
    phone_number: string;
  };

  export async function signUp({ username, password, email, phone_number, given_name, family_name }: SignUpParameters) {
      try {
          await Auth.signUp({
        username,
        password,
        attributes: {
            email,
            phone_number,
            given_name,
            family_name,
        },
        autoSignIn: {
          enabled: false,
        },
      }).then((data) => void store.set(data));;
    } catch (error: unknown) {
    console.log('Error signing up:', error);
    }
  }

  type ResendConfCodeParameters = {
  username: string;
};

export async function resendConfirmationCode({ username }: ResendConfCodeParameters) {
  try {
    await Auth.resendSignUp(username);
    console.log('code resent successfully');
  } catch (err) {
    console.log('error resending code: ', err);
  }
}

 type SignInParameters = {
    username: string;
    password: string;
  };

export async function signIn({ username, password }: SignInParameters ) {
  try {
    await Auth.signIn(username, password).then((data) => void store.set(data));
  } catch (error) {
    console.log('error signing in', error);
  }
}