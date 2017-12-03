export const getApiUrl = (location) => {

    let apiURL;

    if (window.location.hostname === 'quotation.feliperego.com') {
        apiURL = 'http://quotation-api.feliperego.com/';
    } else {
        apiURL = 'http://localhost:3001/';
    }

    return apiURL;
};