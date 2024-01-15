/* eslint-disable react/jsx-no-undef */
// Import necessary types or interfaces if needed

import { useRef } from "react";
import { Invoice } from "@/app/hooks/useInvoice";
import { AiFillPrinter } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";
import ReactToPrint from "react-to-print";
import InvoiceHeader from "../CreateInvoice/InvoiceHeader";
import BillingDetailsPreview from "./BillingDetailsPreview";
import NotePreview from "./NotePreview";
import ProductDetailsPreview from "./ProductDetailsPreview";
import { IconType } from "react-icons";
import { RiFileEditFill } from "react-icons/ri";

interface InvoicePreviewProps {
  invoice: Invoice; // Replace with the actual type of your invoice
  isLoading: boolean;
}

type Icon = {
  icon: IconType;
};

const InvoicePreview: React.FC<InvoicePreviewProps> = ({
  invoice,
  isLoading,
}) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full overflow-hidden bg-[#F7F7F9] dark:bg-secondary min-h-screen">
      {isLoading ? (
        <div className="flex justify-center py-16 gap-1 text-primary">
          <p className="text-xl font-semibold">Loading </p>
          <RotatingLines
            strokeColor="#5a66f1"
            strokeWidth="5"
            animationDuration="0.75"
            width="24"
            visible={true}
          />
        </div>
      ) : invoice.customerDetails ? (
        <div className="w-full md:flex gap-x-4 gap-y-2">
          <div
            ref={invoiceRef}
            className="bg-white dark:bg-neutral p-2 lg:px-6 rounded-lg max-w-[790px] mx-auto overflow-hidden"
          >
            <InvoiceHeader invoice={invoice} />
            <ProductDetailsPreview invoice={invoice} />
            <BillingDetailsPreview invoice={invoice} />
            <NotePreview />
          </div>
          <div className="mt-2 md:mt-0 w-full md:max-w-[250px]">
            <button
              disabled
              className="btn border-none bg-primary w-full mb-3 text-accent hover:bg-gray-800 dark:disabled:text-gray-600"
            >
              <RiFileEditFill className="text-xl" />
              Edit
            </button>
            <ReactToPrint
              trigger={() => (
                <button className="btn btn-outline w-full border-[#5a66f1] text-primary hover:text-white dark:disabled:bg-gray-500 dark:disabled:text-gray-400">
                  <AiFillPrinter className="text-xl" />
                  Print
                </button>
              )}
              content={() => invoiceRef.current}
              documentTitle={`${invoice?.customerDetails?.customerName}-INV-${invoice?.invoiceNumber}`}
            />
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg  text-xl text-rose-500 py-16 text-center">
          No Invoice Found!
        </div>
      )}
    </div>
  );
};

export default InvoicePreview;
