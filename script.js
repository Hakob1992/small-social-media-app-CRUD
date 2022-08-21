let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

let data = {};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Post cannot be blank";
    } else {
        msg.innerHTML = "";
        getData();
    }
};

// accept input field text
let getData = () => {
    data["text"] = input.value;
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
                <div>
                    <p>${data.text}</p>
                    <span class="option">
                        <i onClick = "editePost(this)" class="fas fa-edit"  ></i>
                        <i onClick = "deletePost(this)" class="fas fa-trash-alt"></i>
                    </span>
                </div>
            `;
    input.value = '';
};

// DELETE POST

let deletePost = (e) => {
    e.parentElement.parentElement.remove()
}

// EDITE POST

let editePost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove()
}