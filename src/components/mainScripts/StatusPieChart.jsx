import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Helper function to calculate the percentage
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, data }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const StatusPieChart = ({ data }) => {
  const totalAgents = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div style={{ position: 'relative', width: '100%', height: 400 }}>
      {/* Display total agents in the center of the pie chart */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Total: {totalAgents}
      </div>
      
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={(props) => renderCustomizedLabel({ ...props, data })}
            outerRadius={120}
            innerRadius={70} // To make it a donut chart
            fill="#8884d8"
            dataKey="value"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value, name, props) => [`${value} agents`, name]} 
            contentStyle={{ backgroundColor: '#f2f2f2', borderRadius: '5px', padding: '10px' }}
          />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatusPieChart;
