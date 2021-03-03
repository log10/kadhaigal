const உடல் = document.querySelector(".உடல்");
const கொக்கி = document.querySelector(".கொக்கி");
const சூழற்பட்டியல் = [
    "சிறுகதைகள்",
    "கட்டுரைகள்",
    "மொழிபெயர்ப்புகள்"
];

const கொத்தைநிறுவு = (கொத்து, பின்பழை = ()=>{}) => {
    உடல்.insertAdjacentHTML("beforeend", கொத்து);
    பின்பழை();
};

const அழி = () => {
    let திரை = document.querySelector("div.திரை");
    திரை.parentNode.removeChild(திரை);
    let சூழற்கொத்து = document.querySelector("div.சூழற்கொத்து");
    சூழற்கொத்து.parentNode.removeChild(சூழற்கொத்து);
}

export const சூழற்கொத்தாக்கி = {
    செதுக்கு: () => {
        import("./சூழற்கொத்து.html").then(பக்கம் => கொத்தைநிறுவு(பக்கம், () => {
            சூழற்பட்டியல்.forEach(உறுப்பு => {
                document.querySelector("."+உறுப்பு+"_சூழல்").addEventListener('click', வினை => {
                    கொக்கி.innerHTML = உறுப்பு;
                    அழி();
                    let முகவரி = '#'+உறுப்பு;
                    if(window.location.href.includes('#')) {
                        window.location.href = window.location.href.split('#')[0] + முகவரி;
                    } else {
                        window.location += முகவரி;
                    }
                });
            });
            document.querySelector(".தொடர்புக்கு_சூழல்").addEventListener('click', வினை => {
                window.location = "https://docs.google.com/forms/d/e/1FAIpQLSf4riS491tEFuv9YiCtZ2g8PL7Jj3XL6redsUr1NYJndRkCyA/viewform?usp=sf_link";
            });
            document.querySelector(".திரை").addEventListener('click', வினை => {
                அழி();
            });
        }));
    }
}