{/* <script type="module" src="./add.js"></script> */}
import chalk from 'chalk';
import figlet from 'figlet';

console.log(chalk.blue('Hello world!'));
console.log(chalk.bold('Hello world!'));
console.log(chalk.underline('Hello world!'));
console.log(chalk.red('Hello world!'));
console.log(chalk.bgBlackBright('Hello world!'));


figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

console.log(chalk.red(figlet.textSync("# CODERS")));