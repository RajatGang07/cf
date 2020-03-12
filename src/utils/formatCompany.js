import React from 'react';

export const formatCompany = (company) => {
    if (!company) return "";
    const { name = '', catchPhrase = '' } = company;
    return (
       <div><p style={{margin: '0'}}>{name}</p> <p style={{fontSize: '10px', margin: '0'}}>{catchPhrase}</p></div>
    );

}