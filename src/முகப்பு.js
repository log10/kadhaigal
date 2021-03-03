import "./பாங்குகள்.css";
import "./பாகங்கள்/விழித்தளம்/விழித்தளம்.css";
import "./பாங்குகள்/சிறுகதைகள்.css";
import "./பாகங்கள்/பட்டியல்/பட்டியல்.css";
import "./பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.css";

import "./சுவடிகள்/திசைவி/திசைவி.js";

const கொக்கித்தீண்டல் = முகவரி => {
    if(window.location.href.includes('#')) {
       window.location.href = window.location.href.split('#')[0] + முகவரி;
    } else {
       window.location += முகவரி;
    }
}

window.addEventListener('load', வினை => {
    document.querySelector(".தலைப்பு").addEventListener('click',வினை => {
        if(window.location.href.includes('#')) {
            window.location.href = window.location.href.split('#')[0];
        }
    });

    document.querySelector(".சிறுகதையின்கொக்கி").addEventListener('click',வினை => {
        கொக்கித்தீண்டல்('#சிறுகதைகள்');
    });

    document.querySelector(".கட்டுரையின்கொக்கி").addEventListener('click',வினை => {
        கொக்கித்தீண்டல்('#கட்டுரைகள்');
    });

    document.querySelector(".மொழிபெயர்ப்பின்கொக்கி").addEventListener('click',வினை => {
        கொக்கித்தீண்டல்('#மொழிபெயர்ப்புகள்');
    });

    document.querySelector(".தொடர்பின்கொக்கி").addEventListener('click',வினை => {
        window.location = "https://docs.google.com/forms/d/e/1FAIpQLSf4riS491tEFuv9YiCtZ2g8PL7Jj3XL6redsUr1NYJndRkCyA/viewform?usp=sf_link";
    });
});