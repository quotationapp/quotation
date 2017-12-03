export const getApiUrl = (location) => {

    let apiURL;

    if (location === 'quotation.feliperego.com') {
        apiURL = 'https://quotation-api.feliperego.com/';
    } else {
        apiURL = 'http://localhost:3001/';
    }

    return apiURL;
};