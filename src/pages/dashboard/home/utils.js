const numberFormatter = new Intl.NumberFormat("en-US");

export const formatNumber = (value = 0) => numberFormatter.format(Number(value) || 0);

export const formatCount = (value = 0) => {
    const numericValue = Number(value) || 0;

    if (numericValue >= 0 && numericValue < 10) {
        return numericValue.toString().padStart(2, "0");
    }

    return formatNumber(numericValue);
};

export const formatCurrency = (value = 0, currency = "usd") => {
    const numericValue = Number(value) || 0;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.toUpperCase(),
        maximumFractionDigits: Number.isInteger(numericValue) ? 0 : 2,
    }).format(numericValue);
};

export const formatTrend = (trend, suffix = "from last month") => {
    if (!trend || trend.value === undefined || trend.value === null) {
        return null;
    }

    const isDown = trend.direction === "down";
    const sign = isDown ? "-" : "+";

    return {
        direction: isDown ? "down" : "up",
        label: `${sign}${formatNumber(trend.value)}%`,
        subtext: suffix,
    };
};

export const formatRelativeTime = (date) => {
    const timestamp = new Date(date).getTime();

    if (!timestamp) {
        return "";
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

export const getInitials = (name = "User") =>
    name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase();

export const buildStats = (cards = {}, icons = {}) => {
    const activeUsersTrend = formatTrend(cards.totalActiveUsers?.trend);
    const reportsTrend = formatTrend(cards.totalReportsGenerated?.trend);
    const revenueTrend = formatTrend(cards.totalRevenue?.trend);
    const projectCard = cards.totalProjects || {};

    return [
        {
            title: "Total Active Users",
            value: formatCount(cards.totalActiveUsers?.value),
            change: activeUsersTrend?.label,
            trendDirection: activeUsersTrend?.direction,
            subtext: activeUsersTrend?.subtext || "from last month",
            icon: icons.users,
        },
        {
            title: "Total Projects",
            value: formatCount(projectCard.value),
            change: null,
            subtext: `${formatCount(projectCard.live || projectCard.running || 0)} live / ${formatCount(projectCard.archived)} archived`,
            icon: icons.projects,
        },
        {
            title: "Total Reports Generated",
            value: formatCount(cards.totalReportsGenerated?.value),
            change: reportsTrend?.label,
            trendDirection: reportsTrend?.direction,
            subtext: reportsTrend?.subtext || "from last month",
            icon: icons.reports,
        },
        {
            title: "Total Revenue",
            value: formatCurrency(cards.totalRevenue?.amountDisplay),
            change: revenueTrend?.label,
            trendDirection: revenueTrend?.direction,
            subtext: revenueTrend?.subtext || "from last month",
            icon: icons.revenue,
        },
    ];
};

export const buildRevenueData = (revenueOverview = {}) => {
    const months = [...(revenueOverview.months || [])].sort((a, b) => a.monthNumber - b.monthNumber);
    const maxAmount = Math.max(...months.map((item) => Number(item.amountDisplay) || 0), 0);

    return months.map((item) => {
        const amount = Number(item.amountDisplay) || 0;
        const width = maxAmount ? Math.max((amount / maxAmount) * 100, amount > 0 ? 8 : 0) : 0;

        return {
            month: item.month,
            amount: formatCurrency(amount),
            width: `${width}%`,
        };
    });
};
