/* 🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name ); // ?


Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA:

IN QUESTO CODICE E' STATO USATO UN RIFERIMENTO PER L'OGGETTO HAMBURGER CON SECONDHAMBURGER

QUINDI MODIFICANDO LE PROPRIETA' DI SECONDHAMBURGER VADO A MODIFICARE QUELLE ORGINALI DI HAMBURGER, QUIDNI:

console.log(hamburger.name); // 'Double Cheese Burger'
console.log(secondBurger.name ); // 'Double Cheese Burger'

*/

/* 🏆 Code Question 2

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
​
const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";
​
console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA:

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? 

SONO STATI CREATI 2 OGGETTI: HAMBURGER E SECONDHAMBURGER DOVE SECONDHAMBURGER E' UNA COPIA SUPERFICIALE DI HAMBURGER,
NON VIENE COPIATA LA PROPRIETA' INGREDIENTS, QUINDI CON SECONDBURGER.INGREDIENTS[0] = "SALAD";

QUINDI VIEE MODIFICATO ANCHE L'ELEMENTO 0 DI INGREDIENTS DI HAMBURGER.

*/

/* 🏆 Code Question 3

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA:

SONO STATI CREATI 3 OGGETTI IN MEMORIA

*/

/* 🏆 Code Question 4

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}
​
const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};
Qual è il metodo migliore per clonare l’oggetto chef, e perché?
Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

RISPOSTA:

Qual è il metodo migliore per clonare l’oggetto chef, e perché?

IL METODO MIGLIORE ESSENDO PRESENTE UNA FUNZIONE ALL'INTERNO DELL'OGGETTO CHEF PUò ESSERE UNA SHALLOW COPY O COPIA SUPERFICIALE


Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

IL METODO MIGLIORE PER CLONARE L'OGGETTO RESTAURANT E' ATTRAVERSO UNA COPIA PROFONDA OPPURE DEEP COPY: STRUCTURECLONED(), IN QUANTO PRESENTE IL METODO DATE

*/

/* 🎯 Code Question 5 (Bonus)

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};
​
const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";
​
console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?
Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

RISPOSTA:

console.log(hamburger.maker.name); // "ANONYMOUS CHEF"

console.log(secondBurger.maker.name); // "CHEF HYUR"

console.log(hamburger.maker.restaurant.name); // "HYUR'S BURGERS"

console.log(secondBurger.maker.restaurant.name); // "HYUR'S II"

Senza lanciare il codice, riesci a prevedere cosa viene stampato in console? 
HO L'OGGETTO HAMBURGER CON DIVERSE PROPRIETA' CHE HANNO DEGLI OGGETTI ANNIDATI.
VIENE CREATA L'OGGETTO COPIA SUPERFICIALE NEWRESTAURANT CHE CONTIENE LA PROPRIETA' ANNIDATA DI RESTAURANT DI HAMBURGER, SU QUESTO OGGETTO VADO A MODIFICARE SIA IL NAME CHE L'ADDRESS.
CREO POI UNA SHALLOW COPY/COPIA SUPERFICALE DI HAMBURGER SENZA GLI OGGETTI ANNIDATI CHE VADO AD AGGIUNGERE DOPO.

Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? SONO STATI CREATI 3 OGGETTI

*/

/* 🎯 Code Question 6 (Bonus)

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}
Qual è il metodo migliore per clonare l’oggetto chef, e perché?

RISPOSTA:

LA SOLUZIONE MIGLIORE SECONDO ME E' ATTRAVERSO UNA REFERENCE, QUINDI UN RIFERIMENTO AD UNA VARIABILE, IN QUANTO PRESENTI UNA FUNZIONE.


*/

/* 🎯 Snack  (Bonus)

Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
	restaurant: {
		name: "Hyur's Burgers",
		welcomeClient: () => {
			console.log("Benvenuto!");
		},
		address: {
			street: 'Main Street',
			number: 123,
			showAddress: () => {
				console.log("Main Street 123");
			}
		},
		isOpen: true,
	}
}

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

*/

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

function deepCopy(chef) {
  if (chef) {
    return structuredClone(chef);
  } else {
    return;
  }
}

deepCopy(chef);

console.log(deepCopy(chef));
