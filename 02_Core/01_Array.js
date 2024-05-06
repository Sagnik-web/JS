const hero = ["Iron Man", "Spider Man", "Captain Amarica", "Dr. Strange"]
const DCHero = ["Batman", "Suparman", "Flash"]

// console.log(hero.push("Thor"));
// console.log(hero);
// console.log(hero.pop());
// console.log(hero);


// console.log(hero.unshift("Thor"));
// console.log(hero);
// console.log(hero.shift());
// console.log(hero);

// hero.push(DCHero)
// console.log(hero);
// console.log(hero.flat(Infinity));



// const allhero = hero.concat(DCHero)
const allhero = [...hero, ...DCHero]

// console.log(allhero);
// console.log(typeof allhero);

// console.log(allhero.sort());

// console.log(allhero.slice(1,4));
// console.log(allhero);
// console.log(allhero.splice(1,4));
// console.log(allhero);


// allhero.forEach(el=>console.log(el))

// console.log( (allhero.find('Batman')))

//Filter

console.log(allhero.includes("Batman"));
