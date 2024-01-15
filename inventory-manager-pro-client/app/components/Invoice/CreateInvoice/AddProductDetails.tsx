import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { useInvoiceContext } from "../../../context/InvoiceContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductDetails: React.FC = () => {
  const { invoice, setInvoice } = useInvoiceContext();

  // Function to add product details to the invoice.
  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    const lastItem =
      invoice?.productDetails?.products[
        invoice.productDetails.products.length - 1
      ];

    if (
      lastItem?.productName !== "" &&
      lastItem?.warranty !== "" &&
      lastItem?.quantity !== 0 &&
      lastItem?.unitPrice !== 0
    ) {
      setInvoice({
        ...invoice,
        productDetails: {
          ...invoice.productDetails,
          products: [
            ...invoice.productDetails.products,
            {
              productName: "",
              warranty: "",
              quantity: 0,
              unitPrice: 0,
            },
          ],
        },
      });
    } else {
      toast.warn("Please fill in all required fields");
    }
  };

  // Function to handle changes in product details within an invoice.
  const handleProductChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number,
    field: string
  ) => {
    const updatedProducts = [...invoice.productDetails.products];
    updatedProducts[idx][field] = e.target.value;

    setInvoice({
      ...invoice,
      productDetails: {
        ...invoice.productDetails,
        products: updatedProducts,
      },
    });
  };

  // Function to remove the item at the specified index
  const handleDeleteItem = (idx: number) => {
    const updatedProducts = [...invoice.productDetails.products];
    updatedProducts.splice(idx, 1);
    setInvoice({
      ...invoice,
      productDetails: {
        ...invoice.productDetails,
        products: updatedProducts,
      },
    });
  };

  return (
    <form
      onSubmit={handleAddItem}
      className="border-b dark:border-b-gray-500  py-4"
    >
      <ToastContainer />
      <h4 className="">Add Product&apos;s Details</h4>
      <div className="h-full w-full">
        {invoice?.productDetails?.products &&
          invoice.productDetails.products.map((product: any, idx: number) => (
            <div
              key={idx}
              className="flex lg:items-center gap-1    border-b border-b-secondary  mb-2 lg:mb-0 lg:border-none "
            >
              <div className="mt-3 sm:mt-0">{idx + 1}.</div>
              <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
                <input
                  type="text"
                  className="input w-full input-bordered  dark:bg-secondary"
                  placeholder="Product's Name"
                  value={product[idx].productName}
                  onChange={(e) => handleProductChange(e, idx, "productName")}
                />
                <input
                  type="text"
                  className="input w-full input-bordered  dark:bg-secondary"
                  placeholder="Warranty"
                  value={product[idx].warranty}
                  onChange={(e) => handleProductChange(e, idx, "warranty")}
                />
                <input
                  type="number"
                  className="input w-full input-bordered  dark:bg-secondary"
                  placeholder="Quantity"
                  value={
                    product[idx].quantity === 0 ? "" : product[idx].quantity
                  }
                  onChange={(e) => handleProductChange(e, idx, "quantity")}
                />
                <input
                  type="number"
                  className="input w-full input-bordered  dark:bg-secondary"
                  placeholder="Unit Price"
                  value={
                    product[idx].unitPrice === 0 ? "" : product[idx].unitPrice
                  }
                  onChange={(e) => handleProductChange(e, idx, "unitPrice")}
                />
              </div>
              <button
                className="ml-1  disabled:text-secondary"
                onClick={() => handleDeleteItem(idx)}
              >
                x
              </button>
            </div>
          ))}
      </div>
      <div className="w-full text-right pr-4">
        <button
          className="btn border-none   bg-[#5a66f1] text-white rounded-md hover:bg-secondary"
          type="submit"
        >
          <FaPlus className="inline" />
          Add Item
        </button>
      </div>
    </form>
  );
};

export default AddProductDetails;
