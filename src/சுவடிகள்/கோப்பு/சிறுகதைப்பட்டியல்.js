import {சிறுகதைகள்} from "./சிறுகதைகள்.js";

const _சிறுகதைகள் = சிறுகதைகள்;

const முகவரி = '#சிறுகதைகள்/';

export const சிறுகதைப்பட்டியலி = {
    பட்டியலைத்தா: () => {
        let பட்டியல் = [];
        Object.keys(_சிறுகதைகள்).forEach(பெயர் => {
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