 
import { Auth } from 'aws-amplify';
  
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
        console.log('Login start')
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
            email,
            phone_number,
            given_name,
            family_name,
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log(user);
          return user;
    } catch (error: unknown) {
    console.log('Error signing up:', error);
    }
  }