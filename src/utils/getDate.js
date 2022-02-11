export const getDate = (date) => {
    return date.toISOString().replace('T', ' ').substring(0, 19);
};
