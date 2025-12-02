
const heroes = [
    { id: 1, name: 'Superman', owner: 'DC' },
    { id: 2, name: 'Batman', owner: 'DC' },
    { id: 3, name: 'Spiderman', owner: 'Marvel' },
    { id: 4, name: 'Ironman', owner: 'Marvel' },
    
];


const findHeroById = (id : number) => {
    return heroes.find(hero => hero.id === id);
}

const hero = findHeroById(3);

console.log(hero?.name ?? 'No hero found');

