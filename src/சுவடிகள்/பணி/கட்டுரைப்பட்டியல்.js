import {கட்டுரைகள்} from "../கோப்பு/கட்டுரைகள்.js";

const _கட்டுரைகள் = கட்டுரைகள்;

const முகவரி = '#கட்டுரைகள்/';

export const கட்டுரைப்பட்டியலி = {
    பட்டியலைத்தா: () => {
        let பட்டியல் = [];
        Object.keys(_கட்டுரைகள்).forEach(பெயர் => {
            பட்டியல்.push({
                'பெயர்': பெயர்,
                'தீண்டுவினை': () => {
                    window.location.href = window.location.href.split('#')[0] + முகவரி + பெயர்;
                }
            });
        });
        return பட்டியல்;
    }
};