const numberFormatter = new Intl.NumberFormat("en-US");

export const formatCurrency = (value = 0, currency = "usd") =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: Number.isInteger(Number(value)) ? 0 : 2,
    }).format(Number(value) || 0);

export const formatTrend = (trend) => {
    if (!trend || trend.value === undefined || trend.value === null) {
        return null;
    }

    const isDown = trend.direction === "down";

    return {
        value: `${isDown ? "-" : "+"}${numberFormatter.format(Number(trend.value) || 0)}%`,
        direction: isDown ? "down" : "up",
    };
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

export const getInitials = (name = "User") =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

export const buildStatsCards = (stats = {}) => [
    {
        label: "Total Revenue",
        value: formatCurrency(stats.totalRevenue?.amountDisplay),
        trend: formatTrend(stats.totalRevenue?.trend),
        suffix: "from last month",
    },
    {
        label: "Monthly Recurring",
        value: formatCurrency(stats.monthlyRecurring?.amountDisplay),
        trend: formatTrend(stats.monthlyRecurring?.trend),
        suffix: "from last month",
    },
    {
        label: "Average Per User",
        value: formatCurrency(stats.averagePerUser?.amountDisplay),
        trend: null,
        suffix: "",
    },
    {
        label: `${stats.selectedYearRevenue?.year || new Date().getFullYear()} Revenue`,
        value: formatCurrency(stats.selectedYearRevenue?.amountDisplay),
        trend: null,
        suffix: "",
    },
];

export const buildChartData = (chart = {}) =>
    [...(chart.months || [])]
        .sort((a, b) => a.monthNumber - b.monthNumber)
        .map((month) => ({
            name: month.month.slice(0, 3),
            value: Number(month.amountDisplay) || 0,
            fullMonth: month.month,
        }));
