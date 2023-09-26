import React from 'react'
import { FaBangladeshiTakaSign, FaChartLine, FaChartPie, FaChartSimple, FaCircleDot, FaDollarSign, FaHandHolding, FaSackDollar } from 'react-icons/fa6'
import LineChartDemo from '../Charts/LineChart'

const HomePage = () => {
    return (
        <div className='overflow-hidden w-full min-h-[100vh] py-4 px-6 '>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-6'>

                <div className="bg-white shadow p-4 rounded-md">
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2 items-center justify-between'>

                            <h3 className='text-xl font-bold'>Sales Overview</h3>
                            <FaChartSimple className='text-[#5A66F1] text-2xl' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='leading-3'>
                                <p className='font-b text-lg'>Total Sales: </p>
                                <small className='text-gray-500 '>in last week</small>
                            </div>
                            <div className='flex gap-2 '>
                                <FaBangladeshiTakaSign className='text-lg' />
                                <p className='font-bold text-lg'>20,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow p-4 rounded-md">
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2 items-center justify-between'>

                            <h3 className='text-xl font-bold'>Purchase Overview</h3>
                            <FaDollarSign className='text-[#5A66F1] text-2xl' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='leading-3'>
                                <p className='font-b text-lg'>Total Purchased: </p>
                                <small className='text-gray-500 '>in last week</small>
                            </div>
                            <div className='flex gap-2 '>
                                <FaBangladeshiTakaSign className='text-lg' />
                                <p className='font-bold text-lg'>20,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow p-4 rounded-md">
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2 items-center justify-between'>

                            <h3 className='text-xl font-bold '>Revenue Overview</h3>
                            <FaChartLine className='text-[#5A66F1] text-2xl' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='leading-3'>
                                <p className='font-b text-lg'>Total Revenue: </p>
                                <small className='text-gray-500 '>in last week</small>
                            </div>
                            <div className='flex gap-2 '>
                                <FaBangladeshiTakaSign className='text-lg' />
                                <p className='font-bold text-lg'>20,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow p-4 rounded-md">
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-2 items-center justify-between'>

                            <h3 className='text-xl font-bold'>Profit Overview</h3>
                            <FaSackDollar className='text-[#5A66F1] text-2xl' />
                        </div>
                        <div className='flex justify-between'>
                            <div className='leading-3'>
                                <p className='font-b text-lg'>Total Profit: </p>
                                <small className='text-gray-500 '>in last week</small>
                            </div>
                            <div className='flex gap-2 '>
                                <FaBangladeshiTakaSign className='text-lg' />
                                <p className='font-bold text-lg'>20,000</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='w-[100%] bg-white py-6 shadow-md rounded-lg pr-4 '>
                <div className='flex gap-6 mb-6 ml-6'>
                    <div className='flex gap-2 items-center'>
                        <FaCircleDot className='text-[#5A66F1]' />
                        <p>Total Sales</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaCircleDot className='text-[#82ca9d]' />
                        <p>Total Expenses</p>
                    </div>

                </div>
                <LineChartDemo />
            </div>
        </div>

    )
}

export default HomePage