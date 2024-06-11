// Definimos los componentes de la aplicación
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import TransactionHistory from './components/TransactionHistory';
import ExpenseChart from './components/ExpenseChart';
import styled from 'styled-components';

// Definimos la interfaz de la transacción
interface Transaction {
  id: number;
  description: string;
  amount: number;
  isIncome: boolean;
  date: Date;
}

// Definimos los estilos de los componentes del contenedor principal
const AppContainer = styled.div`
    background-color: #0d1117;
    color: #c9d1d9;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

// Definimos los estilos de los componentes del Título
const Title = styled.h1`
    margin-bottom: 2rem;
    color: #e7eaf0;
    text-align: center;
`;

// Definimos los estilos de los componentes del Contenedor de contenido
const ContentContainer = styled.div`
    margin: 1rem auto;
    max-width: 800px;
    flex-grow: 1;
`;

// Definimos el componente principal de la aplicación
const App: React.FC = () => {

  // Defininmos el estado de las transacciones
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Definimos la función que se ejecuta al agregar una transacción
  const handleAddExpense = (description: string, amount: number, isIncome: boolean) => {
    const newTransaction: Transaction = {
      id: transactions.length + 1,
      description,
      amount,
      isIncome,
      date: new Date(),
    };
    setTransactions([...transactions, newTransaction]);
  };

  // Renderizamos los componentes de la aplicación
  return (
    <AppContainer>
      <ContentContainer>
        <Title>Control de gastos e ingresos</Title>
        <ExpenseForm onAddExpense={handleAddExpense} />
        <TransactionHistory transactions={transactions} />
        <ExpenseChart transactions={transactions} />
      </ContentContainer>
    </AppContainer>
  );
};

// Exportamos el componente App para poder utilizarlo en otros componentes
export default App;
