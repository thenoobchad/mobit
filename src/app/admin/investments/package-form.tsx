"use client";

import { useState } from "react";

import { MdAddBox, MdCancel } from "react-icons/md";

import { createPackage } from "@/actions/admin";

[].forEach((item) => {
  console.log(item);
});

export const PackageForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    title: "",
    minInvestment: "",
    noteone: "",
    notetwo: "",
    notethree: "",
    notefour: "",
    description: "",
  });

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  // useEffect(() => {
  //     console.log(data)
  // }, [data])

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("minInvestment", data.minInvestment);
    formData.append("description", data.description);
    formData.append("noteone", data.noteone);
    formData.append("notetwo", data.notetwo);
    formData.append("notethree", data.notethree);
    formData.append("notefour", data.notefour);

    const res = await createPackage(formData);
   
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex cursor-pointer gap-2"
      >
        <MdAddBox size={20} color="green" />
        Add Plan
      </button>

      {isOpen && (
        <div className="absolute top-0 right-0 flex h-screen w-screen flex-col items-center justify-center bg-black/20">
          <form
            onSubmit={onSubmitHandler}
            className="min-w-[310px] bg-zinc-100 p-4"
          >
            <div className="flex items-center justify-between py-2">
              <p>Create new plan</p>
              <button onClick={() => setIsOpen(false)}>
                <MdCancel color="red" size={20} />
              </button>
            </div>
            <div>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={onInputChange}
                placeholder="e.g. Starter Plan"
                className="h-10 w-full border border-zinc-300 px-2 focus:outline-none"
              />
            </div>
            <div className="flex w-full gap-2">
              <div className="pb-4">
                <p className="py-1 text-sm text-zinc-700">Min investment</p>
                <div className="flex items-center gap-2">
                  <input
                    onChange={onInputChange}
                    type="text"
                    name="minInvestment"
                    value={data.minInvestment}
                    placeholder="eg. $ 500"
                    className="h-10 w-[150px] border border-zinc-300 px-2 focus:outline-none"
                  />
                  <p>USD</p>
                </div>
              </div>
            </div>
            <p className="py-1 text-sm text-zinc-700">Bullet Notes</p>
            <div className="flex w-full flex-col gap-2">
              <input
                type="text"
                name="noteone"
                value={data.noteone}
                onChange={onInputChange}
                placeholder="e.g. Full customer support..."
                className="h-10 w-full border border-zinc-300 px-2 focus:outline-none"
              />
              <input
                onChange={onInputChange}
                type="text"
                name="notetwo"
                value={data.notetwo}
                placeholder="Enter point..."
                className="h-10 w-[100%] border border-zinc-300 px-2 focus:outline-none"
              />
              <input
                onChange={onInputChange}
                type="text"
                name="notethree"
                value={data.notethree}
                placeholder="Enter point..."
                className="h-10 w-[100%] border border-zinc-300 px-2 focus:outline-none"
              />
              <input
                onChange={onInputChange}
                type="text"
                name="notefour"
                value={data.notefour}
                placeholder="Enter point..."
                className="h-10 w-[100%] border border-zinc-300 px-2 focus:outline-none"
              />
            </div>
            <div className="">
              <p className="py-1 text-zinc-700">Description:</p>
              <textarea
                onChange={onTextAreaChange}
                name="description"
                value={data.description}
                placeholder="Enter decription.."
                rows={3}
                className="w-full border border-zinc-300 px-2 focus:outline-none"
              />
            </div>

            <button className="my-3 h-10 w-full bg-zinc-900 font-semibold text-zinc-50">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};
