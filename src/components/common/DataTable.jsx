import React, { useState, useEffect, useRef } from "react";
import dayjs from "dayjs";
import { createPortal } from "react-dom";
import { HiDotsHorizontal } from "react-icons/hi";

const DataTable = ({
  columns,
  data = [],
  onEdit,
  onDelete,
  loading,
  selectable = false,
}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMenuToggle = (id, e) => {
    if (openMenu === id) {
      setOpenMenu(null);
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      setMenuPosition({ x: rect.right - 140, y: rect.bottom + window.scrollY });
      setOpenMenu(id);
    }
  };

  useEffect(() => {
    const closeMenu = () => setOpenMenu(null);
    window.addEventListener("scroll", closeMenu);
    window.addEventListener("resize", closeMenu);
    return () => {
      window.removeEventListener("scroll", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  if (loading)
    return <div className="text-center py-3 text-gray-500">Loading...</div>;

  return (
    <div className="overflow-x-auto overflow-y-auto max-h-[300px] rounded-md relative">
      <table className="w-full text-sm border-collapse text-left text-xs">
        <thead className="text-[#475467] font-medium bg-[#f9fbfb] sticky top-0 z-10 text-left">
          <tr>
            {selectable && (
              <th className="p-2">
                <input type="checkbox" />
              </th>
            )}
            {columns.map((col) => (
              <th key={col.key} className="p-3">
                {col.label}
              </th>
            ))}
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={row._id || idx}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                {selectable && (
                  <td className="p-2">
                    <input type="checkbox" />
                  </td>
                )}

                {columns.map((col) => {
                  let cellValue = row[col.key];
                  if (col.type === "date" && cellValue) {
                    cellValue = dayjs(cellValue).format("DD MMM YYYY");
                  }

                  return (
                    <td key={col.key} className="p-2">
                      {col.render ? col.render(row) : cellValue || "-"}
                    </td>
                  );
                })}

                {/* Action Menu Button */}
                <td className="p-2 text-center">
                  <button
                    ref={buttonRef}
                    onClick={(e) => handleMenuToggle(row._id, e)}
                    className="p-2 rounded hover:bg-gray-200 transition"
                  >
                    <HiDotsHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="p-3 text-gray-400 text-center"
              >
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/*  Floating Action Menu (Portal outside overflow container) */}
      {openMenu &&
        createPortal(
          <div
            className="fixed bg-white border border-gray-200 rounded-md shadow-lg z-[9999] w-28 text-sm"
            style={{
              left: `${menuPosition.x}px`,
              top: `${menuPosition.y}px`,
            }}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              onClick={() => {
                onEdit?.(data.find((d) => d._id === openMenu));
                setOpenMenu(null);
              }}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100"
            >
              Edit
            </button>
            <button
              onClick={() => {
                onDelete?.(openMenu);
                setOpenMenu(null);
              }}
              className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100"
            >
              Delete
            </button>
          </div>,
          document.body
        )}
    </div>
  );
};

export default DataTable;
