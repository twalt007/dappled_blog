import React from 'react';

export const BrandingColor = '#065f06';

//2020-02-05T03:53:45.000Z

export const formatDate = (rawDate) => {
    const year = rawDate.slice(0,4);
    console.log('year: ', year);
    const monthNum = rawDate.slice(5,7);
    console.log('month: ', month);
    const day = rawDate.slice(8,10);
    console.log('day: ', day);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthArrayNum;
    if(monthNum !== 11 && monthNum !== 12){
        monthArrayNum = (monthNum.slice(1))-1;
    }else{
        monthArrayNum = (monthNum)-1;
    }
    console.log('monthArrayNum: ', monthArrayNum);
    const month = months[monthArrayNum];

    const finalDate = `${month} ${day}, ${year}`
    console.log('finalDate: ', finalDate);
    return finalDate;
}