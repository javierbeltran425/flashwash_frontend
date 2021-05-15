const FactCard = () => {
    return (
      <>
          <div className="w-1/2 h-3/4 m-2 bg-white border-2 rounded-xl border-gray-300 p-3 shadow-lg">
            <div id="header" class="flex items-center mb-2">
              <h4 className="font-bold text-blue-600">Sabias que..?</h4>
            </div>
            <div className="flex flex-wrap h-1/2 overflow-y-auto">
              <q className="italic text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              </q>
            </div>
          </div>
      </>
    );
  };
  
  export default FactCard;
  