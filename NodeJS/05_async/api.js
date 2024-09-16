import fetch from 'node-fetch';
import process from "process"; 

const list_cmd = process.argv.slice(2);

 
async function fetchData(argv) {
    if (argv.length === 0) {
        console.log("Пожалуйста введите в консоли аргументы!");
        return;
        
    }

    const requests = argv.map(arg => {
        return fetch(`https://swapi.dev/api/people/?search=${arg}`)
           .then(response => {
             if (!response.ok) {
                 throw new Error(`Ошибка при запросе: ${response.status}`);
             }
             return response.json();
           })
           .then(data => {
            if (data.results.length === 0) {
                console.log(`Не найдено людей с именем "${arg}"`);
            }
            return data.results;
        })
        .catch(error => {
            console.error(`Ошибка при обращении к серверу: ${error.message}`);
            return [];
        });
    });

    const results = await Promise.all(requests);
    const characters = results.flat();
    
    if (characters.length === 0) {
        return;
    }
    const totalResults = characters.length;
    const names = characters.map(char => char.name).sort();

    const minHeightCharacter = characters.reduce((min, char) => (parseInt(char.height, 10) < parseInt(min.height, 10) ? char : min));
    const maxHeightCharacter = characters.reduce((max, char) => (parseInt(char.height, 10) > parseInt(max.height, 10) ? char : max));

    console.log(`Total results: ${totalResults}.`);
    console.log(`All: ${names.join(', ')}.`);
    console.log(`Min height: ${minHeightCharacter.name}, ${minHeightCharacter.height} cm.`);
    console.log(`Max height: ${maxHeightCharacter.name}, ${maxHeightCharacter.height} cm.`);
};

fetchData(list_cmd);