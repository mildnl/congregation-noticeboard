import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

const userPoolId = process.env.AWS_USER_POOL_ID;
const clientId = process.env.AWS_APP_CLIENT_ID;
const region = process.env.AWS_REGION;

function handleLogin(email, password) {
  const authenticationData = {
    Username: email,
    Password: password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);
  const userPool = new CognitoUserPool({
    UserPoolId: userPoolId,
    ClientId: clientId,
  });
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log('Authentication successful');
      // Handle successful login here
    },
    onFailure: function (err) {
      console.error('Authentication failed:', err);
      // Handle failed login here
    },
  });
}

function handleSuccessfulLogin() {
  // Redirect to a different page on successful login
  // Replace 'Dashboard' with your desired page
  if (typeof window !== 'undefined') {
    window.location.href = '/dashboard';
  }
}

export { handleLogin, handleSuccessfulLogin };