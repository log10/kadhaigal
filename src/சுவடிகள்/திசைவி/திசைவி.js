import {சிறுகதை_திசைவி} from "./சிறுகதை.js";
import {விழித்தளவி} from "../../பாகங்கள்/விழித்தளம்/விழித்தளம்.js";

const தளம் = document.querySelector(".தளம்");

const நிறுவு = (பக்கம், பின்பழை = ()=>{}) => {
    தளம்.innerHTML = பக்கம்;
    பின்பழை();
};

const திசைவி = முகவரி => {
    let பகுதி = முகவரி.split('#');
    if(பகுதி.length == 2) {
        let பக்கம் = decodeURI(பகுதி[1]);
        if(பக்கம்.match('^சிறுகதைகள்') != null) {
            சிறுகதை_திசைவி.திசைவி(பக்கம், நிறுவு)
        }
    } else {
        விழித்தளவி.செதுக்கு(நிறுவு);
    }
};

window.addEventListener('hashchange', வினை => {
    திசைவி(வினை.newURL);
});

window.addEventListener('load', வினை => {
    திசைவி(window.location.href);
});