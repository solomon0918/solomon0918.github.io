import * as React from "react"

import Seo from "../components/seo"
import { Button } from "@mui/material"

const NotFoundPage = () => (
  <div className="bg-gradient-to-r via-blue-500 to-purple-600 h-screen mb-7">
    <div className="container mx-auto px-10 h-full">
      <div
        className="flex flex-col h-full justify-center items-center content-center">
        <div className="text-center">
          <div className="bg-white px-20 p-16">
            <h1 className="!text-9xl text-primary_light">404</h1>
            <h2 className=" uppercase text-center font-bold text-primary_dark">Opps! Page not found</h2>
            <p className="py-3 text-[19px]">Sorry, the page you're looking for doesn't exist. If you think something is broken, please contact us.</p>
            <div className="flex space-x-4 items-center py-3 justify-center">
              <Button variant="contained" href="/">Go Back</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
