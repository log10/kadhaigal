import "./பாங்குகள்.css";
import "./பாகங்கள்/விழித்தளம்/விழித்தளம்.css";
import "./பாங்குகள்/சிறுகதைகள்.css";
import "./பாகங்கள்/பட்டியல்/பட்டியல்.css";
import "./பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.css";

import "./சுவடிகள்/திசைவி/திசைவி.js";

window.addEventListener('load', வினை => {
    document.querySelector(".சிறுகதையின்கொக்கி").addEventListener('click',வினை => {
        let முகவரி = '#சிறுகதைகள்';
        if(window.location.href.includes('#')) {
            window.location.href = window.location.href.split('#')[0] + முகவரி;
        } else {
            window.location += முகவரி;
        }
    });
});