// Importamos React y styled-components
import React from 'react';
import styled from 'styled-components';

// Definimos la interfaz de la transacción
interface Transaction {
  id: number;
  description: string;
  amount: number;
  isIncome: boolean;
  date: Date;
}

// Definimos los estilos de los componentes de la tabla
interface TransactionHistoryProps {
  transactions: Transaction[];
}

// Definimos los estilos de los componentes de la tabla
const StyledTable = styled.table`
    background-color: #161b22;
    border-color: #30363d;
    color: #c9d1d9;
    width: 100%;
    border-collapse: collapse;
`;

// Definimos los estilos de los componentes de la cabecera de la tabla
const TableHead = styled.thead`
    background-color: #21262d;
    color: #c9d1d9;
`;

// Definimos los estilos de los componentes de la fila de la tabla
const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #0d1117;
    }

    &:hover {
        background-color: #21262d;
    }
`;

// Definimos los estilos de los componentes de los datos de la tabla
const TableData = styled.td`
    padding: 0.5rem;
    border: 1px solid #30363d;
`;

// Definimos el componente de la tabla de transacciones
const TransactionHistory: React.FC<TransactionHistoryProps> = ({transactions}) => {
  return (
    <div className="mb-4">
      <StyledTable>
        <TableHead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Fecha</th>
          </tr>
        </TableHead>
        <tbody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableData>{transaction.description}</TableData>
            <TableData style={{color: transaction.isIncome ? '#3fb950' : '#f85149'}}>
              {transaction.isIncome ? '+' : '-'} ${Math.abs(transaction.amount)}
            </TableData>
            <TableData>{transaction.date.toLocaleDateString()}</TableData>
          </TableRow>
        ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

// Exportamos el componente TransactionHistory para poder utilizarlo en otros componentes
export default TransactionHistory;
