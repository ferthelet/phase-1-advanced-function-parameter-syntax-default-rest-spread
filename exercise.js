// js

const farmAnimals = 'cow horse sheep pig chicken';
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// default values right to left, then adding tax
function discountedPrice(price = 100, tax, discount = .25) {
    subTotal = price - price * discount; // * takes precedence 
    return subTotal + subTotal * tax; // * takes precedence
}

console.log(discountedPrice(10, .09));

muppetLab("Dr. Bunson", "Beaker", "Miss Piggy", "Kermit", "Animal");

// function muppetLab(a, b) {
//     console.log(a, b);
// }

function muppetLab(a, b, ...muppets) {
    console.log(a, b, muppets);
}
