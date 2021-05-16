
import GenCard from '../Components/GenCard'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'

import banner from '../Resources/CarWash4.jpeg'
import FactCard from '../Components/FactCard'


const Home = () => {
    return(
        <>
            <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
                <img src={banner} className="hidden lg:flex lg:w-full lg:h-screen opacity-20"></img>
                <SideBar/>
                <div className="flex justify-center w-auto h-1/2 mb-20 md:hidden lg:hidden">
                    <GenCard />
                </div>
                <div className="hidden absolute lg:flex lg:right-0 lg:top-12 lg:opacity-80">
                    <FactCard />
                </div>
                <Footer/> 
            </div>
        </>
    )
}

export default Home