const numberFormatter = new Intl.NumberFormat("en-US");

export const STATUS_FILTERS = [
    { label: "All", value: "ALL" },
    { label: "Active", value: "ACTIVE" },
    { label: "Pending", value: "PENDING" },
    { label: "Blocked", value: "BLOCKED" },
];

export const USER_STATUS_OPTIONS = [
    { label: "Active", value: "ACTIVE" },
    { label: "Blocked", value: "BLOCKED" },
    { label: "Pending", value: "PENDING" },
];

export const formatCount = (value = 0) => {
    const numericValue = Number(value) || 0;

    if (numericValue >= 0 && numericValue < 10) {
        return numericValue.toString().padStart(2, "0");
    }

    return numberFormatter.format(numericValue);
};

export const formatStatus = (status = "") =>
    status
        .toLowerCase()
        .split("_")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

export const getStatusStyles = (status) => {
    switch (status) {
        case "ACTIVE":
            return "bg-[#10B77F33]/20 text-[#10B77F]";
        case "PENDING":
            return "bg-[#FFCC0033]/20 text-[#FFCC00]";
        case "BLOCKED":
            return "bg-[#FF777A33]/20 text-[#FF777A]";
        default:
            return "bg-gray-800 text-gray-400";
    }
};

export const getInitials = (name = "User") =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

export const formatLastActive = (date) => {
    const timestamp = new Date(date).getTime();

    if (!timestamp) {
        return "Never active";
    }

    const diffInSeconds = Math.round((timestamp - Date.now()) / 1000);
    const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
    const units = [
        ["year", 60 * 60 * 24 * 365],
        ["month", 60 * 60 * 24 * 30],
        ["day", 60 * 60 * 24],
        ["hour", 60 * 60],
        ["minute", 60],
        ["second", 1],
    ];
    const [unit, secondsInUnit] = units.find(([, seconds]) => Math.abs(diffInSeconds) >= seconds) || ["second", 1];

    return formatter.format(Math.round(diffInSeconds / secondsInUnit), unit);
};

export const buildUserStats = (stats = {}) => [
    { label: "Total Users", value: formatCount(stats.totalUsers), color: "text-[#90B5EE]" },
    { label: "Active", value: formatCount(stats.activeUsers), color: "text-[#10B77F]" },
    { label: "Blocked", value: formatCount(stats.blockedUsers), color: "text-[#FF777A]" },
    { label: "Pending", value: formatCount(stats.pendingUsers), color: "text-[#FFCC00]" },
];
