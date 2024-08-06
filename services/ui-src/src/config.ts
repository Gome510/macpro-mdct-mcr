//  @ts-nocheck

const config = {
  MAX_ATTACHMENT_SIZE: 5000000,
  LOCAL_LOGIN: import.meta.env.VITE_LOCAL_LOGIN,
  IS_FEATURE_BRANCH: import.meta.env.VITE_IS_FEATURE_BRANCH,
  s3: {
    LOCAL_ENDPOINT: import.meta.env.VITE_S3_LOCAL_ENDPOINT,
    REGION: import.meta.env.VITE_S3_ATTACHMENTS_BUCKET_REGION,
    BUCKET: import.meta.env.VITE_S3_ATTACHMENTS_BUCKET_NAME,
  },
  apiGateway: {
    REGION: import.meta.env.VITE_API_REGION,
    URL: import.meta.env.VITE_API_URL,
  },
  cognito: {
    REGION: import.meta.env.VITE_COGNITO_REGION,
    USER_POOL_ID: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_ID,
    APP_CLIENT_DOMAIN: import.meta.env.VITE_COGNITO_USER_POOL_CLIENT_DOMAIN,
    IDENTITY_POOL_ID: import.meta.env.VITE_COGNITO_IDENTITY_POOL_ID,
    COGNITO_IDP_NAME: import.meta.env.VITE_COGNITO_IDP_NAME,
    REDIRECT_SIGNIN: import.meta.env.VITE_COGNITO_REDIRECT_SIGNIN,
    REDIRECT_SIGNOUT: import.meta.env.VITE_COGNITO_REDIRECT_SIGNOUT,
  },
  POST_SIGNOUT_REDIRECT: import.meta.env.VITE_POST_SIGNOUT_REDIRECT,
  STAGE: import.meta.env.VITE_STAGE,
  REACT_APP_LD_SDK_CLIENT: import.meta.env.VITE_REACT_APP_LD_SDK_CLIENT,
  COGNITO_IDP: import.meta.env.VITE_COGNITO_IDP,
  APPLICATION_ENDPOINT: import.meta.env.VITE_APPLICATION_ENDPOINT,
};

export default config;
