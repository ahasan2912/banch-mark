const numberFormatter = new Intl.NumberFormat("en-US");

export const formatCount = (value = 0) => {
    const numericValue = Number(value) || 0;

    if (numericValue >= 0 && numericValue < 10) {
        return numericValue.toString().padStart(2, "0");
    }

    return numberFormatter.format(numericValue);
};

export const formatDate = (date) => {
    if (!date) {
        return "No date";
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
};

export const formatFileSize = (bytes = 0) => {
    const size = Number(bytes) || 0;

    if (size < 1024) {
        return `${size} B`;
    }

    if (size < 1024 * 1024) {
        return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
};

export const formatCurrency = (value = 0, currency = "usd") =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: Number.isInteger(Number(value)) ? 0 : 2,
    }).format(Number(value) || 0);

export const formatLabel = (value = "") =>
    value
        .toLowerCase()
        .split("_")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

export const buildReportStats = (stats = {}) => [
    { label: "Total Reports", value: formatCount(stats.totalReports), color: "text-[#90B5EE]" },
    { label: "Completed", value: formatCount(stats.completedReports), color: "text-[#10B77F]" },
    { label: "Processing", value: formatCount(stats.processingReports), color: "text-[#FFCC00]" },
    { label: "Movement Reports", value: formatCount(stats.movementReports), color: "text-[#90B5EE]" },
];
