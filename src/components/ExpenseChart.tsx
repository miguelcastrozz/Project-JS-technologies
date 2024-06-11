// Importamos las librerías
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import styled from 'styled-components';

// Definimos la interfaz de la transacción
interface Transaction {
  id: number;
  description: string;
  amount: number;
  isIncome: boolean;
  date: Date;
}

// Definimos las propiedades del componente
interface ExpenseChartProps {
  transactions: Transaction[];
}

// Definimos los estilos del contenedor del gráfico
const ChartContainer = styled.div`
    align-items: center;
    background-color: #161b22;
    display: flex;
    padding: 1rem;
    border: 1px solid #30363d;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    height: 50vh;
    justify-content: center;
`;

// Definimos el componente del gráfico de gastos
const ExpenseChart: React.FC<ExpenseChartProps> = ({ transactions }) => {
  const data = transactions.map((transaction) => ({
    name: transaction.date.toLocaleDateString(),
    amount: transaction.isIncome ? transaction.amount : -transaction.amount,
  }));

  // Renderizamos el gráfico
  return (
    <ChartContainer>
      <LineChart width={600} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </ChartContainer>
  );
};

// Exportamos el componente ExpenseChart para poder utilizarlo en otros componentes
export default ExpenseChart;
