const awsmobile = {
  region: process.env.AWS_REGION,
  userPoolId: process.env.AWS_USER_POOL_ID,
  userPoolWebClientId: process.env.AWS_APP_CLIENT_ID,
  identityPoolId: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
};

export default awsmobile;
