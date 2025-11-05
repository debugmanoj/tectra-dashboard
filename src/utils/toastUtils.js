import { toast } from "react-hot-toast";

/**
 * Reusable toast notification helpers (TailwindCSS version)
 */
export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-center",
    className:
      "bg-emerald-50 border border-emerald-300 text-emerald-800 px-4 py-2 rounded-lg shadow-md text-sm font-medium",
    iconTheme: {
      primary: "#059669",
      secondary: "#ecfdf5",
    },
  });
};

export const showError = (message) => {
  toast.error(message, {
    position: "top-center",
    className:
      "bg-red-50 border border-red-300 text-red-800 px-4 py-2 rounded-lg shadow-md text-sm font-medium",
    iconTheme: {
      primary: "#dc2626",
      secondary: "#fef2f2",
    },
  });
};

export const showInfo = (message) => {
  toast(message, {
    position: "top-center",
    icon: "ℹ️",
    className:
      "bg-blue-50 border border-blue-300 text-blue-800 px-4 py-2 rounded-lg shadow-md text-sm font-medium",
  });
};
