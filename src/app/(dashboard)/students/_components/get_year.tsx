export default function StudentYear({ year }: { year: string }) {
  if (year === "first_year") {
    return <p className="px-3 bg-purple-100 border border-purple-400 text-purple-800 w-fit rounded-full text-xs">First Year</p>;
  }
  if (year === "second_year") {
    return <p className="px-3 bg-red-100 border border-red-400 text-red-800 w-fit rounded-full text-xs">Second Year</p>;
  }
  if (year === "third_year") {
    return <p className=" px-3 bg-yellow-100 border border-yellow-400 text-yellow-800 w-fit rounded-full text-xs ">Third Year</p>;
  }
  if (year === "final_year") {
    return <p className="px-3 bg-green-100 border border-green-400 text-green-800 w-fit rounded-full text-xs">Final Year</p>;
  }
  if (year === "graduate") {
    return <p className="px-3 bg-blue-100 border border-blue-400 text-blue-800 w-fit rounded-full text-xs">Graduate</p>;
  }

  return <p className=" capitalize">{year.replaceAll("_", " ")}</p>;
}
