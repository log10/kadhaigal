import {சிறுகதைகள்} from "../கோப்பு/சிறுகதைகள்.js";

const _சிறுகதைகள் = சிறுகதைகள்;

const யாக்கு = கதை => {
    let சொற்கள் = கதை.replace(/\\t/g, '&emsp;&emsp;')
        .replace(/(\\n)|(\\n\\r)/g, ' <br><br> ')
        .split(' ');
    let யாப்பு = '';
    for (let கு = 0; கு < சொற்கள்.length; கு++) {
        யாப்பு += ' ' + சொற்கள்[கு].replace(/<c>/gi, '<div style="text-align: center">')
                                .replace(/<\/c>/gi, '</div>');
    }
    யாப்பு = '<div class="சிறுகதைகள்">' + யாப்பு + '</div>';
    return யாப்பு;
};

let கதைகள் = {};

export const சிறுகதை_சேவை = {
    கதையைத்தா: கதைப்பெயர் => {
        if(கதைகள்[கதைப்பெயர்] === undefined) {
            return _சிறுகதைகள்[கதைப்பெயர்]().then(கதை => {
                let யாப்பு = யாக்கு(கதை);
                கதைகள்[கதைப்பெயர்] = யாப்பு;
                return யாப்பு;
            });
        }
        return Promise.resolve(கதைகள்[கதைப்பெயர்]);
    }
};