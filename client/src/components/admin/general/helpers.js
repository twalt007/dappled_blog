import React from 'react';

export const BrandingColor = '#065f06';


export const formatDate = (rawDate) => {
    const year = rawDate.slice(0,4);
    const monthNum = rawDate.slice(5,7);
    const day = rawDate.slice(8,10);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthArrayNum;
    if(monthNum !== 11 && monthNum !== 12){
        monthArrayNum = (monthNum.slice(1))-1;
    }else{
        monthArrayNum = (monthNum)-1;
    }

    const month = months[monthArrayNum];

    const finalDate = `${month} ${day}, ${year}`
    return finalDate;
}