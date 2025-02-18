// Import necessary modules and types
import { Invoice } from "@/app/hooks/useInvoice";
import React from "react";

interface InvoiceHeaderProps {
  invoice: Invoice; // Use the correct type for the invoice data
}

const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({ invoice }) => {
  // Extract and format date from the invoice data
  const dateString = invoice.issuedDate;
  const date = new Date(dateString);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${date.getFullYear()}`;

  return (
    <div className="w-full invoice-header grid grid-cols-1 lg:grid-cols-2 justify-between gap-x-4 pb-2 border-b dark:border-b-gray-500 ">
      {/* top left */}
      <div className="invoice-header-left">
        <div>
          <h1 className="text-2xl font-bold mb-3 text-gray-700 dark:text-gray-400">
            <span className="text-primary">CN </span> Computer & Networks
          </h1>
        </div>
        <div className="text-gray-700 dark:text-gray-400">
          <address>
            Shop# 545-546, Level# 5, Suvastu Arcade ICT Bhaban, New Elephant
            Road, Dhaka-1205, 01832-231421, 01867-428132,{" "}
            <span className="lowercase">cncomputer0@gmail.com</span>
          </address>
        </div>
      </div>

      {/* top right */}
      <div className="invoice-header-right mt-4 lg:mt-0 text-gray-700 dark:text-gray-400 lg:text-right w-full">
        <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-400">
          Invoice #{invoice?.invoiceNumber}
        </h1>
        <p>Date Issued: {formattedDate}</p>
        <p className="border-b dark:border-b-gray-500 inline">
          Customer&apos;s Details
        </p>
        <div className="lg:text-right">
          {invoice?.customerDetails?.customerName} <br />
          {invoice?.customerDetails?.customerAddress} <br />
          {invoice?.customerDetails?.customerPhoneNo} <br />
          {invoice?.customerDetails?.customerEmail} <br />
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
