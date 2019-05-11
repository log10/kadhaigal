import "./பாங்குகள்.css";
import "./பாகங்கள்/விழித்தளம்/விழித்தளம்.css";
import "./பாங்குகள்/சிறுகதைகள்.css"

import "./சுவடிகள்/திசைவி/திசைவி.js";

window.addEventListener('load', வினை => {
//    document.querySelector(".தலையங்கம்").addEventListener('click',evt => {
//        import('./பாகங்கள்/தொடு/தொடு.html').then(function (page) {
//             document.querySelector(".தளம்").innerHTML = page;
//         });
//    });
    document.querySelector(".சிறுகதையின்கொக்கி").addEventListener('click',வினை => {
        let முகவரி = '#சிறுகதைகள்';
        if(window.location.href.includes('#')) {
            window.location.href = window.location.href.split('#')[0] + முகவரி;
        } else {
            window.location += முகவரி;
        }
    });
});