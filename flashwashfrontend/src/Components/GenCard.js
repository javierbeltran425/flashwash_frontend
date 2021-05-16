import img from '../Resources/CarWash1.jpeg'

const GenCard = () => {
    return(
        <>
            <div className="flex flex-col flex-nowrap w-1/2 h-full ml-16 bg-white shadow-lg opacity-75  items-center rounded-t-full rounded-b-full">
                <img src={img} className="h-24 w-auto m-5 rounded-full shadow-lg"/>
                <h1 className="text-3xl text-purple-900">PACK #1</h1>
                <div className="w-full h-1/3">
                    <p className="p-5 break-all text-center">sjdvksbhvbkfgsngnrtbsrbsbsfbhvsvkhbfafbafgaergae</p>
                </div>
                <h2 className="flex text-4xl font-bold text-purple-900">
                    $15.00
                </h2>
            </div>
        </>
    )
}

export default GenCard