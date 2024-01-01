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
            console.log(`amount withdrawn successfully, ${this.deposit}`)
        }else{
            console.log("amount is not able to withdraw")
        }
    }
    checkbalance(){
        console.log(`${this.balance}`)
    }

}
const account = new BankDetails("jonny", "james")
console.log(account.fullName)
account.deposit(3000);
account.checkbalance()

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
  