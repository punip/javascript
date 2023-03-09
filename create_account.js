import Account from "./account.js";
const a1 = new Account('puneeth','current',10000);
console.log(a1.deposit(5000));

// handle the error
try{
    console.log(a1.withdraw(4000));
}catch(err) {
    console.log('its me!');
    console.log(err);
}

