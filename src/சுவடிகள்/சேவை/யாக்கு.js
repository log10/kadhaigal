export const யாக்கு = கதை => {
    let சொற்கள் = கதை.replace(/\\t/g, '&emsp;&emsp;')
        .replace(/(\\n)|(\\n\\r)/g, ' <br><br> ')
        .split(' ');
    let யாப்பு = '';
    for (let கு = 0; கு < சொற்கள்.length; கு++) {
        யாப்பு += ' ' + சொற்கள்[கு].replace(/<c>/gi, '<div style="text-align: center">')
                                .replace(/<\/c>/gi, '</div>');
    }
    return யாப்பு;
};