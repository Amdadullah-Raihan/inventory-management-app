'use client'
import { useRouter } from 'next/navigation'
import Navbar from './components/Navbar/Navbar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Sidebar from './components/SideBar/Sidebar'
import { AuthContextProvider, useAuth } from './context/AuthContext'
import './globals.css'
import { Inter } from 'next/font/google'
import { InvoiceContextProvider } from './context/InvoiceContext'
import 'react-toastify/dist/ReactToastify.css';
import { TimeIntervalContextProvider } from './context/TimeIntervalContext'
import SidebarPro from './components/SideBar/Sidebar'
import SidebarContextProvider from './context/SidebarContext'
import { useEffect, useState } from 'react'
import { document } from 'postcss'
import { motion } from 'framer-motion'




const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'IMS - Inventory Management System',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {

  const router = useRouter();

  const [isDark, setIsDark] = useState('');


  useEffect(() => {
    const savedMode = localStorage.getItem('isDark');
    if (savedMode) {
      setIsDark(savedMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('isDark', isDark)
  }, [isDark])

  return (

    <html lang="en">

      <body className={`${inter.className} ${isDark === 'dark' && 'dark'}`}>
        <AuthContextProvider>
          <SidebarContextProvider>
            <TimeIntervalContextProvider>
              <InvoiceContextProvider>
                <ProtectedRoute router={router} >
                  <div className="drawer lg:drawer-open dark:bg-secondary">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className=" overflow-hidden drawer-content flex flex-col items-center justify-center dark:bg-secondary">
                      {/* Page content here */}

                      <Navbar isDark={isDark} setIsDark={setIsDark} />
                      {children}
                    </div>
                    <div
                      className="drawer-side"
                    >
                      <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                      <ul className="menu  w-80 min-h-full bg-secondary dark:bg-neutral   text-accent ">
                        <Sidebar />
                      </ul>

                    </div>
                  </div>
                </ProtectedRoute>
              </InvoiceContextProvider>
            </TimeIntervalContextProvider>
          </SidebarContextProvider>
        </AuthContextProvider>
      </body>
    </html>

  )
}

