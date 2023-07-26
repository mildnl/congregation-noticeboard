 
import type { CognitoUser } from 'amazon-cognito-identity-js';
import { Auth } from 'aws-amplify';
import { writable } from 'svelte/store';

type DefaultData = {
  user: CognitoUser | null,
  userConfirmed: boolean,
  userSub: string,
};
const defaultData: DefaultData = {
    user: null,
    userConfirmed: false,
    userSub: '',
};

export const store = writable(defaultData);
export const logout = () => store.set(defaultData);
  
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
          }).then((data) => void store.set(data));
    } catch (error: unknown) {
    console.log('Error signing up:', error);
    }
  }

  type ResendConfCodeParameters = {
    code: string;
  };

export async function verifyCurrentUserAttributeSubmit({code}:ResendConfCodeParameters) {
  try {
    await Auth.verifyCurrentUserAttributeSubmit('email',code);
  } catch(err) {
    console.log('failed with error', err);
  }
};

export async function rememberDevice() {
  try {
    const result = await Auth.rememberDevice();
    console.log(result)
  } catch (error) {
    console.log('Error remembering device', error)
  }
}

export async function forgetDevice() {
  try {
    const result = await Auth.forgetDevice();
    console.log(result)
  } catch (error) {
    console.log('Error forgetting device', error)
  }
}

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