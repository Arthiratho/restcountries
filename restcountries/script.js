const getcountries = ( ) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all")
    xhr.send();
  
    xhr.responseType = "json";
    xhr.onload = ()=>{
        const countries = xhr.response;

        for(country of countries){
            const block1 = document.createElement("div");
        block1.innerHTML = `
        <div>
        <img class="img"src="${country.flags.png}"
        
        </div>
    <div class="info">
        <h2>${country.name.common}</h2>
        <p><span>Region:</span> ${country.region}</p>
        <p><span>Capital:</span> ${country.capital}</p>
        <p><span>Population:</span> ${country.population}</p>
    </div>`;
        document.body.append(block1);
        
        }
    };
  };
  getcountries();
