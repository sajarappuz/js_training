class BankDetails {
    constructor(firstname, secondname){
        this.firstname = firstname;
        this.lastname = secondname;
        this.balance = 0;
    }
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    }
    deposit(amount){
        if(amount > 0){
            this.balance+=amount
            console.log(`final balance is ${this.balance}`)
        }else{
            console.log("invalid amount")
        }
    }
    withdraw(amount){
        if(amount > 0 && amount <= this.balance){
            this.balance-=amount;
            console.log(`amount withdrawn successfully, ${this.balance}`)
        }else{
            console.log("amount is not able to withdraw")
        }
    }
    checkbalance(){
        console.log(`${this.balance}`)
    }
    transferMoney(targetAccount, amount) {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          targetAccount.balance += amount;
          console.log(`${this.fullName}: Transferred ${amount} to ${targetAccount.fullName}`);
        } else {
          console.log("Invalid amount for transfer or insufficient balance.");
        }
      }
    }

const account = new BankDetails("jonny", "james")
const account1 = new BankDetails("john", "honay")

console.log(account.fullName)
console.log(account1.fullName)
account.deposit(3000);
account1.deposit(2000)
account.checkbalance()
account1.checkbalance()
account.transferMoney(account1, 500)
account.withdraw(1000)

// class BankDetails {
//     constructor(firstname, secondname) {
//       this.firstname = firstname;
//       this.lastname = secondname; // Assuming secondname should be assigned to lastname
//       this.balance = 0;
//     }
  
//     get fullName() {
//       return `${this.firstname} ${this.lastname}`;
//     }
//   }
  
//   // Example Usage
//   const account = new BankDetails("John", "Doe");
//   console.log(account.fullName);
  