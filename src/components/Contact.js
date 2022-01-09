import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <div className="flex flex-col pt-20 w-screen h-screen bg-gray-100 ">
        <div className="text-4xl font-bold col-span-full text-center h-12">
          CONTACT
        </div>
        <div className="grid m-5 tablet:my-10 tablet:mx-20 h-screen tablet:flex">
          <div className="h-96 tablet:w-[70%] tablet:h-full relative border-2 border-gray-300 shadow-md">
            <Map
              className=" w-full h-full flex justify-center aling-center"
              google={this.props.google}
              style={{ width: "auto", height: "auto" }}
              zoom={11}
              initialCenter={{
                lat: 49.82016,
                lng: 20.5871,
              }}
            />
          </div>
          <div className="text-center flex flex-col tablet:justify-center tablet:w-[30%]">
            <p className="tablet:mt-6 font-bold">Adress:</p>
            <span>Iwkowa 735</span>
            <p className="tablet:mt-6 font-bold">Post code:</p>
            <span>31-862 Iwkowa</span>
            <p className="tablet:mt-6 font-bold">Phone number:</p>
            <span className="tablet:mb-6">+48 14 684 45 40</span>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDclr5CnCOlyrJQfGM3JiCY_5GQ9XaOIXI",
})(MapContainer);
