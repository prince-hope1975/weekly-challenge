import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [Alice, Bob, Cat, Doug, Emily] = await stdlib.newTestAccounts(
  10,
  startingBalance
);
const register_in_bank = async (who) => {
  try {
    console.log("REGISTERING FOR BANK..... ");
    console.log(
      "\nBalances before\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo"
    );
    const contract = who.contract(backend, ctcAlice.getInfo());
    const response = await contract.apis.customers.joinBank();
    console.log(
      "\nBalances after\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo\n -----------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};const deposit = async (who, amount) => {
  try {
    console.log("DEPOSITING FUNDS..... ");
    console.log(
      "\nBalance before\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo"
    );
    const contract = who.contract(backend, ctcAlice.getInfo());
    const response = await contract.apis.customers.deposit(
      stdlib.parseCurrency(amount)
    );
    console.log(
      "\nBalance after\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo\n ---------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const withdraw = async (who, amount) => {
  try {
    console.log("WITHDRAWING FUNDS..... ");
    console.log(
      "\nBalance before\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo"
    );
    const contract = who.contract(backend, ctcAlice.getInfo());
    const response = await contract.apis.customers.withdrawFunds(
      stdlib.parseCurrency(amount)
    );
    console.log(
      "\nBalance after\n",
      stdlib.formatCurrency(await stdlib.balanceOf(who)),
      "Algo\n ---------------------------------"
    );
  } catch (error) {
    console.log(error);
  }
};

const getRegisterdAddresses = async() =>{
  const current = await ctcAlice.v.noOfUsers.users()
  const fiteredAddresses = current[1].filter(
    (x) => x != stdlib.formatAddress(Alice)
  );
  console.log(
    "The current Users in the contract are ",
     (fiteredAddresses)
  );
}

console.log("Participants: Alice, Bob, Cat");

console.log("Launching...");
const ctcAlice = Alice.contract(backend);

console.log("Starting backends...");
try {
  await Promise.all([
    backend.Deployer(ctcAlice, {
      fee: stdlib.parseCurrency(10),
      alert: () => {
        console.log("Contract Initialized .......");
        throw 42;
      },
      // implement Alice's interact object here
    }),
  ]);
} catch (error) {
  if (error !== 42) console.log(error);
}

await getRegisterdAddresses()

await register_in_bank(Bob);
await register_in_bank(Cat);

await getRegisterdAddresses()

await register_in_bank(Doug);

await getRegisterdAddresses()
// await willError(()=>whitelist(Emily));

await deposit(Bob, 30);
await deposit(Cat, 20);
await deposit(Doug, 10);


await withdraw(Bob, 10);
await withdraw(Cat, 10);
await withdraw(Doug, 10);
// await willError(()=> withdraw(Emily));
console.log("Goodbye, Bobs!");
