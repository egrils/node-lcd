function loadLcdDigits() {
    return {
        '0':{
            firstLine:'._.',
            secondLine:'|.|',
            thirdLine:'|_|'
        },
        '1':{
            firstLine:'...',
            secondLine:'..|',
            thirdLine:'..|'
        },
        '2':{
            firstLine:'._.',
            secondLine:'._|',
            thirdLine:'|_.'
        },
        '3':{
            firstLine:'._.',
            secondLine:'._|',
            thirdLine:'._|'
        },
        '4':{
            firstLine:'...',
            secondLine:'|_|',
            thirdLine:'..|'
        },
        '5':{
            firstLine:'._.',
            secondLine:'|_.',
            thirdLine:'._|'
        },
        '6':{
            firstLine:'._.',
            secondLine:'|_.',
            thirdLine:'|_|'
        },
        '7':{
            firstLine:'._.',
            secondLine:'..|',
            thirdLine:'..|'
        },
        '8':{
            firstLine:'._.',
            secondLine:'|_|',
            thirdLine:'|_|'
        },
        '9':{
            firstLine:'._.',
            secondLine:'|_|',
            thirdLine:'..|'
        }
    };
}

module.exports = {loadLcdDigits:loadLcdDigits};