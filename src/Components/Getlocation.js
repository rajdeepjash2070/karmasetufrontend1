import React, { useState } from "react";
import useGeoLocation from "./LocationGeo";
const Getlocation = () => {
    const location = useGeoLocation();
  return (
    <div>
    
    <div class="separator">Hook 3: User Geo Location Hook</div>

    <div className="row d-flex justify-content-center mt-3 mb-5 pb-5">
        <div className="col-6">
            <div class="card">
                <div class="card-header text-left font-weight-bold d-flex">
                    <div className="inline-block mr-auto pt-1">
                        {location.loaded
                            ? JSON.stringify(location.coordinates)
                            : "Location data not available yet."}
                    </div>
                </div>
            </div>
        </div>
    
    </div>
    </div>
  )
}

export default Getlocation