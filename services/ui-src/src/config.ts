//  @ts-nocheck

const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  LOCAL_LOGIN: import.meta.env.LOCAL_LOGIN,
  IS_FEATURE_BRANCH: import.meta.env.IS_FEATURE_BRANCH,
  s3: {
    LOCAL_ENDPOINT: import.meta.env.S3_LOCAL_ENDPOINT,
    REGION: import.meta.env.S3_ATTACHMENTS_BUCKET_REGION,
    BUCKET: import.meta.env.S3_ATTACHMENTS_BUCKET_NAME,
  },
  apiGateway: {
    REGION: import.meta.env.API_REGION,
    URL: import.meta.env.API_URL,
  },
  cognito: {
    REGION: import.meta.env.COGNITO_REGION,
    USER_POOL_ID: import.meta.env.COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.COGNITO_USER_POOL_CLIENT_ID,
    APP_CLIENT_DOMAIN: import.meta.env.COGNITO_USER_POOL_CLIENT_DOMAIN,
    IDENTITY_POOL_ID: import.meta.env.COGNITO_IDENTITY_POOL_ID,
    COGNITO_IDP_NAME: import.meta.env.COGNITO_IDP_NAME,
    REDIRECT_SIGNIN: import.meta.env.COGNITO_REDIRECT_SIGNIN,
    REDIRECT_SIGNOUT: import.meta.env.COGNITO_REDIRECT_SIGNOUT,
  },
  POST_SIGNOUT_REDIRECT: import.meta.env.POST_SIGNOUT_REDIRECT,
  STAGE: import.meta.env.STAGE,
  REACT_APP_LD_SDK_CLIENT: import.meta.env.REACT_APP_LD_SDK_CLIENT,
  COGNITO_IDP: import.meta.env.COGNITO_IDP,
  APPLICATION_ENDPOINT: import.meta.env.APPLICATION_ENDPOINT,
};

export default config;
