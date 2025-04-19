import React from "react";
import { useAddProductMutation } from "../app/service/dummyData";

export const AddProduct = () => {
  const [addProduct, { isLoading, isError, isSuccess }] =
    useAddProductMutation();

  const handleAddProduct = async () => {
    const newProduct = {
      id: 4,
      name: "New Product",
      description: "This is a new product",
      price: 29.99,
      image: "https://via.placeholder.com/150",
    };

    try {
      await addProduct(newProduct).unwrap();
      console.log("Product added successfully");
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Add Product</h1>
      <button
        onClick={handleAddProduct}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {isLoading ? "Adding..." : "Add Product"}
      </button>
      {isError && <p className="text-red-500">Failed to add product</p>}
      {isSuccess && (
        <p className="text-green-500">Product added successfully!</p>
      )}
      <div className="flex justify-center items-center">
        <div className="border border-gray-300 p-4 m-4">
          <img
            src="https://via.placeholder.com/150"
            alt="New Product"
            className="w-32 h-32"
          />
          <h2 className="text-xl font-semibold">New Product</h2>
          <p>This is a new product</p>
          <p className="font-bold">Price: $29.99</p>
        </div>
      </div>
    </div>
  );
};
