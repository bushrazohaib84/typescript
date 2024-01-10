import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';
const createUser = () => {
    let users = [];
    for (let i = 0; i < 5; i++) {
        let user = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(1000000000 * Math.random() * 900000000),
            balance: 1000000 * i
        };
        users.push(user);
    }
    //  console.log(users)
    return users;
};
// ATM
const atmMachine = async (users) => {
    const res = await inquirer.prompt({
        type: "number",
        message: "enter pin code",
        name: "pin",
    });
    console.log(res);
    const user = users.find((val) => val.pin == res.pin);
    if (user) {
        console.log(`welcome ${user.name}`);
        atmFunc(user);
        return;
    }
    else {
        console.log("invalid user pin");
    }
};
// Atm Function
const atmFunc = async (user) => {
    const ans = await inquirer.prompt({
        type: "list",
        name: "select",
        choices: ["withdraw", "balance", "exit"],
        message: "desired action"
    });
    if (ans.select == "withdraw") {
        const amount = await inquirer.prompt({
            type: "number",
            name: "rupee",
            message: "enter amount",
        });
        if (amount.rupee > user.balance) {
            return console.log("insuffitient balance");
        }
        console.log(`withdraw amount: ${amount.rupee}`);
        console.log(`Balance: ${user.balance - amount.rupee}`);
    }
    if (ans.select == "balance") {
        console.log(`Balance: ${user.balance}`);
        return;
    }
    if (ans.select == "exit") {
        console.log("thanks for using Atm");
        console.log(ans);
    }}
    const users = createUser();
    atmMachine(users);

