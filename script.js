console.log("javascript loaded")
const form = document.getElementById("regform");
console.log("form");
form.addEventListener(
    "submit", function (e) {
        e.preventDefault();
        console.log("Form Submitted");
        const name = document.getElementById("name").value;
        console.log(name);
        const phone = "2347061572871";
        const message = `As-salamualeikum warahmatullahi wabarahkatu.
        My name is ${name}.I am interested in joining your online computer training class.`;
        
        const url = `https://wa.me/ ${phone}?text=${encodeURIComponent(message)}`;
        console.log(url);
        location.href = url;
    });
    