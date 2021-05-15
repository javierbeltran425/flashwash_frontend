import FactCard from './FactCard'
const Footer = () => {
    return(
        <>
            <div className="absolute ml-20 flex items-center h-1/4 w-72 bottom-0 overflow-x-auto">
                <FactCard />
                <FactCard />
                <FactCard />
                <FactCard />
                <FactCard />
            </div>
        </>
    )
}

export default Footer