let myStudents = [
    {
        name: "Fredrik",
        age: 40,
        programme: "Frontend"
    },
    {
        name: "Johan",
        age: 18,
        programme: "Frontend"
    },
    {
        name: "Maya",
        age: 25,
        programme: "Backend"
    }
];

let studentListDiv = document.querySelector("#studentList")
let btn = document.querySelector("#showStudents");
let isShowing = false;

function showStudents() {
    if (isShowing === false){
        //Logik
        isShowing = true;
        btn.innerText = "Hide students"
        studentListDiv.innerHTML = "";
        studentListDiv.style.border = "4px solid black";

        //Loopar ut samtliga elever
        myStudents.forEach(
            function(student){
                console.log(student);
                let p = document.createElement("p");
                p.innerHTML = `
                <strong>Namn:</strong> ${student.name}
                <strong>Ålder:</strong> ${student.age}
                <strong>Utbildning:</strong> ${student.programme}
                `
                studentListDiv.append(p)
            }
        )
    } else {
        studentListDiv.innerHTML = "";
        isShowing = false;
        btn.innerText = "Show students";
        studentListDiv.style.border = "none";
    }
}

// showStudents();



// btn.addEventListener("click", showStudents);