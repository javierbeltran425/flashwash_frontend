const Card = () => {

    return (
        <>
        <div className="w-72 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
              <div className="flex items-center mb-4">
                <img className="w-20 rounded-full border-2 border-gray-300"
                  src="https://picsum.photos/seed/picsum/200"
                />
                <div className="leading-5 ml-6 sm">
                  <h4 className="text-xl font-semibold">
                    John Doe
                  </h4>
                  <h5 className="font-semibold text-blue-600">
                    Designer
                  </h5>
                </div>
              </div>
              <div>
                <q className="italic text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </q>
              </div>
            </div>
        </>
    );
}

export default Card