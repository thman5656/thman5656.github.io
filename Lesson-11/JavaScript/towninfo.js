const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) 
        {
            if(towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs"){
            
            let card = document.createElement('section');
            card.setAttribute("id", "cardnumber" + i)

            let text = document.createElement('section');
            let IMG = document.createElement('section');

            let name = document.createElement('h2');
            let motto = document.createElement('h3')
            let yearfounded = document.createElement('p');
            let population = document.createElement('p');
            let annualrainfall = document.createElement('p');
            let photo = document.createElement('img');
           

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            yearfounded.textContent = "Year Founded: " + towns[i].yearFounded;
            population.textContent = "Population: " + towns[i].currentPopulation;
            annualrainfall.textContent = "Average Rain Fall: " + towns[i].annualrainfall;
            photo.setAttribute('src', "Images/" + towns[i].photo);
            
            card.appendChild(text);
            card.appendChild(IMG);
            text.appendChild(name);
            text.appendChild(motto);
            text.appendChild(yearfounded);
            text.appendChild(population);
            text.appendChild(annualrainfall);
            IMG.appendChild(photo);
            
            document.querySelector('div.cards').appendChild(card);
        }};
            
    });
