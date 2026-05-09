import React, { useEffect, useState } from "react";

const Form = ({ type, onSubmit, initialData }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    category: "",
    description: "",
    image: "",
  });

  // 🔥 Fill form when editing
  useEffect(() => {
    if (initialData) {
      setData({
        title: initialData.title || "",
        subtitle: initialData.subtitle || "",
        category: initialData.category || "",
        description: initialData.description || "",
        image: "", // file reset (important)
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="container my-3 px-4 lg:px-20">

        <div className="w-full p-8 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl mx-25">

          <h1 className="font-bold uppercase text-5xl">
            {type} Blog
          </h1>

          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">

              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Title"
                className="input"
              />

              <input
                type="text"
                name="subtitle"
                value={data.subtitle}
                onChange={handleChange}
                placeholder="Subtitle"
                className="input"
              />

              <input
                type="file"
                name="image"
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="category"
                value={data.category}
                onChange={handleChange}
                placeholder="Category"
                className="input"
              />

            </div>

            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full h-32 mt-4 p-3 bg-gray-100 rounded-lg"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded"
            >
              {type}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Form;