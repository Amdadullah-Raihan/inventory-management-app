import React, { createContext, useContext, ReactNode } from "react";
import useInvoice, { Invoice } from "../hooks/useInvoice";

interface InvoiceContextType {
  invoice: Invoice;
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>;
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

interface InvoiceContextProviderProps {
  children: React.ReactNode;
}

export const InvoiceContextProvider: React.FC<InvoiceContextProviderProps> = ({
  children,
}) => {
  const { invoice, setInvoice } = useInvoice(); // Assuming useInvoice returns the appropriate values

  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice }}>
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoiceContext = (): InvoiceContextType => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error(
      "useInvoiceContext must be used within an InvoiceContextProvider"
    );
  }
  return context;
};
