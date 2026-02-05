"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteProduct } from "@/app/lib/actions";

export default function DeleteButton({ id }: { id: number }) {
  return (
    <button
      onClick={() => deleteProduct(id)}
      className="m-2 p-1 bg-red-300 hover:bg-red-400 text-white rounded-md flex gap-1 items-center"
    >
      Delete
      <TrashIcon className="h-4 w-4" />
    </button>
  );
}
