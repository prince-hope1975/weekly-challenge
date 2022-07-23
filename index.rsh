"reach 0.1";

const returnLessThan = (a, b) => {
  return a > b ? b : a;
};

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true });
  const Deployer = Participant("Deployer", {
    alert: Fun([], Null),
    fee: UInt,
  });
  const customers = API("customers", {
    joinBank: Fun([], Bool),
    withdrawFunds: Fun([UInt], Bool),
    deposit: Fun([UInt], Bool),
    bankClosing: Fun([], Bool),
  });
  const noOfUsers = View("noOfUsers", {
    users: Array(Address, 5),
  });

  init();
  // The first one to publish deploys the contract
  Deployer.only(() => {
    const fee = declassify(interact.fee);
  });
  Deployer.publish(fee);
  const bank = new Map(UInt);
  const bank_customers_array = Array.replicate(5, Deployer);
  Deployer.interact.alert();

  const [condition, users, total, bank_customers] = parallelReduce([
    true,
    0,
    0,
    bank_customers_array,
  ])
    .invariant(balance() == total)
    .define(()=>{
      noOfUsers.users.set(bank_customers)
    })
    .while(condition)
    .api(
      customers.joinBank,
      () => {
        check(isNone(bank[this]), "Already a member");
        check(users <= 5, "Limit Exceeded cannot register in Bank");
      },
      () => fee,
      (k) => {
        const new_customer_array = bank_customers.set(users % 5, this);
        bank[this] = 0;
        k(true);
        return [condition, users + 1, total + fee, new_customer_array];
      }
    )
    .api(
      customers.deposit,
      (_) => check(isSome(bank[this]), "Not member"),
      (amt) => amt,
      (k, h) => {
        bank[this] = fromSome(bank[this],0) + k
        h(true)
  

        return [condition, users, total + k, bank_customers];
      }
    )
    .api(
      customers.withdrawFunds,
      (_) => {
        check(isSome(bank[this]), "Not a member");
        check(fromSome(bank[this], 0) > 0, "Insufficient");
      },
      (amt) => 0,
      (amt, k) => {
        const val = returnLessThan(fromSome(bank[this], 0), amt);
        const realTranferAmt = returnLessThan(val, balance());
        bank[this] = fromSome(bank[this], 0) - realTranferAmt;
        k(true);
        transfer(realTranferAmt).to(this);
        return [condition, users, total - val, bank_customers];
      }
    )
    .timeout(relativeTime(5000), () => {
      const [[], k] = call(customers.bankClosing);
      k(false);
      return [condition, users, total, bank_customers];
    });

  transfer(balance()).to(Deployer);
  commit();
  exit();
});
