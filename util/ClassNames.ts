export type JoinableClass = string | string[] | object;

export const joinClasses = (...classes: JoinableClass[]) => {
    return classes
        .map((cl) => {
            if (typeof cl === "string") {
                return cl;
            } else if (typeof cl === "object") {
                return Object.entries(cl)
                    .map(([key, value]) => (!!value ? `${key}` : null))
                    .filter((item) => item !== null)
                    .join(" ");
            }
        })
        .join(" ");
};
