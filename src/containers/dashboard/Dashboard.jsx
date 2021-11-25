import React, { Component, useState } from "react";
import Header from "../../components/Header";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../../components/Footer";
import Styles from "./Dashboard.module.css";
import ProfileInfo from "./components/ProfileInfo";
import CalorieStats from "./components/CalorieStats";
import TabsGroup from "./components/TabsGroup";
import ModalSaveCalorie from "./components/ModalSaveCalorie";
import GqlDashboard from "../../graphql/GqlDashboard";

export default function Dashboard() {
  return (
    <div className={Styles.backgroundPattren}>
      <Header />
      <div className="container max-w-screen-lg mx-auto">
        <div className="flex flex-col justify-center bg-white m-4 mt-8 rounded-md shadow-2xl">
          <ProfileInfo />
          <CalorieStats />
          <div className="mx-4 mb-4 ">
            <TabsGroup historyData={GqlDashboard().DataGetHistory} loading={GqlDashboard().LoadingGetHistory} />
          </div>
        </div>
      </div>
      <br />
      <Footer />
      {/* Modal Calorie Need */}
      <ModalSaveCalorie />
    </div>
  );
}
