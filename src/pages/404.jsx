import * as React from "react"

import Seo from "../components/common/seo"
import { Button } from "@mui/material"

const NotFoundPage = () => (
  <div className="tw-mb-7 tw-h-screen tw-bg-gradient-to-r tw-via-blue-500 tw-to-purple-600">
    <div className="tw-container tw-mx-auto tw-h-full tw-px-10">
      <div className="tw-flex tw-h-full tw-flex-col tw-content-center tw-items-center tw-justify-center">
        <div className="tw-text-center">
          <div className="tw-bg-white tw-p-16 tw-px-20">
            <h1 className="!tw-text-9xl tw-text-secondary">404</h1>
            <h2 className="tw-text-center tw-font-bold tw-uppercase tw-text-primary">
              Opps! Page not found
            </h2>
            <p className="tw-py-3 tw-text-[19px]">
              Sorry, the page you're looking for doesn't exist. If you think
              something is broken, please contact us.
            </p>
            <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4 tw-py-3">
              <Button variant="contained" href="/">
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
