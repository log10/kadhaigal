export const யாக்கு = கதை => {
    let சொற்கள் = கதை.replace(/\\t/g, '&emsp;&emsp;')
        .replace(/(\\n)|(\\n\\r)/g, ' <br> ')
        .split(' ');
    let யாப்பு = '';
    for (let கு = 0; கு < சொற்கள்.length; கு++) {
        யாப்பு += ' ' + சொற்கள்[கு]
                        .replace(/<h>/gi, '<div style="text-align: center; font-weight: bold">')
                        .replace(/<\/h>/gi, '</div>')
                        .replace(/<c>/gi, '<div><div style="padding-left: 15%">')
                        .replace(/<\/c>/gi, '</div></div>');
    }
    return யாப்பு;
};