import { useLoaderData } from "react-router-dom";

function Recipes() {
  const data = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto bg-slate-200 px-3 m-5 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-400 text-center mb-4 sm:mb-6 lg:mb-8">
        Our Special Recipes
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
        {data.map((item) => (
          <div key={item.id} className="flex justify-center">
            <div className="card bg-rose-200 w-full max-w-xs sm:max-w-sm shadow-xl">
              <figure className="px-3 pt-3 sm:px-4 sm:pt-4">
                <img
                  src="https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg"
                  className="rounded-xl w-full h-36 sm:h-44 md:h-48 object-cover"
                  alt={item.name}
                />
              </figure>
              <div className="card-body items-center text-center p-3 sm:p-4 lg:p-6">
                <h2 className="card-title text-sm sm:text-base lg:text-lg">{item.name}</h2>
                <p className="text-xs sm:text-sm lg:text-base">{item.price}</p>
                <div className="card-actions mt-1 sm:mt-2">
                  <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
