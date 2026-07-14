document.getElementById("regform").addEventListener(
    "submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let phone = "2347061572871";
        let message = "As-salamualeikum warahmatullahi wabarahkatu. \n\nMy name is " + name + ".I am interested in joining your online computer training class.";
        
        let url = "https://wa.me/" + phone + "?text =" + encodeURIComponent(message);
        window.open(url, "_blank");
    });
    