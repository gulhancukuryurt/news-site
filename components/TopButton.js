import React, {useState,useEffect} from 'react'

function TopButton() {
    const [isVisible, setIsVisible] = useState(false);
    
    const handleScroll = () => {
        if(window.pageYOffset>300) {
            setIsVisible(true)
        }else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window, scrollTo ({top:0, behavior: 'smooth'})
        
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    },[])
    if(!isVisible) {
        return null
    }
  return (
    <div>
        <button className=' fixed bottom-10 right-20 p-5 shadow rounded-full bg-red-500' onClick={scrollToTop}><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
</svg></button>
    </div>
  )
}

export default TopButton