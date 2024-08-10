import Carousel from "../component/Carousel"
import { useState } from 'react';
import Dropdown from './Dropdown';

const Waitlist = () => {  
    const [isFormVisible, setFormVisible] = useState(false);

    const handleButtonClick = () => {
        setFormVisible(!isFormVisible);
    };
    return (
        <div className="">
            {/* navbar */}
            <div className="flex items-center justify-between w-[100%] h-[94px] px-[5%] border-[#22222214] shadow-sm ">
                <img src="images/Navlogo.png" className="Brand" alt="" />
                <button className="w-[116px] h-[40px] bg-[#6200EE] hover:bg-[#49237e] text-[14px] font-[500] text-[#FFFFFF] rounded">Join the waitlist</button>
            </div>
            {/* banner */}
            <div className="app-container">
            <Carousel />
            <div className="content">
                <div className="flex w-[100%] h-auto flex-col items-center bg-transparent">
                    <div className="flex gap-10">
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Sci-fi</p>
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Body Horror</p>
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Romance</p>
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Thriller</p>
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Suspense</p>
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Horror</p>
                        <p className="text-[24px] font-[400] text-[#ffff] hover:font-[700]">Mystery</p>
                    </div>
                    <div className="mt-5">
                        <h1 className="w-[1137px] font-[700] text-[64px] leading-[96px] text-center text-[#FFFFFF]">Cut. Scene. Booked. Find your perfect film location. Faster. Easier.</h1>
                        <p className="text-18px mt-5 text-[#FFFFFF] text-center">The all-in-one platform connecting filmmakers with unique spaces.</p>
                    </div>
                    <button onClick={handleButtonClick} className="w-[200px] h-[40px] bg-[#6200EE] hover:bg-[#49237e] text-[14px] font-[500] text-[#FFFFFF] mt-10 rounded">
                        Join the waitlist
                    </button>
                    <Dropdown isVisible={isFormVisible} />
                </div>
            </div>
        </div>
            {/* be the first to film */}
            <div className="flex flex-col items-center justify-center mt-[100px] px-[5%]">
                <p className="w-[600px] text-center mt-4 text-[18px] font-[700] text-[#6200EE] ">Be the First to Film!</p>
                <h3 className="w-[974px] h-auto text-[48px] text-center text-[#222222] font-[700]">Stop Location Scouting Headaches.</h3>
                <p className="w-[600px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">Spend less time searching, more time creating. bOur extensive library of unique spaces lets you browse, filter, and book your dream location in minutes.</p>
                <div className="flex items-center justify-items-center mt-10">
                    <div className="flex flex-col items-center ">
                        <img src="images/film3.png" className="w-[64px] h-[64px]" alt="" />
                        <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Seamless Search</p>
                        <p className="w-[410px] text-center mt-4 text-[16px] font-[400] font-500 text-[#6B6B6B]">Refine your vision with detailed filters by location,style, amenities, and budget.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="images/film2.png" className="w-[64px] h-[64px]" alt="" />
                        <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] mt-4 text-center">Streamlined Booking</p>
                        <p className="w-[410px] text-center mt-4 text-[16px] font-[400] font-500 text-[#6B6B6B]">Secure your location with instant quotes and secure online booking.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="images/film1.png" className="w-[64px] h-[64px]" alt="" />
                        <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">All-Inclusive Listings</p>
                        <p className="w-[410px] text-center mt-4 text-[16px] font-[400] font-500 text-[#6B6B6B]">Find transparent pricing including permits and insurance options.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-[100px] px-[5%]">
                <p className="w-[600px] text-center mt-4 text-[18px] font-[700] text-[#6200EE]">Be the First to Film!</p>
                <h3 className="w-[1000px] h-auto text-[48px] text-center text-[#222222] font-[700]">Turn Your Space into a Silver Screen Star.</h3>
                <p className="w-[600px] text-center mt-4 text-[18px] font-[400] font-500 text-[#6B6B6B]">Share your unique property with filmmakers and earn passive income. Its simple and secure.</p>
                <div className="flex items-center justify-items-center mt-10">
                    <div className="flex flex-col items-center ">
                        <img src="images/film.png" className="w-[64px] h-[64px]" alt="" />
                        <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Pre-Verified Filmmakers</p>
                        <p className="w-[410px] text-center mt-4 text-[16px] font-[400] font-500 text-[#6B6B6B]">Connect with qualified and insured production teams.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="images/film4.png" className="w-[64px] h-[64px]" alt="" />
                        <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] mt-4 text-center">Streamlined Communication</p>
                        <p className="w-[410px] text-center mt-4 text-[16px] font-[400] font-500 text-[#6B6B6B]">Manage bookings and inquiries directly through our secure platform.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="images/film1.png" className="w-[64px] h-[64px]" alt="" />
                        <p className="w-[433px] font-[500] text-[25px] text-[#1F1F1F] text-center mt-4">Effortless Listing</p>
                        <p className="w-[410px] text-center mt-4 text-[16px] font-[400] font-500 text-[#6B6B6B]">Create a free listing in minutes, showcasing your spaces best features.</p>
                    </div>
                </div>
                <button className="w-[200px] h-[40px] bg-[#6200EE] hover:bg-[#49237e] text-[14px] font-[500] text-[#FFFFFF] mt-10 rounded">Join the waitlist</button>
            </div>
            {/* enter email */}
            <div className="flex flex-col items-center justify-center mt-[100px] px-[5%]">
                <h3 className="w-[800px] h-auto text-[35px] text-center text-[#222222] font-[600]">Enter your email address to secure your spot and get notified when we launch</h3>
                <div className="mt-[20px] gap-4 flex items-center">
                    <input type="text" className="w-[300px] pl-[10px] border rounded border-[#6200EE] h-[50px]" placeholder="enter your Email Address" />
                    <button className="w-[120px] h-[50px]  bg-[#6200EE] hover:bg-[#49237e] text-[14px] font-[500] text-[#FFFFFF] rounded">Join the waitlist</button>
                </div>
            </div>
            {/* footer */}
            <div className="footer-container bg-[#290064] flex flex-col xl:mt-[80px] mt-[200px] items-center justify-center py-16">
      <div className='footer-sec w-[90%] md:w-11/12 lg:w-[90%] flex flex-wrap justify-between'>
        <div className='footer-text w-35'>
          <h4 className="text-white text-2xl font-bold mb-4">Company</h4>
          <p className="text-white text-base mb-4">About Us</p>
          <p className="text-white text-base mb-4">Contact Us</p>
          <p className="text-white text-base mb-4">Services</p>
          <p className="text-white text-base mb-4">Careers</p>
          <p className="text-white text-base mb-4">Blog</p>
          <p className="text-white text-base mb-4">Terms</p>
          <p className="text-white text-base mb-4">Privacy</p>
        </div>
        <div className='footer-text w-35'>
          <h4 className="text-white text-2xl font-bold mb-4">Support</h4>
          <p className="text-white text-base mb-4">Help Center</p>
          <p className="text-white text-base mb-4">FAQ</p>
          <p className="text-white text-base mb-4">Community</p>
          <p className="text-white text-base mb-4">Resource Center</p>
          <p className="text-white text-base mb-4">Trust and Safety</p>
          <p className="text-white text-base mb-4">Report vulnerability</p>
        </div>
        <div className='footer-text w-35'>
          <h4 className="text-white text-2xl font-bold mb-4">Host</h4>
          <p className="text-white text-base mb-4">List Your Space</p>
          <p className="text-white text-base mb-4">Community</p>
        </div>
        <div className='footer-text w-35'>
          <h4 className="text-white text-2xl font-bold mb-4">Countries</h4>
          <p className="text-white text-base mb-4">Nigeria</p>
          <p className="text-white w-auto text-base mb-4">South Africa</p>
          <p className="text-white text-base mb-4">Ghana</p>
          <p className="text-white text-base mb-4">Mali</p>
          <p className="text-white text-base mb-4">Ivory Coast</p>
        </div>
        <div className='footer-text w-32'>
          <h4 className="text-white text-2xl font-bold mb-4">Activities</h4>
          <p className="text-white text-base mb-4">Production</p>
          <p className="text-white text-base mb-4">Filming</p>
          <p className="text-white text-base mb-4">Music Videos</p>
          <p className="text-white text-base mb-4">Photo Shoot</p>
          <p className="text-white text-base mb-4">Meeting</p>
          <p className="text-white text-base mb-4">View All</p>
        </div>
      </div>
      <div className="w-[90%] h-[1px] bg-[#F5F5F5] mt-[20px]"></div>
      <div className='foot-footer w-70 md:w-11/12 lg:w-[90%] mt-[20px] flex items-center justify-between'>
        <p className='text-white w-3/5 text-base lg:text-lg xl:text-xl'>
          © 2024 Skouta. Made with ❤️ in Nigeria. All rights reserved
        </p>
        <div className='social-icons flex'>
          <img src="images/fb.png" alt="Facebook" className='footer-icons mr-4' />
          <img src="images/microsoft.png" alt="Microsoft" className='footer-icons mr-4' />
          <img src="images/apple.png" alt="Apple" className='footer-icons mr-4' />
          <img src="images/google.png" alt="Google" className='footer-icons mr-4' />
        </div>
      </div>
    </div>
        </div>
    )
}

export default Waitlist