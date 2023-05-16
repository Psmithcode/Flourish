const productsArray = [
  {
    id: "price_1N5CMLGUZj4socXHgvylZakI",
    title: "Fern",
    price: 4.99,
  },
  {
    id: "price_1N5CMrGUZj4socXHfUV3UiZi",
    title: "Succulent",
    price: 9.99,
  },
  {
    id: "price_1N5CNOGUZj4socXHdJ5xbNv3",
    title: "Palm",
    price: 19.99,
  },
  {
    id: "price_1N5CNlGUZj4socXHrW4wATJm",
    title: "Small",
    price: 4.99,
  },
  {
    id: "price_1N5CO3GUZj4socXHi1Z7hUJs",
    title: "Medium",
    price: 9.99,
  },
  {
    id: "price_1N5COVGUZj4socXHfsQISmJ0",
    title: "Large",
    price: 14.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product does not exist for ID: " + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
