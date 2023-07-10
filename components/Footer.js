import React from 'react'
import { useDispatch } from 'react-redux'
import { setCategory } from '../store/action';

function Footer() {
    const dispatch = useDispatch();

    const handleCategoryChange = (category) => {
       dispatch(setCategory(category))
      }
  return (
    <div>
        
<footer class="bg-white  dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 All Rights Reserved.
    </span>
    {/* <button onClick={() => handleCategoryChange('business')}>Business</button> */}

    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" onClick={() => handleCategoryChange("")} class="mr-4 hover:underline md:mr-6 ">All</a>
        </li>
        <li>
            <a href="#" onClick={() => handleCategoryChange("busines")} class="mr-4 hover:underline md:mr-6">Business</a>
        </li>
        <li>
            <a href="#" onClick={() => handleCategoryChange("entertaiment")} class="mr-4 hover:underline md:mr-6">Entertainment </a>
        </li>
        <li>
            <a href="#" onClick={() => handleCategoryChange("health")} class="mr-4 hover:underline md:mr-6">Health </a>
        </li>
        <li>
            <a href="#" onClick={() => handleCategoryChange("science")} class="mr-4 hover:underline md:mr-6">Science </a>
        </li>
        <li>
            <a href="#" onClick={() => handleCategoryChange("sports")} class="mr-4 hover:underline md:mr-6">Sports </a>
        </li>
        <li>
            <a href="#" onClick={() => handleCategoryChange("technology")} class="mr-4 hover:underline md:mr-6">Technology </a>
        </li>
    </ul>
    </div>
</footer>

    </div>
  )
}

export default Footer