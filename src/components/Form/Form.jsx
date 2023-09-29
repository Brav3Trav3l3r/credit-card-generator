import React, { useState } from "react";
import styles from "./Form.module.css";
import { useInputValidation } from "../../hooks/useInputValidation";
import {
  cardNumberValidation,
  convertCardNumber,
  cvvValidator,
  monthValidator,
  yearValidator,
} from "../../helper-functions";

export default function Form({ firstTimeLoad, setUser }) {
  const {
    input: nameInput,
    handleInputChange: handleNameChange,
    handleIsTouched: handleNameTouched,
    enteredInputIsValid: enteredNameIsValid,
    isInvalidInput: isInvalidName,
    reset: nameReset,
  } = useInputValidation((value) => (value.trim() === "" ? false : true));

  const {
    input: numberInput,
    handleInputChange: handleNumberChange,
    handleIsTouched: handleNumberTouched,
    enteredInputIsValid: enteredNumberIsValid,
    isInvalidInput: isInvalidNumber,
    reset: numberReset,
  } = useInputValidation((value) => cardNumberValidation(value));

  const {
    input: monthInput,
    handleInputChange: handleMonthChange,
    handleIsTouched: handleMonthTouched,
    enteredInputIsValid: enteredMonthIsValid,
    isInvalidInput: isInvalidMonth,
    reset: monthReset,
  } = useInputValidation((value) => monthValidator(value));

  const {
    input: yearInput,
    handleInputChange: handleYearChange,
    handleIsTouched: handleYearTouched,
    enteredInputIsValid: enteredYearIsValid,
    isInvalidInput: isInvalidYear,
    reset: yearReset,
  } = useInputValidation((value) => yearValidator(value));

  const {
    input: cvvInput,
    handleInputChange: handleCvvChange,
    handleIsTouched: handleCvvTouched,
    enteredInputIsValid: enteredCvvIsValid,
    isInvalidInput: isInvalidCvv,
    reset: cvvReset,
  } = useInputValidation((value) => cvvValidator(value));

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredNumberIsValid &&
    enteredMonthIsValid &&
    enteredYearIsValid &&
    enteredCvvIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleNameTouched();
    handleNumberTouched();
    handleMonthTouched();
    handleYearTouched();
    handleCvvTouched();

    if (!formIsValid) {
      return;
    }

    const user = {
      name: nameInput,
      cardNumber: convertCardNumber(numberInput),
      expMonth: monthInput,
      expYear: yearInput,
      cvv: cvvInput,
    };

    setUser(user);

    nameReset();
    numberReset();
    monthReset();
    yearReset();
    cvvReset();
  };

  const invalidNumberStyle = isInvalidNumber ? styles.invalidInput : "";
  const invalidNameStyle = isInvalidName ? styles.invalidInput : "";
  const invalidMonthStyle = isInvalidMonth ? styles.invalidInput : "";
  const invalidYearStyle = isInvalidYear ? styles.invalidInput : "";
  const invalidCvvStyle = isInvalidCvv ? styles.invalidInput : "";
  const firstLoad = firstTimeLoad ? styles.animateFirstLoad : "";

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.container} ${firstLoad}`}
    >
      <div className={styles.collection}>
        <label className={styles.label} htmlFor="name">
          CARDHOLDER NAME
        </label>
        <input
          type="text"
          id="name"
          value={nameInput}
          onChange={handleNameChange}
          onBlur={handleNameTouched}
          placeholder="e.g. John Doe"
          className={`${styles.input} ${invalidNameStyle}`}
        />
        {isInvalidName && (
          <p className={styles.errorMessage}>Name cannot be empty.</p>
        )}
      </div>

      <div className={styles.collection}>
        <label className={styles.label} htmlFor="number">
          CARD NUMBER
        </label>
        <input
          type="text"
          id="number"
          value={numberInput}
          onChange={handleNumberChange}
          onBlur={handleNumberTouched}
          placeholder="e.g. 4242 4242 4242 4242"
          className={`${styles.input} ${invalidNumberStyle}`}
        />

        {isInvalidNumber && (
          <p className={styles.errorMessage}>
            Card number should be 16 digit without space.
          </p>
        )}
      </div>

      <div className={styles.group}>
        <div className={styles.date}>
          <div className={styles.collection}>
            <div className={styles.label}>EXP. DATE (MM/YY)</div>
            <div className={styles.inputs}>
              <div className={styles.collection}>
                <input
                  type="text"
                  id="month"
                  placeholder="MM"
                  value={monthInput}
                  onChange={handleMonthChange}
                  onBlur={handleMonthTouched}
                  className={`${styles.input} ${invalidMonthStyle}`}
                />
                {isInvalidMonth && (
                  <p className={styles.errorMessage}>Invalid month.</p>
                )}
              </div>
              <div className={styles.collection}>
                <input
                  type="text"
                  id="year"
                  placeholder="YY"
                  value={yearInput}
                  onChange={handleYearChange}
                  onBlur={handleYearTouched}
                  className={`${styles.input} ${invalidYearStyle}`}
                />
                {isInvalidYear && (
                  <p className={styles.errorMessage}>Invalid year.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cvv}>
          <div className={styles.collection}>
            <label className={styles.label} htmlFor="cvv">
              CVV
            </label>
            <input
              type="password"
              id="cvv"
              placeholder="e.g. 424"
              value={cvvInput}
              onChange={handleCvvChange}
              onBlur={handleCvvTouched}
              className={`${styles.input} ${invalidCvvStyle}`}
            />
            {isInvalidCvv && (
              <p className={styles.errorMessage}>
                Must contain 3 digit number.
              </p>
            )}
          </div>
        </div>
      </div>

      <button className={styles.button}>Confirm</button>
    </form>
  );
}
