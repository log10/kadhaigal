import "../பாங்குகள்.நடு.css";
import "../பாகங்கள்/விழித்தளம்/விழித்தளம்.நடு.css";
import "../பாங்குகள்/சிறுகதைகள்.நடு.css";
import "../பாகங்கள்/பட்டியல்/பட்டியல்.நடு.css";
import "../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.நடு.css";
import "../பாகங்கள்/சூழற்கொத்து/சூழற்கொத்து.நடு.css";

import "../சுவடிகள்/திசைவி/திசைவி.js";
import {சூழற்கொத்தாக்கி} from "../பாகங்கள்/சூழற்கொத்து/சூழற்கொத்து.js";

window.addEventListener('load', வினை => {
    document.querySelector(".தலைப்பு").addEventListener('click',வினை => {
        if(window.location.href.includes('#')) {
            window.location.href = window.location.href.split('#')[0];
        }
    });

    document.querySelector(".கொக்கி").addEventListener('click',வினை => {
        let முகவரி = '#' + வினை.srcElement.innerHTML;
        if(window.location.href.includes('#')) {
            window.location.href = window.location.href.split('#')[0] + முகவரி;
        } else {
            window.location += முகவரி;
        }
    });

    document.querySelector("i.சூழற்கொத்து").addEventListener('click', வினை => {
        சூழற்கொத்தாக்கி.செதுக்கு();
    });
});