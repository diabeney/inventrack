export const exportToCSV = (data: any, filename?: string) => {
  const csvHeaders = Object.keys(data[0]).join(",");
  const csvRows = data.map((row: any) =>
    Object.values(row)
      .map((value) => (typeof value === "string" ? `"${value.replace(/"/g, '""')}"` : value))
      .join(",")
  );
  const csvString = [csvHeaders, ...csvRows].join("\n");

  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  const currentDate = new Date().toISOString().split("T")[0];

  const cleanedFilename = filename?.replace(/\.csv$/, "");

  const dynamicFilename = filename ? `${cleanedFilename}_${currentDate}` : `data_${currentDate}`;

  link.setAttribute("download", `${dynamicFilename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
