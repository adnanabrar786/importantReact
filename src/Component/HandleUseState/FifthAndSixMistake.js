// Fifth Mistake
// if we get array, object,and nested values so we use useReducer not useState

// Six Mistake
import React, { useState } from "react";

const FifthAndSixMistake = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Shirt",
      quantity: 1,
    },
    {
      id: 2,
      title: "caps",
      quantity: 1,
    },
    {
      id: 3,
      title: "jeans",
      quantity: 1,
    },
  ]);

  //  const [selectedProducts, setSelectedProducts] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const selectedProducts = products.find((p) => p.id === selectedId);

  //   const selectedId = products.find((p) => p.id === id);
  const ChooseProducts = (id) => {
    // const selectProduct = products.find((p) => p.id === id);
    // setSelectedProducts(selectProduct);
    // console.log(selectProduct);
    setSelectedId(id);
  };

  const increment = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    });
  };

  const decrement = (id) => {
    setProducts((prev) => {
      return prev.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity - 1 };
        }else{
            return product
        }
      });
    });
  };

  return (
    <div>
      <h1>products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <div>
              <span>{product.title}</span>
              <button
                onClick={() => {
                  ChooseProducts(product.id);
                }}
              >
                Choose
              </button>
            </div>
            <br />
            <br />
            <div>
              <button
                onClick={() => {
                  increment(product.id);
                }}
              >
                +
              </button>
              <span>{product.quantity}</span>
              <button
                onClick={() => {
                  decrement(product.id);
                }}
              >
                -
              </button>
            </div>
            <br />
            <br />
          </div>
        ))}

        <div>
          <h1>Selected Products</h1>
          <p>{selectedProducts?.title}</p>
          <p>{selectedProducts?.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default FifthAndSixMistake;
