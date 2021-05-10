const SideBar = () => {
    return (
      <>
        <nav className="relative flex flex-shrink flew-wrap items-center justify-start px-2 py-3 bg-blue-300 mb-1 transform -rotate-90">
          <div className="w-auto relative flex justify-between lg:block lg:justify-start">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-contact">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Contacto</span>
                </a>
              </li>
              <li className="nav-service">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Servicios</span>
                </a>
              </li>
              <li className="nav-productos">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Productos</span>
                </a>
              </li>
              <li className="nav-about_us">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">Acerca de nosotros</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  };
  
  export default SideBar;
  