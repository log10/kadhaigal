const உடல் = document.querySelector(".உடல்");
const தளம் = document.querySelector(".தளம்");
const சுட்டி = "_சுருள்நிலை_சுட்டி";
const பாங்கு = "தொடு";

const பக்கமெண்ணு = () => {
    let பக்கக்குறிப்பு = document.querySelector(".பக்கக்குறிப்பு span");
    window.onscroll().கோர்(() => {
        let பக்கக்குறிப்பு_எண் = Math.ceil(document.scrollingElement.scrollTop*100/document.scrollingElement.scrollHeight);
        பக்கக்குறிப்பு.innerHTML = ((பக்கக்குறிப்பு_எண் < 10) ? "0" : "") + பக்கக்குறிப்பு_எண்;
        பக்கக்குறிப்பு.parentNode.classList.remove(பாங்கு);
    });
};

const பக்கம்போ = கதைப்பெயர் => {
    let சுருள்நிலை = localStorage.getItem(கதைப்பெயர் + சுட்டி);
    if(சுருள்நிலை) {
        window.scrollTo({
            top: parseInt(சுருள்நிலை),
            left:0,
            behavior: 'auto'
        });
        setTimeout(() => document.querySelector(".பக்கக்குறிப்பு").classList.add(பாங்கு), 800);
    }
};

const கையாளு = கதைப்பெயர் => {
    let பக்கக்குறிப்பு = document.querySelector(".பக்கக்குறிப்பு");
    பக்கக்குறிப்பு.addEventListener('click', () => {
        localStorage.setItem(கதைப்பெயர் + சுட்டி, document.scrollingElement.scrollTop);
        பக்கக்குறிப்பு.classList.add(பாங்கு);
    });
};

export const பக்கக்குறிப்பி = {
    செதுக்கு: கதைப்பெயர் => {
        import("./பக்கக்குறிப்பு.html").then(பக்கம் => {
            தளம்.innerHTML += பக்கம்;
            பக்கம்போ(கதைப்பெயர்);
            கையாளு(கதைப்பெயர்)
            பக்கமெண்ணு();
        });
    }
};