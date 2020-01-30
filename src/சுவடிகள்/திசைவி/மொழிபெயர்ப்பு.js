import {பட்டியலி} from "../../பாகங்கள்/பட்டியல்/பட்டியல்.js";
import {பக்கக்குறிப்பி} from "../../பாகங்கள்/பக்கக்குறிப்பு/பக்கக்குறிப்பு.js";
import {மொழிபெயர்ப்பட்டியலி} from "../சேவை/மொழிபெயர்ப்பட்டியல்.js";
import {மொழிபெயர்ப்பு_சேவை} from "../சேவை/மொழிபெயர்ப்பு.js";

const _பட்டியலி = பட்டியலி;
const _மொழிபெயர்ப்பட்டியலி = மொழிபெயர்ப்பட்டியலி;
const _மொழிபெயர்ப்பு_சேவை = மொழிபெயர்ப்பு_சேவை;
const _பக்கக்குறிப்பி = பக்கக்குறிப்பி;

export const மொழிபெயர்ப்பு_திசைவி = {
    திசைவி: (பக்கம், நிறுவு) => {
        if(பக்கம்.includes('/')) {
            let துணுக்குகள் = பக்கம்.split('/');
            if(துணுக்குகள்.length == 2 && _மொழிபெயர்ப்பு_சேவை.உட்பட்டியலுடையாதா(துணுக்குகள்[1])) {
                _பட்டியலி.செதுக்கு(நிறுவு, _மொழிபெயர்ப்பட்டியலி.உட்பட்டியலைத்தா(துணுக்குகள்[1]));
            } else {
                _மொழிபெயர்ப்பு_சேவை.கதையைத்தா(துணுக்குகள்[1], துணுக்குகள்[2]).then(கதை => {
                    நிறுவு(கதை, () => {
                        _பக்கக்குறிப்பி.செதுக்கு(துணுக்குகள்[1]+"_|_"+துணுக்குகள்[2]);
                    });
                });
            }
        } else {
            _பட்டியலி.செதுக்கு(நிறுவு, _மொழிபெயர்ப்பட்டியலி.பட்டியலைத்தா());
        }
    }
}