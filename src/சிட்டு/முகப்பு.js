import "../பாங்குகள்.சிட்டு.css";
import "../பாகங்கள்/விழித்தளம்/விழித்தளம்.சிட்டு.css";
import "../பாங்குகள்/சிறுகதைகள்.சிட்டு.css";
import "../பாகங்கள்/பட்டியல்/பட்டியல்.சிட்டு.css";
import "../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.சிட்டு.css";

import "../சுவடிகள்/திசைவி/திசைவி.js";

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