'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import SavedTable from './savedTable'
import { FlexContainer, PanelContent,Paragraph,TitlePadding } from './components/styles'
import { PlusIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <>
      <FlexContainer>
        <PanelContent>
          <TitlePadding>
            <h1 className="mt-0 mb-2 text-5xl font-medium leading-tight text-primary flex justify-center"> 
            Interactive Course Mapper</h1>
          </TitlePadding>
            <Paragraph> 
              This application is created as a tool for Monash University staff and students to quickly build and visualise the engineering course structure.
              It has been build as part of the Engineering Final Year Project by Arjun Girish, Jing Wu, Malith Liyanaarachchi.
            </Paragraph>
          <div>
            <button type="button" className="flex items-center mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              <PlusIcon className="h-6 w-6 text-white "></PlusIcon>
              <span > New Course Map</span>
            </button>
          </div>
          
          {/* INSERT NEW COURSE MAP BUTTON */}

          <h4 className=" mb-2 text-2xl font-medium leading-tight text-justify mt-11">
           Saved Course Maps </h4>

          <SavedTable></SavedTable>
        </PanelContent>
      </FlexContainer>  
      
    </>

    
  );
}
