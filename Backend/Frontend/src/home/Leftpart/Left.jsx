import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

function Left() {
  return (
    <div
      className="w-full bg-black text-gray-300"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE and Edge
      }}
    >
      {/* Style for WebKit browsers */}
      <style>
        {`
          /* Hide scrollbar for WebKit-based browsers */
          .w-full::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <Search />
      <div
        className="flex-1 overflow-y-auto"
        style={{ minHeight: "calc(84vh - 10vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
}

export default Left;
