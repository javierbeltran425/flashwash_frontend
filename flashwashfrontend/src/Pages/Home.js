import GenCard from '../Components/GenCard'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'

const Home = () => {
    return(
        <>
            <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
                <SideBar/>
                <div className="flex justify-center w-auto h-1/2 md:hidden mb-20">
                    <GenCard />
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Home