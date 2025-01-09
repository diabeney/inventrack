"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartStyle, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const inventoryData = [
  { category: "Chemicals", quantity: 186, fill: "var(--color-chemicals)" },
  { category: "Glassware", quantity: 305, fill: "var(--color-glassware)" },
  { category: "Instruments", quantity: 237, fill: "var(--color-instruments)" },
  { category: "Equipment", quantity: 173, fill: "var(--color-equipment)" },
  { category: "Miscellaneous", quantity: 209, fill: "var(--color-miscellaneous)" },
];

const chartConfig = {
  chemicals: {
    label: "Chemicals",
    color: "hsl(var(--chart-1))",
  },
  glassware: {
    label: "Glassware",
    color: "hsl(var(--chart-2))",
  },
  instruments: {
    label: "Instruments",
    color: "hsl(var(--chart-3))",
  },
  equipment: {
    label: "Equipment",
    color: "hsl(var(--chart-4))",
  },
  miscellaneous: {
    label: "Miscellaneous",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function OverviewPieChart() {
  const id = "pie-interactive";
  const [activeCategory, setActiveCategory] = React.useState(inventoryData[0].category);

  const activeIndex = React.useMemo(() => inventoryData.findIndex((item) => item.category === activeCategory), [activeCategory]);
  const categories = React.useMemo(() => inventoryData.map((item) => item.category), []);

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Lab Inventory Overview</CardTitle>
          <CardDescription>Breakdown of inventory categories</CardDescription>
        </div>
        <Select value={activeCategory} onValueChange={setActiveCategory}>
          <SelectTrigger className="ml-auto h-7 w-[130px] rounded-lg pl-2.5" aria-label="Select a category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {categories.map((key) => {
              const config = chartConfig[key.toLowerCase() as keyof typeof chartConfig];

              if (!config) {
                return null;
              }

              return (
                <SelectItem key={key} value={key} className="rounded-lg [&_span]:flex">
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key.toLowerCase()})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer id={id} config={chartConfig} className="mx-auto aspect-square w-full max-w-[300px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={inventoryData}
              dataKey="quantity"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector {...props} outerRadius={outerRadius + 25} innerRadius={outerRadius + 12} />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {inventoryData[activeIndex].quantity.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Items
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
