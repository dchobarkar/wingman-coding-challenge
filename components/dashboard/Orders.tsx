"use client";

import Image from "next/image";
import { useState } from "react";

import PageLayout from "../shared/PageLayout";
import { ordersData, Order } from "./ordersData";

const PAGE_SIZE = 4;

const Orders = () => {
  const [sortBy, setSortBy] = useState<keyof Order>("date");
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(1);

  const sorted = [...ordersData].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortAsc ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortAsc ? 1 : -1;
    return 0;
  });
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const totalPages = Math.ceil(ordersData.length / PAGE_SIZE);

  const handleSort = (field: keyof Order) => {
    if (sortBy === field) setSortAsc(!sortAsc);
    else {
      setSortBy(field);
      setSortAsc(true);
    }
  };

  return (
    <PageLayout>
      <h2 className="text-2xl font-geist-sans mb-6">Orders</h2>
      <div className="bg-white rounded-[20px] shadow p-0 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th
                className="px-6 py-4 text-left cursor-pointer"
                onClick={() => handleSort("productName")}
              >
                Product
              </th>
              <th
                className="px-6 py-4 text-left cursor-pointer"
                onClick={() => handleSort("date")}
              >
                Date
              </th>
              <th
                className="px-6 py-4 text-left cursor-pointer"
                onClick={() => handleSort("timeSpent")}
              >
                Time spent
              </th>
              <th
                className="px-6 py-4 text-left cursor-pointer"
                onClick={() => handleSort("orderValue")}
              >
                Order Value
              </th>
              <th
                className="px-6 py-4 text-left cursor-pointer"
                onClick={() => handleSort("commission")}
              >
                Commission
              </th>
              <th className="px-6 py-4 text-right">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <Image
                    src={order.productImage}
                    alt={order.productName}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="truncate max-w-[120px]">
                    {order.productName}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.timeSpent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.orderValue}
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  {order.commission}
                </td>
                <td className="px-6 py-4 text-right">
                  <a
                    href={order.chatLink}
                    className="flex items-center gap-1 text-primary hover:underline"
                  >
                    View Chat
                    <Image
                      src="/svg/ArrowUpRight.svg"
                      alt="View Chat"
                      width={16}
                      height={16}
                    />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 px-6 py-4 border-t border-gray-100">
          <button
            className="px-3 py-1 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="text-gray-500 text-sm">
            Page {page} of {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Orders;
