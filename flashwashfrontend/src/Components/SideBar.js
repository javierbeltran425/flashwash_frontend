const SideBar = () => {
    return (
      <>
        <nav className="absolute lg:w-24 lg:bg-opacity-0 lg:h-4/6 lg:mb-5 left-0 w-1/5 h-screen  flex justify-center px-2 py-3 bg-blue-300 mb-1 z-10">
            <ul className="flex flex-wrap items-center my-10 mx-1">
              <li className="transform -rotate-90 lg:text-white"><a href="#Pablo">Acerca de nosotros</a></li>
              <li className="transform -rotate-90 lg:text-white"><a href="#Pablo">Servicios</a></li>
              <li className="transform -rotate-90 lg:text-white"><a href="#Pablo">Productos</a></li>
              <li className="transform -rotate-90 lg:text-white lg:hidden"><a href="#Pablo">Contacto</a></li>
            </ul>
        </nav>
      </>
    );
  };
  
  export default SideBar;
  