declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'staging'|'production' ;
    NEXT_PUBLIC_API_URL: string;
  }
}