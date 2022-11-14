import React from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ReferenceLine, ResponsiveContainer } from 'recharts';

const TvlChart = props => {
  return <ResponsiveContainer>
  <AreaChart
    data={Object.values(dataSet)}
  >
    <XAxis type="number" tickCount={12} dataKey="date" domain={[1655251200, 'dataMax']} tick={<CustomizedAxisTick />} />
    <YAxis tick={<WhaleFriendlyAxisTick />}/>
    <Tooltip/>
    {data.chains.map((k, i)=> <Area key={i} type="monotone" dataKey={k} stackId="1" stroke="var(--primary)" fill="var(--primary)" />)}
  </AreaChart>
</ResponsiveContainer> 
}