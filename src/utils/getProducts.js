export const getProducts = () => {
    const delay = setTimeout(() => {
        fetch("https://fakestoreapi.com/products")
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            IsLoading(false); // Set isLoading to false once the data is fetched
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
            IsLoading(false); // Set isLoading to false in case of an error
          });
      }, 2000); // Simulate a 2-second delay
  
      // Clean up the timeout when the component unmounts
      return () => clearTimeout(delay);
    }
