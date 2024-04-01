import React from "react";

export function ForumComment({
  title = "Placeholder Title",
  content = "Placeholder Content",
  author = "Placeholder Author",
  date = "Placeholder Date",
  photo = "Placeholder Photo URL",
}) {
  return (
      <div className="flex items-start p-4 ">
        <div className="flex flex-col items-center justify-center border-r-2 border-gray-200 pr-4 w-1/5">
          <img
            src={"https://source.unsplash.com/random/500x500"}
            alt="Author"
            className="mb-2 rounded-full w-24 h-24 object-cover"
          />
          <h2 className="text-xl font-bold mb-2">{author}</h2>
        </div>
        <div className="flex flex-col justify-between pl-4 w-4/5">
          <p className="text-sm text-gray-500">{date}</p>
          <p className="text-gray-700 text-left">{content}</p>
        </div>
      </div>
  );
}
