  export const dashboardColumns = [
    {
      key: "name",
      label: "Name",
      render: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={
              row.img ||
              `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * (100 - 10 + 1)) + 10}.jpg`
            }
            alt={row.name}
            className="w-8 h-8 rounded-full object-cover border"
          />
          <span className="font-medium text-gray-800">{row.name}</span>
        </div>
      ),
    },
    { key: "specialty", label: "Specialty" },
    { key: "dob", label: "DOB", type: "date" }, // ✅ date formatting added
    { key: "email", label: "Email" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-10 py-1 text-xs  text-center rounded-full ${row.status === "Active"
              ? "bg-[#E6F8EE] text-[#12B76A]"
              : "bg-[#FEECEC] text-[#D92D20]"
            }`}
        >
          {row.status}
        </span>
      ),
    },
    { key: "contact", label: "Contact" },
  ];