import React, { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItems from "./CheckoutItems";
const Checkout = () => {
  const { cartItems , cartTotal } = useContext(CartContext);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full gap-[5px]">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm ">
                  <thead className="border-b font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Product
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Quantity
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Details
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Delete
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((x) => (
                      <CheckoutItems cartItem={x} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[20%]">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Total Summary</p>
            <p>${cartTotal}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
