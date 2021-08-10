import React from "react";
import { ISkill } from "../type";

const Bar: React.FC<{ data: ISkill }> = ({ data: { Icon, level, name } }) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-500">
      <div className="flex px-4 py-1 rounded-full item-center bg-gradient-to-r from-blue to-blue-400"
      style={{width: level}}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
