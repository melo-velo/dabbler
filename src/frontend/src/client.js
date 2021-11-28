import fetch from 'unfetch';

const checkStatus = res => {
    if (res.ok) {
        return res;
    }

    const error = new Error(res.status.Text);
    error.response = res;
    return  Promise.reject(error);
}

export const getAllBreweries = () =>
    fetch("api/v1/breweries")
    .then(checkStatus);

export const createBrewery = () =>
    fetch("api/v1/breweries")
    .then(checkStatus);