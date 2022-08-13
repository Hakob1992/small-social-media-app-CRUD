let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let data = {};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
        console.log("failure");
    } else {
        console.log("success");
        msg.innerHTML = "";
        getData();
    }
}

// accept input field text
let getData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
                <div>
                    <p>${data.text}</p>
                    <span class="option">
                        <i class="fas fa-edit"></i>
                        <i class="fas fa-trash-alt"></i>
                    </span>
                </div>
            `;
    input.value = '';
}