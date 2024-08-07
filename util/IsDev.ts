export const isDev = () => process.env.NODE_ENV === "development";
export const logDevMode = () => console.log(process.env.NODE_ENV === "development");
