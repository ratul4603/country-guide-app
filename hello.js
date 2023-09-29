
const form = document.querySelector("form");
const input = document.querySelector("input");
const result = document.querySelector(".result");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    fetch(`https://restcountries.com/v3.1/name/${input.value.tolowercase()}?fullText=true`)
    .then((data)=>data.json())
    .then((item)=>{
        result.innerHTML = `
            <img src='${item[0].flags.svg}' alt="">
            <h1>${input.value.toUpperCase()}</h1>
            <p><span>Official Name:</span> ${item[0].name.official}</p>
            <p><span>Capital:</span> ${item[0].capital[0]}</p>
            <p><span>Continents:</span> ${item[0].continents[0 ]} </p>
            <p><span>Population:</span> ${item[0].population}</p>
            <p><span>Currency:</span> ${item[0].currencies[Object.keys(item[0].currencies)[0]].name}, ${item[0].currencies[Object.keys(item[0].currencies)[0]].symbol} </p>
        `;
        result.classList.remove("error");
    }).catch(()=>{
            if(input.value == ""){
                result.innerHTML = `
                <h3>The input field cannot be empty</h3>
                `;
            }else{
                result.innerHTML = `
                    <h3>Please enter a valid country name</h3>
                `;
            }
            result.classList.add("error");
    });
});
