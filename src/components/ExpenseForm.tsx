import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

interface ExpenseFormProps {
  onAddExpense: (description: string, amount: number, isIncome: boolean) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({onAddExpense}) => {

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExpense(description, amount, isIncome);
    setDescription('');
    setAmount(0);
  };

  return (
    <Form onSubmit={handleSubmit} style={{marginBottom: '1rem'}}>
      <Form.Group>
        <Form.Label>Descripción</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Monto</Form.Label>
        <Form.Control type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      </Form.Group>
      <Form.Group className="mt-2">
        <Form.Check type="checkbox" label="Ingreso" checked={isIncome} onChange={(e) => setIsIncome(e.target.checked)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="mt-3">
        Agregar
      </Button>
    </Form>
  );

};

export default ExpenseForm;
