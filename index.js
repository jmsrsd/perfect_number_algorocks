const inquirer = require('inquirer')
const perfectNumber = require('./src/perfect_number').default;

function show(lines) {
    lines = Array.from(lines, (element) => String(element))

    for (const i in lines) {
        console.log(lines[i]);
    }
}

async function main() {
    show([
        '~',
        '',
        'Perfect Number',
        'Tekan CTRL + C untuk keluar...'
    ]);

    while (true) {
        try {
            show([
                '',
                '~',
                '',
                'Q harus antara 1 sampai dengan 50'
            ]);

            let q = await inquirer.prompt([{
                'type': 'number',
                'name': 'result',
                'message': 'Q = '
            }]);

            q = Number(q['result']);

            if (q < 1 || q > 50 || isNaN(q)) {
                continue;
            }

            show([
                '',
                'N harus antara 2 sampai dengan 1000'
            ]);
            let numbers = [];

            for (let i = 1; i <= q; i = i) {
                let n = await inquirer.prompt([{
                    'type': 'number',
                    'name': 'result',
                    'message': `N_${i} = `
                }]);

                n = Number(n['result']);

                if (n < 2 || n > 1000 || isNaN(n)) {
                    continue;
                }

                numbers.push(n);
                i++;
            }

            console.log('');
            const result = perfectNumber(q, numbers);

            for (let i in result) {
                i = Number(i);

                console.log(`N_${i + 1} = ${result[i]}`);
            }
        } finally {
            continue;
        }
    }
}

main();