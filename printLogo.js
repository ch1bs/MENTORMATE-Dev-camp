const printLogo = (n, char) => {
    let logo = '';
    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i <= n; i++) {
        if (i < Math.ceil(n / 2)) {
            //Creating the top half of the letters
            logo += print((
                print('-', n - i) +
                print(char, n + count1) +
                print('-', n - count1) +
                print(char, n + count1) +
                print('-', n - i)
            ), 2) + '\n';

            count1 += 2;
        } else {
            //Creating the bottom half of the letters
            logo += print((
                print('-', n - i) +
                print(char, n) +
                print('-', count2 + 1) +
                print(char, n * 2 - 1 - count2) +
                print('-', count2 + 1) +
                print(char, n) +
                print('-', n - i)
            ), 2) + '\n';

            count2 += 2;
        }
    }

    return logo;
}

const print = (char, times) => char.repeat(times);

console.log(printLogo(3, '*'));
console.log(printLogo(5, '*'));
console.log(printLogo(7, '*'));
