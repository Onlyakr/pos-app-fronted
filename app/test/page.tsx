const page = () => {
  return (
    <div className="grid h-full max-h-[700px] w-full grid-cols-5 grid-rows-2 gap-2 p-5">
      <div className="col-span-3 rounded-lg bg-red-500"></div>
      <div className="col-span-2 row-span-2 rounded-lg bg-green-500"></div>
      <div className="col-span-3 rounded-lg bg-teal-500"></div>
    </div>
  );
};
export default page;
