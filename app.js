//API
const URL = "https://official-joke-api.appspot.com/random_joke"
const factpara = document.querySelector('#facts');
const factpara1 = document.querySelector('#fct');
const btn = document.querySelector('#btn')


const getfact = async () => {
    console.log('getting data!!')
    let response = await fetch(URL);
    let data = await response.json()
    // console.log(data)
    factpara.innerText = data.setup;
    factpara1.innerText = data.punchline;
}

btn.addEventListener('click', getfact);






