
import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const NewCourseMap = ({visible, onClose}) => {
    const handleOnClose = (e) => {
        if(e.target.id ==='container' ||e.target.id ==='modalClose') onClose();
    };

    if (!visible) return null;

  return (
    
    <div id = 'container'onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='relative w-full h-full max-w-md md:h-auto'>
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button id = 'modalClose'onClick={onClose}type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                    <XMarkIcon className="w-5 h-5" fill="currentColor"/>
                </button>
                
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="text-center mb-4 text-xl font-medium text-gray-900 dark:text-white">New Course Map Information!</h3>
                    <form className="space-y-6" action="#">
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Course Map Name</label>
                            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required/>
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commencement Year</label>
                            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required/>                            
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Study load</label>
                            <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"required/>                            
                        </div>
                        <div>
                            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Year 12 Units have you studied?</label>
                            <div className="flex justify-between">
                                <div className="flex items-center h-5">
                                    <input id="spec-maths" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="spec-maths" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VCE Specialists Maths 3/4</label>
                                </div>
                                <div className="flex items-center h-5">
                                    <input id="physics" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                                    <label htmlFor="physics" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">VCE Physics 3/4</label>
                                </div>         
                            </div>                         
                        </div>

                        <a href="/specialisationpage">
                            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit!</button>
                        </a>
                         
                    </form>
                </div>

         
        </div>
            
        </div>
    </div>
  )
}

export default NewCourseMap
