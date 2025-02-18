import React from "react";
import { Invoice } from "@/app/hooks/useInvoice";

interface ProductDetailsPreviewProps {
  invoice: Invoice;
}

const ProductDetailsPreview: React.FC<ProductDetailsPreviewProps> = ({
  invoice,
}) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto border-b dark:border-b-gray-500  mb-4 lg:mb-8 ">
        <table className="table table-xs">
          {/* head */}
          <thead className="text-gray-800 dark:text-white">
            <tr className="border-b  dark:border-b-gray-500">
              <th></th>
              <th>Product Name</th>
              <th>Warranty</th>
              <th>Quantity</th>
              <th>Unite Price </th>
              <th>Total Price </th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-400          ">
            {/* row  */}
            {invoice?.productDetails?.products &&
              invoice.productDetails.products.map((product, idx) => (
                <tr key={idx}>
                  <th>{idx + 1}</th>
                  <td>{product.productName}</td>
                  <td>{product.warranty} </td>
                  <td>{product.quantity}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.unitPrice * product.quantity}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetailsPreview;
