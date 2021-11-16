export const isDev = () => process.env.NODE_ENV === 'development' && process.env?.DEV_MODE === 'true';
export const logDevMode = () => console.log(process.env.DEV_MODE);