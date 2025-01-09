"use client";

import { TrendingUp } from "lucide-react";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

// Updated static data for lab usage
const chartData = [{ item: "Centrifuge", usage: 85, fill: "var(--primary-color)" }];

const chartConfig = {
  usage: {
    label: "Usage (%)",
  },
  centrifuge: {
    label: "Centrifuge",
    color: "hsl(var(--primary-color))",
  },
} satisfies ChartConfig;

export default function LabOverviewChart() {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <RadialBarChart data={chartData} startAngle={90} endAngle={450} innerRadius={80} outerRadius={110}>
            <PolarGrid gridType="circle" radialLines={false} stroke="none" className="first:fill-gray-50 last:fill-white" polarRadius={[86, 74]} />
            <RadialBar className=" fill-primary" dataKey="usage" cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-primary text-4xl font-bold">
                          {`${chartData[0].usage}%`}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Usage
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center font-normal gap-2 leading-none">
            Equipment usage up by 12% this month <TrendingUp className="h-4 w-4" />
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
