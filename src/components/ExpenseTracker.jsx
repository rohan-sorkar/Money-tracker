import { RiDeleteBin4Line } from "react-icons/ri";

const ExpenseTracker = () => {
  return (
    <div className="flex justify-center px-4 my-8 xs:mt-16">
      <div className="bg-white w-full xs:max-w-md rounded-2xl p-5 xs:p-8 shadow">
        <h1 className="text-2xl text-center font-medium shadow-sm shadow-purple-200">
          Expense Tracker
        </h1>
        <div>
          <h3 className="mt-5 xs:mt-10 text-sm font-bold">Your Balance</h3>
          <p className="text-xl">$25,000</p>
          <div className="flex justify-between shadow py-4 px-8 mt-6 rounded-2xl text-center divide-x-2 divide-slate-100">
            <div>
              <p className="text-sm font-medium text-gray-700">INCOME</p>
              <p className="text-emerald-400 text-lg">$32,000</p>
            </div>
            <div className="pl-5 xs:pl-20">
              <p className="text-sm font-medium text-gray-700">EXPENSE</p>
              <p className="text-red-400 text-lg">$20,000</p>
            </div>
          </div>

          <div className="mt-2 shadow p-4 rounded-xl">
            <input
              type="text"
              className="border outline-none rounded-xl py-2 px-4 border-purple-100 caret-purple-200 text-sm mb-2 w-full"
              placeholder="Search..."
            />
            <div className="flex gap-2">
              <button className="bg-blue-600 text-white border-2 border-blue-500 rounded-full py-1 px-2 xs:px-6">
                All
              </button>
              <button className="text-blue-700 border-2 border-blue-500 rounded-full py-1 px-2 xs:px-6">
                Income
              </button>
              <button className="text-blue-700 border-2 border-blue-500 rounded-full py-1 px-2 xs:px-6">
                Expense
              </button>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mt-6">Add new transaction</h3>
          <hr className="mt-2 border-[1px] border-purple-200" />
          <form className="shadow rounded-2xl mt-6 p-5">
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="border outline-none rounded-xl py-2 px-4 border-purple-100 caret-purple-200 text-sm mb-2"
                placeholder="Enter title..."
                name="title"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-medium text-gray-700 mb-1">Amount</label>
              <input
                type="number"
                className="border outline-none rounded-xl py-2 px-4 border-purple-100 caret-purple-200 text-sm mb-2"
                placeholder="Amount..."
                name="amount"
              />
            </div>
            <div className="flex gap-4 mb-2">
              <input
                type="radio"
                className="w-4 accent-green-400"
                name="isIncome"
              />
              <p className="text-slate-700 text-lg font-medium">Income</p>
            </div>
            <div className="flex gap-4 mb-2">
              <input
                type="radio"
                className="w-4 accent-red-400"
                name="isIncome"
              />
              <p className="text-slate-700 text-lg font-medium">Expense</p>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white w-full rounded-full py-1 mt-2 hover:bg-purple-600 transition"
            >
              Add transaction
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-medium mt-6">History</h3>
          <hr className="mt-2 border-[1px] border-purple-200" />

          <div className="mt-6 space-y-5">
            <div className="shadow rounded-2xl py-3 px-8 border-r-8 border-green-300">
              <p className="text-center font-medium border shadow-sm mb-2">
                sunday, 12/3/2023
              </p>
              <div className="flex justify-between items-center">
                <p className="capitalize">salary</p>
                <div className="cursor-pointer bg-red-100 px-2 py-2 rounded-full hover:bg-red-300 text-red-600">
                  <RiDeleteBin4Line />
                </div>
                <p>4,200</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ExpenseTracker;
