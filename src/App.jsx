import React from "react";
import useFetch from "./useFetch";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );

  if (loading)
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-lg text-gray-600">Loading...</div>
        </div>
    );

if (error)
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-lg text-red-500">Error: {error}</div>
        </div>
    );


  const getRandomColor = () => {
    const colors = [
      "bg-red-200",
      "bg-blue-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-purple-200",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const url1 = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
  const url2 = "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww";
  const url3 = "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZX"


  return (
    <div className="max-w-7xl mx-auto p-6">


     <h1 className="text-3xl font-bold text-center fixed inset-1 flex items-start justify-center text-white mt-5">
    Photo Gallery 
    </h1>

      <div className="flex gap-5">
        <div className="flex flex-wrap justify-center gap-[20%] mt-[2%]">
          {data.map((item) => (
            <div
              key={item.id}
              className="w-64 p-4 rounded-lg border-2 bg-white border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mt-10"
            >
              <div className="bg-white p-5 rounded-lg">
                <img
                  src={item.id %2 ==0 ? url1 :  item.id %3 == 0 ? url2 : url3}
                  alt={item.id}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-bold mb-2">Card</h2>
                <p className="text-gray-700 mb-4">Price: $100</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
