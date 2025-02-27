import React, { useState } from 'react'
import imag1 from '../../assets/Img/headphone.jpg'
import { BsDisplay } from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import { AiOutlineCamera } from "react-icons/ai";
import { BsBatteryCharging } from "react-icons/bs";
import { BsMemory } from "react-icons/bs";
import { BiMemoryCard } from "react-icons/bi";
import { PiAndroidLogoLight } from "react-icons/pi";

import fs from "fs";
import path from 'path';
import Productiondetail from './Productiondetail';
import ProductDesc from './ProductDesc';
import ProductPrice from './ProductPrice';

import productDataFile from './ProductData.json';
import Review from '../Users/Review';

import UserRating from '../Users/UserRating';

function Productdisp() {

    const [c1, setC1] = useState(true);
    const [c2, setC2] = useState(true);
    
    const specs = [
        {
            specsName: "Display",
            iconname: <BsDisplay className='text-4xl' />,
            detail: "6.72-inch <br/> (2400x1080)",
        },
        {
            specsName: "Processor",
            iconname: <GiProcessor className='text-4xl' />,
            detail: "MediaTex Dimensity 6100+",
        },
        {
            specsName: "Front Camera",
            iconname: <AiOutlineCamera className='text-4xl' />,
            detail: "8mp",
        },
        {
            specsName: "Rear Camera",
            iconname: <AiOutlineCamera className='text-4xl' />,
            detail: "64mp + 2mp",
        },
        {
            specsName: "Battery Capacity",
            iconname: <BsBatteryCharging className='text-4xl' />,
            detail: "5000mAh",
        },
        {
            specsName: "Ram",
            iconname: <BsMemory className='text-4xl' />,
            detail: "4GB, 6GB",
        },
        {
            specsName: "Storage",
            iconname: <BiMemoryCard className='text-4xl' />,
            detail: "128GB",
        },
        {
            specsName: "Os",
            iconname: <PiAndroidLogoLight className='text-4xl' />,
            detail: "Android 13",
        },
    ]

    // const specs = productDataFile.specs

    const disSpec = productDataFile.disSpec;
    const x = productDataFile.x;
    const hwSpec = productDataFile.hwSpec;
    const cameraSpec = productDataFile.cameraSpec;

    var arr=0;
    return (
        <>
            <div className='mt-7 '>
                <div className="productDetail w-4/5 bg-white m-auto p-5 flex flex-row">

                    {/* Left Side Bar  with product picture and prizing Start */}
                    <div className='flex w-2/5 flex-col'>
                        <div className="productImageSection flex">
                            {/* image Section section */}
                            <div className="imageSelection flex flex-col w-fit">
                                <div className="images p-2 border mb-2">
                                    <img className='w-15 h-20' src={imag1} alt="image of product 1" />
                                </div>
                                <div className="images p-2 border mb-2">
                                    <img className='w-15 h-20' src={imag1} alt="image of product 2" />
                                </div>
                            </div>

                            <div className="mainProductImage ml-4">
                                <img className='h-96 rounded' src={imag1} alt="" />
                            </div>
                        </div>

                        <div className='text-black mt-10'>
                            <div className='text-xl p-4'>Samsung S21 Price</div>
                            <div className='p-2 border rounded-lg bg-slate-100'>
                                <ProductPrice/>
                                <ProductPrice/>
                                <ProductPrice/>
                                <ProductPrice/>
                                {/* <div className='py-8'>
                                    Samsung S21 price in India starts from ₹ 90,000. The lowest price of Samsung S21 is ₹ 90,000 at Amazon on 30st October 2023.
                                </div> */}
                                <hr />
                                <div className='flex justify-center pt-8'>
                                    <div className='flex-col text-center'>
                                        <div>Price too high? Wait for upcoming Sale.</div>
                                        <button className='bg-slate-400 w-fit p-1 mb-8 border rounded-lg text-white'>
                                        Get Notification for Sale
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Left Side Bar  with product picture and prizing End */}


                    {/* FROM HERE RIGHT SIDE CONTENT START */}
                    <div className="productInformation ml-10 w-3/5">
                        <div className="headingPart">
                            <h1 className='text-gray-700 m-3 text-xl'>Key Specs</h1>
                            <div className='px-2 pt-2  border bg-gray-200 rounded-3xl'>
                                <div className="keySpecsCardDetail text-gray-500 bg-white  border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-auto p-5 rounded-3xl">

                                {/* Dynamic Spes using Array of map Start */}
                                    {
                                        specs.map((item, index) =>
                                            <div className='Specs flex' key={index}>
                                                <div className='specsLogo '>
                                                    {item.iconname}
                                                </div>
                                                <div className='ml-2'>
                                                    <h4 className=''>{item.specsName}</h4>
                                                    <p className='flex flex-col'><span>6.72-inch</span> <span>(2400x1080)</span> </p>
                                                </div>
                                            </div>
                                        )
                                    }

                                {/* Dynamic Spes using Array of map End */}

                                </div>
                                <div>
                                    <div className='text-center text-gray-500 flex  justify-evenly m-1'>
                                        <div>
                                            <div className='flex flex-col '>
                                                <span className='text-gray-500 text-sm'>Market Status</span>
                                                <span className='text-base text-gray-800'>Released</span>
                                            </div>
                                        </div>
                                        <div className='h-7 w-0.5 bg-gray-400 m-2'></div>
                                        <div>
                                        <div className='flex flex-col '> 
                                            <span className='text-gray-500 text-sm'>Release Date</span>
                                            <span className='text-base text-gray-800'>6th Sep 2023</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        {/* Production Detail Start from here  */}
                        <Productiondetail/>
                        <div className='relative top-0 align-text-bottom'>
                            <div className={`${ c1 ? "h-[600px] overflow-hidden":"h-full overflow-visible"}`}>
                                <p className='text-3xl text-black font-normal mt-10'>Samsung S21 Full Specifications</p>
                                <p className='bg-slate-100 text-3xl text-black p-5 pb-0 rounded-t-lg mt-2'>General</p>
                                <ProductDesc aprops={arr=x}/>
                                <p className='bg-slate-100 text-3xl text-black p-5 pb-0 rounded-t-lg mt-2'>Display</p>
                                <ProductDesc aprops={arr=disSpec}/>
                                <p className='bg-slate-100 text-3xl text-black p-5 pb-0 rounded-t-lg mt-2'>Hardware</p>
                                <ProductDesc aprops={arr=hwSpec}/>
                                <p className='bg-slate-100 text-3xl text-black p-5 pb-0 rounded-t-lg mt-2'>Camera</p>
                                <ProductDesc aprops={arr=cameraSpec}/>
                                <button className='flex justify-center text-sm cursor-pointer m-auto px-3  rounded-full  bg-gray-700 text-white py-2 border border-gray-700 hover:bg-white hover:text-gray-700 mt-5 shadow-lg shadow-slate-700' onClick={()=>{setC1(true); setC2(true)}}>show less</button>
                            </div>
                            <div className={`bg-gradient-to-t from-white flex justify-center w-full align-text-bottom h-40 text-sm absolute bottom-0 font-normal text-blue-600 ${ c2 ? "visible":"hidden"}`}>
                                <button className='h-fit absolute bottom-0 cursor-pointer  px-3 rounded-full  bg-gray-700 text-white py-2 border border-gray-700 hover:bg-white hover:text-gray-700 shadow-lg shadow-slate-700' onClick={()=>{setC1(false); setC2(false)}}>Show more</button>
                            </div>
                        </div>


                        {/* Start new Components Rating From here  */}
                            <UserRating/>
                        {/* End new Components Rating From here  */}


                        {/* Start new Components Reviews From here  */}
                        {/* <Review/> */}
                        {/* End new Components Reviews From here  */}

                        {/* Production Detail End from here  */}
                    </div>
                    
                    {/* FROM HERE RIGHT SIDE CONTENT START */}
                </div>

                {/* Start new Components Reviews From here  */}
                        <Review/>
                {/* End new Components Reviews From here  */}
                
            </div>
        </>
    )
}

export default Productdisp