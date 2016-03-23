class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    
    greet() {
        alert("GONNA GREET!");
        return "Hello, " + this.greeting;
    }
}