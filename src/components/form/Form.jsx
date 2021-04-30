import React, { useState } from "react";
import "./form.scss";
import Sign from "../../assets/images/icon-arrow2@2x.png";
import Subtitle from "../subtitle/Subtitle";
import useInput from "../../hooks/useInput";

const Form = () => {
  /////////////////NAMN///////////////
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => {
    return value.trim() !== "" && value.length < 20;
  });
  /////////////////E-POST///////////////
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => {
    return value.includes("@") && value.length < 30;
  });
  /////////////////REGISTERINGSNUMMER///////////////
  const regexOne = /^[A-Z][A-Z][A-Z]\d\d[A-Z]$/;
  const regexTwo = /^[A-Z][A-Z][A-Z]\d\d\d$/;
  const {
    value: registrationValue,
    isValid: registrationIsValid,
    hasError: registrationHasError,
    valueChangeHandler: registrationChangeHandler,
    inputBlurHandler: registrationBlurHandler,
    reset: resetRegistration,
  } = useInput((value) => {
    return value.length === 6 && (regexOne.test(value) || regexTwo.test(value));
  });
  /////////////////ÖNSKAT PRIS///////////////
  const {
    value: priceValue,
    isValid: priceIsValid,
    hasError: priceHasError,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = useInput((value) => {
    return value.length < 10;
  });
  /////////////////Eventuella defekter///////////////
  const {
    value: defectValue,
    isValid: defectIsValid,
    hasError: defectHasError,
    valueChangeHandler: defectChangeHandler,
    inputBlurHandler: defectBlurHandler,
    reset: resetDefect,
  } = useInput((value) => {
    return value.length < 30;
  });
  ///////////////////////////////////////////////////
  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    registrationIsValid &&
    priceIsValid &&
    defectIsValid
  ) {
    formIsValid = true;
  }

  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      setButtonIsClicked(true);
      setTimeout(() => {
        setButtonIsClicked(false);
      }, 2000);
      return;
    }
    const formSummery = {
      namn: nameValue,
      epost: emailValue,
      registeringsnummer: registrationValue,
      ÖnskatPris: priceValue,
      EventuellaDefekter: defectValue,
    };
    console.log(formSummery);
    alert(`
    Namn:  ${nameValue}
    E-post:  ${emailValue}
    Registeringsnummer:  ${registrationValue}
    Önskat pris:  ${priceValue}
    Eventuella defekter:  ${defectValue}`);
    resetName();
    resetEmail();
    resetRegistration();
    resetPrice();
    resetDefect();
  };

  const nameClasses = nameHasError ? "input error" : "input";
  const emailClasses = emailHasError ? "input error" : "input";
  const registrationClasses = registrationHasError ? "input error" : "input";
  const priceClasses = priceHasError ? "input error" : "input";
  const defectClasses = defectHasError ? "input error" : "input";

  return (
    <div className="form">
      <Subtitle
        title="FYLL I FORMULÄRET NEDAN ELLER RING OSS DIREKT FÖR EN AFFÄR REDAN IDAG!"
        type="form-title"
      />
      <h3 className="paragraph">
        Du ser pengarna på ditt konto innan vi gör ägarbyte
      </h3>
      <form className="box" onSubmit={submitHandler}>
        <label className="label" htmlFor="name">
          Namn *
          {nameHasError ? (
            <span style={{ color: "red" }}> Vänligen fyll i ditt namn</span>
          ) : null}
        </label>
        <input
          className={nameClasses}
          id="name"
          type="text"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        <label className="label" htmlFor="email">
          E-post *
          {emailHasError ? (
            <span style={{ color: "red" }}> Ange rätt e-postadress</span>
          ) : null}
        </label>
        <input
          className={emailClasses}
          id="email"
          type="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        <label className="label" htmlFor="registration">
          Registeringsnummer *
          {registrationHasError ? (
            <span style={{ color: "red" }}> Formatera: ABC123/ABC12A</span>
          ) : null}
        </label>
        <input
          className={registrationClasses}
          id="registration"
          type="number/text"
          value={registrationValue}
          onChange={registrationChangeHandler}
          onBlur={registrationBlurHandler}
        />
        <label className="label" htmlFor="price">
          Önskat pris
          {priceHasError ? (
            <span style={{ color: "red" }}> Minska antalet tecken</span>
          ) : null}
        </label>
        <input
          className={priceClasses}
          id="price"
          type="text"
          value={priceValue}
          onChange={priceChangeHandler}
          onBlur={priceBlurHandler}
        />
        <label className="label" htmlFor="defects">
          Eventuella defekter
          {priceHasError ? (
            <span style={{ color: "red" }}> Minska antalet tecken</span>
          ) : null}
        </label>
        <input
          className={defectClasses}
          id="defects"
          type="text"
          value={defectValue}
          onChange={defectChangeHandler}
          onBlur={defectBlurHandler}
        />
        <button className="button" type="submit">
          SKICKA <img src={Sign} alt="btn" className="sign" />
        </button>
        {buttonIsClicked ? (
          <span className="button-message">
            Fyll i fälten markerade med en asterisk *
          </span>
        ) : null}
      </form>
    </div>
  );
};

export default Form;
