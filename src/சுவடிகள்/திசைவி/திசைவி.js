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

const துவக்கி = () => {
    let கையாளிகள் = [];
    let சுருண்டது = true;
    window.onscroll = வினை => {
        if(வினை) {
            if(சுருண்டது) {
                setTimeout(() => {
                    கையாளிகள்.forEach(கையாளி => கையாளி());
                    சுருண்டது = true;
                },500);
                சுருண்டது = false;
            }
        }
        return {
            கோர்: கையாளி => {
                கையாளிகள்.push(கையாளி);
            }
        };
    };
};

window.addEventListener('hashchange', வினை => {
    திசைவி(வினை.newURL);
    துவக்கி();
});

window.addEventListener('load', வினை => {
    திசைவி(window.location.href);
    துவக்கி();
});