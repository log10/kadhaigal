import {மொழிபெயரியல்கள்_கோப்பு} from "../கோப்பு/மொழிபெயரியல்கள்.js";

const _மொழிபெயரியல்கள் = மொழிபெயரியல்கள்_கோப்பு;

const முகவரி = '#மொழிபெயர்ப்புகள்/';

export const மொழிபெயர்ப்பட்டியலி = {
    பட்டியலைத்தா: () => {
        let பட்டியல் = [];
        Object.keys(_மொழிபெயரியல்கள்).forEach(பெயர் => {
            பட்டியல்.push({
                'பெயர்': பெயர்,
                'தீண்டுவினை': () => {
                    window.location.href = window.location.href.split('#')[0] + முகவரி + பெயர்;
                }
            });
        });
        return பட்டியல்;
    },
    உட்பட்டியலைத்தா: நூற்பெயர் => {
            let பட்டியல் = [];
            Object.keys(_மொழிபெயரியல்கள்[நூற்பெயர்]).forEach(பெயர் => {
                பட்டியல்.push({
                    'பெயர்': பெயர்,
                    'தீண்டுவினை': () => {
                        window.location.href = window.location.href.split('#')[0] + முகவரி + நூற்பெயர் + '/' + பெயர்;
                    }
                });
            });
            return பட்டியல்;
        }
};