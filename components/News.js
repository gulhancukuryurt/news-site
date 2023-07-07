import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

function News() {
  const apiKey = "793d027de859456088f5f4915ccad5c7";
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("us");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: selectedCountry,
            category: selectedCategory,
            apiKey: apiKey
          }
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedCategory === "" && selectedCountry === "us") {
      fetchNews();
    }

   
  }, [selectedCategory, selectedCountry])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  }

  const handleCountryChange = (country) => {
    setSelectedCountry(country)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>

      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center align-top mb-20">
        <div className='absolute top-0'>
          <Image src="https://cdn-icons-png.flaticon.com/128/4125/4125857.png" width={100} height={100} className='justify-center' alt='' />

        </div>

      </div>
 
 {
  !isOpen && (
<div className='flex w-full md:flex-row max-sm:hidden'>
        
        <div className="flex flex-row w-1/2 justify-start" >
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("")}>All</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("business")}>Business</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("entertainment")}>Entertainment</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("health")}>Health</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("science")}>Science</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("sports")}>Sports</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("technology")}>Technology</button>

        </div>
        <div className="flex w-1/2 justify-end">
          <button className="bg-red-500 text-white rounded px-4 py-2 m-2 hover:bg-red-700 font-mono" onClick={() => handleCountryChange("tr")}>TR</button>
          <button className="bg-red-500 text-white rounded px-4 py-2 m-2 hover:bg-red-700 font-mono" onClick={() => handleCountryChange("us")}> US </button>
        </div>
      </div>
  )
 }
      

      <div className="md:hidden">
      <button
  className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono"
  onClick={() => setIsOpen(!isOpen)}
>
  Menu
</button>
      {isOpen && (
        <div className="flex flex-col">
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("")}>
            All
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("business")}>
            Business
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("entertainment")}>
            Entertainment
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("health")}>
            Health
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("science")}>
            Science
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("sports")}>
            Sports
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 m-2 hover:bg-blue-700 font-mono" onClick={() => handleCategoryChange("technology")}>
            Technology
          </button>
          <button className="bg-red-500 text-white rounded px-4 py-2 m-2 hover:bg-red-700 font-mono" onClick={() => handleCountryChange("tr")}>
            TR
          </button>
          <button className="bg-red-500 text-white rounded px-4 py-2 m-2 hover:bg-red-700 font-mono" onClick={() => handleCountryChange("us")}>
            US
          </button>
        </div>
      )}
    </div>


      <div className="flex flex-wrap justify-center m-5">
        {articles.map((article, index) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-row justify-center align-top m-5">
            <div key={index}>
              {article.urlToImage ? (
                <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
              ) : (
                <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png" alt={article.title} className="w-full h-40 object-cover rounded-t-lg" />
              )}           <h1 className='uppercase text-center text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 w-1/2'>{selectedCategory}</h1>
              <h1 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>{article.title}</h1>
              <h3 className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{article.description}</h3>
              <a href={article.url} target="_blank" class="inline-flex items-center mt-5 justify-end px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Read more
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
}

export default News;
