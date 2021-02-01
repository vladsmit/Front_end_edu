export const ADD_PROFILE = '@@profile/ADD_PROFILE';

export const addProfile = (name, city, age, info) => ({
    type: ADD_PROFILE,
    name,
    city,
    age,
    info
});