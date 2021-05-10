const FactCard = () => {
    return (
      <>
        <div className="min-h-screen bg-gray-200 flex justify-center items-center">
          <div className="max-w-xs bg-white border-2 rounded-l-xl rounded-b-xl border-gray-300 p-3 rounded-md tracking-wide shadow-lg">
            <div id="header" class="flex items-center mb-2">
              <div id="header-text" class="leading-5 ml-3 xs">
                <h4 id="Title" className="text-xl font-semibold text-blue-600">
                  ¿Sabías qué...?
                </h4>
              </div>
            </div>
            <div id="caption">
              <q className="italic text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default FactCard;
  