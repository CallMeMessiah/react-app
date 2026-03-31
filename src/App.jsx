<<<<<<< HEAD
import './App.css';
import { useState } from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const actions = ['+', '-', '=', 'C'];

export const App = () => {
	const [firstNumber, setFirstNumber] = useState(null);
	const [operator, setOperator] = useState(null);
	const [inputValue, setInputValue] = useState('');
	const [textColor, setTextColor] = useState('white'); // ← состояние для цвета

	const handleClickFromNumbers = (value) => {
		setInputValue(inputValue + String(value));
		setTextColor('white'); // ← сбрасываем цвет при вводе цифр
	};

	const handleClickFromActions = (value) => {
		switch (value) {
			case '+': {
				setFirstNumber(Number(inputValue));
				setOperator('+');
				setInputValue('');
				setTextColor('white');
				break;
			}
			case '-': {
				setFirstNumber(Number(inputValue));
				setOperator('-');
				setInputValue('');
				setTextColor('white');
				break;
			}
			case 'C': {
				setInputValue('');
				setFirstNumber(null);
				setOperator(null);
				setTextColor('white');
				break;
			}
			case '=': {
				const secondNumber = Number(inputValue);
				if (operator === '+') {
					setInputValue(String(firstNumber + secondNumber));
				} else if (operator === '-') {
					setInputValue(String(firstNumber - secondNumber));
				}
				setFirstNumber(null);
				setOperator(null);
				setTextColor('green'); // ← цвет становится зелёным
				break;
			}
			default:
				break;
		}
	};

	const createButtons = (arr, nameOfClass, functToChangeInput) => {
		return arr.map((value) => (
			<button
				key={value}
				className={nameOfClass}
				onClick={() => functToChangeInput(value)}
			>
				{value}
			</button>
		));
	};

	const numButtons = createButtons(numbers, 'NumButton', handleClickFromNumbers);
	const actionButtons = createButtons(actions, 'ActionButton', handleClickFromActions);

	return (
		<div className="Container">
			<div className="CalculatorBorder">
				<div className="Calculator">
					<input
						className="Input"
						type="text"
						value={inputValue}
						style={{ color: textColor }}
					/>
					<div className="Buttons">
						<div className="ButtonsNumbersContainer">{numButtons}</div>
						<div className="ButtonsActionsContainer">{actionButtons}</div>
					</div>
				</div>
			</div>
		</div>
	);
=======
import { useState } from "react";
import styles from "./app.module.css";
import data from "./data.json";

export const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getItemsClassName = (index) => {
    if (index < activeIndex) return `${styles["steps-item"]} ${styles.done}`;
    if (index === activeIndex)
      return `${styles["steps-item"]} ${styles.done} ${styles.active}`;
    return styles["steps-item"];
  };

  const isLastStep = activeIndex === data.length - 1;
  const nextButtonText = isLastStep ? "Начать заново" : "Далее";

  const handleClickNext = () => {
    if (isLastStep) {
      setActiveIndex(0);
    }
    setActiveIndex(activeIndex + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {data[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>
            {data.map((item, index) => {
              const stepNumber = Number(item.id);
              return (
                <li key={stepNumber} className={getItemsClassName(index)}>
                  <button
                    onClick={() => {
                      setActiveIndex(index);
                    }}
                    className={styles["steps-item-button"]}
                  >
                    {stepNumber}
                  </button>
                  Шаг {stepNumber}
                </li>
              );
            })}
          </ul>
          <div className={styles["buttons-container"]}>
            <button
              disabled={activeIndex === 0}
              onClick={() => {
                if (activeIndex > 0) {
                  setActiveIndex(activeIndex - 1);
                }
              }}
              className={styles.button}
            >
              Назад
            </button>
            <button onClick={handleClickNext} className={styles.button}>
              {nextButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> 5a906f8 (new app)
};
