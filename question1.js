////////QUESTION 1

const products1 = [
  "redShirt",
  "greenPants",
  "redShirt",
  "orangeShoes",
  "blackPants",
  "blackPants",
];
const products2 = [
  "yellowShirt",
  "redHat",
  "blackShirt",
  "bluePants",
  "redHat",
  "redHat",
  "pinkHat",
  "blackShirt",
  "yellowShirt",
  "greenPants",
  "greenPants",
];
const products3 = [
  "greenShirt",
  "bluePants",
  "redShirt",
  "blackShoes",
  "redPants",
  "redPants",
  "whiteShirt",
  "redShirt",
];

function featuredProduct(products) {
  var orderedList = products.sort();
  var featProduct = "";
  var maxcount = 1;
  for (let i = 0; i < products.length - 1; i++) {
    var count = 1;
    featProduct = products[i];

    for (let j = i + 1; j < products.length; j++) {
      if (featProduct === products[j]) {
        count = count + 1;
      }
    }
    if (count >= maxcount) {
      maxcount = count;
      featProduct = products[i];
    }
  }

  console.log(orderedList);
  console.log(featProduct);

  return featProduct;
}

featuredProduct(products2);
