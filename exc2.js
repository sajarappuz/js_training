(function () {
    console.log("Loading User Details...");

    // Greeting function using closure and arrow functions
    const generateGreetingMessage = (() => {
        let greetingMessage = "Name: ";
        return (firstName, lastName) => {
            greetingMessage += `GREETING_MSG ${firstName} ${lastName}`;
            return greetingMessage;}
    })();

    // Example usage
    const firstName = "ram";
    const lastName = "raj";
    const finalGreeting = generateGreetingMessage(firstName, lastName);

    console.log(finalGreeting);
})();
