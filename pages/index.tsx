// import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { services } from "../data";
import ServicesCard from "../components/ServiceCard";

const index = () => {
  console.log("CLIENT", services);
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        To work in the position of a Developer with a company or an organization
        specializing in Computer Science.To work in the position of a Developer with a company or an organization
        specializing in Computer Science.To work in the position of a Developer with a company or an organization
        specializing in Computer Science
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold">What I Offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((services, index) => (
            <div className="bg-gray-200 rounded-lg dark:bg-dark-700 lg:col-span-1" key={index}>
              <ServicesCard services={services} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default index;
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   //calculation
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();

//   console.log("SERVER", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
/* 
export const getStaticProps = async (context: GetStaticPropsContext) => {
  //calculation
 /*  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();

  //  console.log("SERVER", services);

  return {
    props: {
      services: data.services,
    },
  }; 
}; */
