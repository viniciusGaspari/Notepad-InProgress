document.getElementById("btnCreate").addEventListener("click", createNotepad);

function createNotepad () {

    // alert("424")

    const wrapperTag = document.querySelector(".wrapper");

    const div = document.createElement("div");

    const divBoxNote = document.createElement("div")
    divBoxNote.classList.add("boxNote")

    const text = document.createElement("p")
    const textarea = document.createElement("textarea")

    wrapperTag.appendChild(div)

    div.appendChild(divBoxNote);

    divBoxNote.appendChild(textarea)

};