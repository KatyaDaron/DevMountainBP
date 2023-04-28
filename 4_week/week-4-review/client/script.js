console.log("I'm connected")

//select html element
let button = document.querySelector("#reqBtn");
let bodyBtn = document.querySelector("#bodyBtn");
let paramBtn = document.querySelector("#paramBtn");
let queryBtn = document.querySelector("#queryBtn");

//build callback function
const sendRequest = (event) => {
    event.preventDefault();

    console.log("Sending request....");
    axios.get("http://localhost:4004/get")
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
}

const bodyRequest = (event) => {
    event.preventDefault();

    let body = {
        "name": "Michael",
        "job": "manager"
    }

    axios.post("http://localhost:4004/body", body)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
}

const paramRequest = (event) => {
    axios.get("http://localhost:4004/Jimmy")
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
}

const queryRequest = (event) => {
    axios.get("http://localhost:4004?username=Ryan")
        .then((res) => {
            console.log(res.data);
        })
        .catch(err => console.log(err));
}

//add event listener
button.addEventListener("click", sendRequest);
bodyBtn.addEventListener("click", bodyRequest);
paramBtn.addEventListener("click", paramRequest);
queryBtn.addEventListener("click", queryRequest);