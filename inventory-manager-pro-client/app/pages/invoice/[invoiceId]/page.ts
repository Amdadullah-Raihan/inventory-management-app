// Import necessary modules and types
import { useRef, useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { RotatingLines } from "react-loader-spinner";
import ReactToPrint from "react-to-print";
import { useParams } from "next/navigation";
import useApiUrl from "@/app/hooks/useApiUrl";
import axios from "axios";

// Import components
import InvoiceHeader from "@/app/components/Invoice/CreateInvoice/InvoiceHeader";
import BillingDetailsPreview from "@/app/components/Invoice/Preview/BillingDetailsPreview";
import InvoicePreview from "@/app/components/Invoice/Preview/InvoicePreview";
import NotePreview from "@/app/components/Invoice/Preview/NotePreview";
import ProductDetailsPreview from "@/app/components/Invoice/Preview/ProductDetailsPreview";
import { Invoice } from "@/app/hooks/useInvoice";

// Define component types
interface SingleInvoiceProps {}

// Define main component
const SingleInvoice: React.FC<SingleInvoiceProps> = () => {
  const apiUrl = useApiUrl();
  const { invoiceId } = useParams();
  const [singleInvoice, setSingleInvoice] = useState<Invoice>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const invoiceRef = useRef<any>(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${apiUrl}/api/invoice/singleInvoice/${invoiceId}`)
      .then((response) => {
        setSingleInvoice(response.data.invoice);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching single invoice:", error);
        setIsLoading(false);
      });
  }, [apiUrl, invoiceId]);

  return (
    <div className="mb-2 w-full md:flex gap-x-4 bg-[#F7F7F9] dark:bg-secondary p-2 lg:p-6">
      <InvoicePreview
        ref={invoiceRef}
        invoice={singleInvoice}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SingleInvoice;
