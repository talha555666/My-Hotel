


function  Home () {
    return(
        <div className="bg-white p-8 rounded-lg mb-5">
         {/* welcome f meseg */}
        <div className="text-center  p-5">
             <h2 className="text-4xl text-red-300 ">Welcome to Recipe Hub 🍳</h2>
         <h4 className="text-3xl text-red-300" >Your favorite place to find amazing recipes.</h4>
        </div>
           {/* welcome  e meseg */}  

           {/* pic and text f */}

           <div className="flex items-center justify-around bg-orange-200 p-7 rounded-lg">
               <div>
                            <h3 className="text-2xl text-red-700">This is Bangali Food</h3>
            <p className="text-2xl">if you take the food so please click the button </p>
            <button className="btn btn-outline btn-primary">Success</button>
   </div>
            <img className="w-1/6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdGlAxJcQhHuEBj1mZoNCWN9CH9DFFlt4Yg&s" alt="" />

           </div>
            {/* pic and text e */}

            {/*  last pic and text f */}
            <div className="flex justify-around p-8 items-center">
                <div>
                      <h3 className="text-2xl text-red-700">Our amazing recipes</h3>
            <p className="text-2xl text-purple-200">if you take the food so please click the button </p>
            <button className="btn btn-active btn-seccess">Success</button>
                </div>
                <img className="w-4/12 rounded-xl" src="https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger-1024x538.png" alt="" />

            </div>
            {/*  last pic and text e */}
 

        </div>
    )
}
export default Home;