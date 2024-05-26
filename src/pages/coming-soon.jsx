import * as React from "react"

import Seo from "../components/seo"
import WhatshotIcon from '@mui/icons-material/Whatshot';

const ComingSoonPage = () => (
  <div className="h-screen mb-7">
    <div className="container mx-auto px-10 h-full">
      <div
        className="flex flex-col h-full justify-center items-center content-center">
        <div className="text-center">
          <div className="px-20">
            <WhatshotIcon className=" text-[50px] md:text-[80px] text-white" />
            <h1 className="text-7xl md:!text-9xl text-white font-extrabold uppercase text-shadow-lg">Coming <br/>Soon!</h1>
            <p className="py-3 text-[19px] text-white uppercase text-shadow-md">Stay Tuned!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Head = () => <Seo title="Coming Soon" />

export default ComingSoonPage
