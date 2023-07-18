function skillsMember() {
    var member = {
        name: "John Doe",
        age: 30,
        skills: ["Javascript", "HTML", "CSS"],
        calculateNumbers: function (var1, var2) {
            return var1 + var2;
        }
    };
    // Accessing the member object
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    console.log(member.calculateNumbers(10, 20));
}