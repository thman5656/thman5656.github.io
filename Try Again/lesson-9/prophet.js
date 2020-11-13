const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    console.table(jsonObject); 
        for (let i = 0; i < prophets.length; i++ ) {
            
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let DOB = document.createElement('p');
            let PlaceOB = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
            DOB.textContent = "Date of Birth: " + prophets[i].birthdate;
            PlaceOB.textContent = "Place of Birth: " + prophets[i].birthplace;
            image.setAttribute('src', prophets[i].imageurl);
            image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + prophets.indexOf(prophets[i].name + " " + prophets[i].lastname));
            
            card.appendChild(h2);
            card.appendChild(DOB);
            card.appendChild(PlaceOB);
            card.appendChild(image);
            
            document.querySelector('div.cards').appendChild(card);
        };
            
    });

