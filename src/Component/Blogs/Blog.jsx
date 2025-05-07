import React from "react";

const Blog = ({ blog }) => {
  const { title, author, author_img, cover_photo, reading_time, posted_date } =
    blog;
  return (
    <div>
      <img src={cover_photo} alt="" />
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="w-14 rounded-full mt-3" src={author_img} alt="" />
          <div className=" ml-4">
            <h1 className="text-xl">{author}</h1>
            <h1 className="text-sm">{posted_date}</h1>
          </div>
        </div>
        <div>
          <h1>{reading_time}</h1>
        </div>
      </div>
      <h1>Title : {title}</h1>
    </div>
  );
};

export default Blog;
