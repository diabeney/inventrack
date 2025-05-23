"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function OverviewBars() {
  return (
    <Card>
      <CardHeader>
        {/*<div>*/}
        {/*  <p className="my-2 text-sm">Recent stories shared</p>*/}
        {/*  <Select value={eventId} onValueChange={(e) => setEventId(e)}>*/}
        {/*    <SelectTrigger className="w-full lg:w-96">*/}
        {/*      <SelectValue placeholder="Select event's name" />*/}
        {/*    </SelectTrigger>*/}
        {/*    <SelectContent>*/}
        {/*      {event === undefined ? (*/}
        {/*        <SelectItem value="1">No event available</SelectItem>*/}
        {/*      ) : (*/}
        {/*        stories.map((event) => (*/}
        {/*          <SelectItem*/}
        {/*            key={event?._id}*/}
        {/*            value={event._id}*/}
        {/*            className="line-clamp-1"*/}
        {/*          >*/}
        {/*            {event.content}*/}
        {/*          </SelectItem>*/}
        {/*        ))*/}
        {/*      )}*/}
        {/*    </SelectContent>*/}
        {/*  </Select>*/}
        {/*</div>*/}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8}>
              <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div>
      </CardFooter>
    </Card>
  );
}
