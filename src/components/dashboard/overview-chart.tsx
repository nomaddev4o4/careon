'use client'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { name: 'Jan', patients: 400, followUps: 240 },
  { name: 'Feb', patients: 300, followUps: 139 },
  { name: 'Mar', patients: 200, followUps: 980 },
  { name: 'Apr', patients: 278, followUps: 390 },
  { name: 'May', patients: 189, followUps: 480 },
  { name: 'Jun', patients: 239, followUps: 380 },
]

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line 
          type="monotone" 
          dataKey="patients" 
          stroke="hsl(var(--chart-1))" 
          strokeWidth={2} 
        />
        <Line 
          type="monotone" 
          dataKey="followUps" 
          stroke="hsl(var(--chart-2))" 
          strokeWidth={2} 
        />
      </LineChart>
    </ResponsiveContainer>
  )
}