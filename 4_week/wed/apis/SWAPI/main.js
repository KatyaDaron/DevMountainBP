const btn = document.querySelector('button');
const body = document.querySelector('body');

const btnClicked = () => {
    axios.get(`https://swapi.dev/api/planets/?search=Alderaan`)
    .then(res => {
        let resArr = res.data.results[0].residents;
        console.log(resArr);
        for (let i = 0; i < resArr.length; i++) {
            axios.get(resArr[i])
            .then(res => {
                const element = document.createElement('h2');
                element.textContent = res.data.name;
                document.body.appendChild(element);
            })
            .catch(error => {
                console.error(error);
            })
        }
    })
    .catch(error => console.log(error));
}

btn.addEventListener('click', btnClicked);