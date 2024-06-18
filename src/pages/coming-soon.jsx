import * as React from "react"

import Seo from "../components/common/seo"
import WhatshotIcon from "@mui/icons-material/Whatshot"

const ComingSoonPage = () => (
  <div className="tw-mb-7 tw-h-screen">
    <div className="tw-container tw-mx-auto tw-h-full tw-px-10">
      <div className="tw-flex tw-h-full tw-flex-col tw-content-center tw-items-center tw-justify-center">
        <div className="tw-text-center">
          <div className="tw-px-20">
            <WhatshotIcon className="tw-text-[50px] tw-text-white md:tw-text-7xl" />
            <h1 className="tw-text-7xl tw-font-extrabold tw-uppercase tw-text-white tw-text-shadow-lg md:!tw-text-9xl">
              Coming <br />
              Soon!
            </h1>
            <p className="tw-py-3 tw-text-[19px] tw-uppercase tw-text-white tw-text-shadow-md">
              Stay Tuned!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const Head = () => <Seo title="Coming Soon" />

export default ComingSoonPage
