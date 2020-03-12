export const formatAddress = (address) => {
    if (!address) return "";
    const { street = '', suite = '', city = '', zipcode = '' } = address;
    return (
        suite +  " "+ street + " " + city +  " " + zipcode
    );

}