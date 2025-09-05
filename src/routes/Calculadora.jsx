// Fazendo as importações
import React, { useState } from 'react';
 
// Criando as funções inciais da Calculadora
const Calculadora = () => {
 
  // variaveis do ambiente
  // display → o que aparece na tela da calculadora (inicia com '0')
  // primeiroNumero → armazena o primeiro número antes da operação
  // operador → guarda qual operação foi escolhida (+, -, *, /)
  // esperandoSegundoNumero → controla se a calculadora está esperando o próximo número após escolher um operador
 
  const [display, setDisplay] = useState('0');
  const [primeiroNumero, setPrimeiroNumero] = useState(null);
  const [operador, setOperador] = useState(null);
  const [esperandoSegundoNumero, setEsperandoSegundoNumero] = useState(false);
 
  // Função do número digitado
  const handleNumero = (numero) => {
    if (esperandoSegundoNumero) {
      setDisplay(numero);
      setEsperandoSegundoNumero(false);
    } else {
      setDisplay(display === '0' ? numero : display + numero);
    }
  };
 
  // Se for True ele vai colocolar na tela, E esperar ou não o outro número para colocar no Display
  const handleOperador = (op) => {
    if (primeiroNumero === null) {
      setPrimeiroNumero(parseFloat(display));
      setOperador(op);
      setEsperandoSegundoNumero(true);
    } else if (operador) {
      const resultado = calcular();
      setDisplay(String(resultado));
      setPrimeiroNumero(resultado);
      setOperador(op);
      setEsperandoSegundoNumero(true);
    }
  };
 
  // Função switch case
  const calcular = () => {
    const num1 = primeiroNumero;
    const num2 = parseFloat(display);
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num2 !== 0 ? num1 / num2 : 'Erro';
      default:
        return num2;
    }
  };
 
  const handleIgual = () => {
    if (primeiroNumero !== null && operador) {
      const resultado = calcular();
      setDisplay(String(resultado));
      setPrimeiroNumero(null);
      setOperador(null);
      setEsperandoSegundoNumero(false);
    }
  };
 
  const handleLimpar = () => {
    setDisplay('0');
    setPrimeiroNumero(null);
    setOperador(null);
    setEsperandoSegundoNumero(false);
  };
 
  // Return dos elementos no Front
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 sm:w-96 transform transition-all hover:scale-105">
        <div className="text-right text-3xl font-mono bg-gray-800 text-white p-4 rounded-xl mb-6 shadow-inner">
          {display}
        </div>
        <div className="grid grid-cols-4 gap-3">
          <button className="col-span-2 bg-red-500 text-white p-4 rounded-xl font-semibold hover:bg-red-600 transition-colors duration-200 active:scale-95"
            onClick={handleLimpar}
          >
            C</button>
          <button className="bg-indigo-500 text-white p-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-200 active:scale-95"
            onClick={() => handleOperador('/')}
          >
            ÷</button>
          <button className="bg-indigo-500 text-white p-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-200 active:scale-95"
            onClick={() => handleOperador('*')}
          >
            ×</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('7')}
          >
            7</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('8')}
          >
            8</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('9')}
          >
            9</button>
          <button className="bg-indigo-500 text-white p-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-200 active:scale-95"
            onClick={() => handleOperador('-')}
          >
            -</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('4')}
          >
            4</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('5')}
          >
            5</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('6')}
          >
            6</button>
          <button className="bg-indigo-500 text-white p-4 rounded-xl font-semibold hover:bg-indigo-600 transition-colors duration-200 active:scale-95"
            onClick={() => handleOperador('+')}
          >
            +</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('1')}
          >
            1</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('2')}
          >
            2</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('3')}
          >
            3</button>
          <button className="row-span-2 bg-green-500 text-white p-4 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-200 active:scale-95"
            onClick={handleIgual}
          >
            =</button>
          <button className="col-span-2 bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('0')}
          >
            0</button>
          <button className="bg-gray-200 p-4 rounded-xl font-semibold hover:bg-gray-300 transition-colors duration-200 active:scale-95"
            onClick={() => handleNumero('.')}
          >
            .</button>
        </div>
      </div>
    </div>
  );
};
 
// Export da Function Calculadora
export default Calculadora;