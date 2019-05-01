import "./பாங்குகள்.css";
import "./பாகங்கள்/விழித்தளம்/விழித்தளம்.css";

window.addEventListener('load', (event) => {
    import('./பாகங்கள்/விழித்தளம்/விழித்தளம்.html').then(function (page) {
        document.querySelector(".தளம்").innerHTML = page;
    });
    document.querySelector(".தலையங்கம்").addEventListener('click',evt => {
        import('./பாகங்கள்/தொடு/தொடு.html').then(function (page) {
             document.querySelector(".தளம்").innerHTML = page;
         });
    });
});