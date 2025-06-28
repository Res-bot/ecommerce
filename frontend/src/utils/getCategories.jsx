export const getUniqueCategories = (products) => {
    const categories = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories.sort(); 
  };
