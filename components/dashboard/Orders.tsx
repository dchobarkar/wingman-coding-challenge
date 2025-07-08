"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

import PageLayout from "../shared/PageLayout";
import { ordersData, Order } from "@/data/mock/Orders.data";

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
      <h2 className="text-3xl font-semibold font-geist-sans mb-6">Orders</h2>

      {/* Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {paginated.map((order) => (
          <div key={order.id} className="bg-white rounded-[20px] shadow p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Image
                  src={order.productImage}
                  alt={order.productName}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 truncate max-w-[200px]">
                    {order.productName}
                  </h3>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg text-gray-900">
                  {order.commission}
                </p>
                <p className="text-sm text-gray-500">{order.orderValue}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>{order.timeSpent}</span>
              </div>
              <Link
                href={order.chatLink}
                className="flex items-center gap-1 text-primary hover:underline"
              >
                <span>View Chat</span>
                <Image
                  src="/svg/ArrowUpRight.svg"
                  alt="View Chat"
                  width={16}
                  height={16}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden md:block bg-white rounded-[20px] shadow p-0 overflow-x-auto">
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
                className="hidden lg:table-cell px-6 py-4 text-left cursor-pointer"
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
                  <span className="truncate max-w-[200px]">
                    {order.productName}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                <td className="hidden lg:table-cell px-6 py-4 whitespace-nowrap">
                  {order.timeSpent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {order.orderValue}
                </td>
                <td className="px-6 py-4 font-bold whitespace-nowrap">
                  {order.commission}
                </td>
                <td className="px-6 py-4">
                  <Link
                    href={order.chatLink}
                    className="flex items-center gap-1 hover:underline"
                  >
                    <span>View Chat</span>
                    <Image
                      src="/svg/ArrowUpRight.svg"
                      alt="View Chat"
                      width={16}
                      height={16}
                      className="ml-2"
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center md:justify-end items-center gap-2 px-4 md:px-6 py-4 mt-6">
        <button
          className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span className="text-gray-500 text-sm px-4">
          Page {page} of {totalPages}
        </span>
        <button
          className="px-4 py-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </PageLayout>
  );
};

export default Orders;
