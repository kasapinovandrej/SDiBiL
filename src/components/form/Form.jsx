import React from "react";
import "./form.scss";
import Sign from "../../assets/images/icon-arrow2@2x.png";

const Form = () => {
  return (
    <div className="form">
      <h1 className="title">
        FYLL I FORMULÄRET NEDAN ELLER RING OSS DIREKT FÖR EN AFFÄR REDAN IDAG!
      </h1>
      <h3 className="paragraph">
        Du ser pengarna på ditt konto innan vi gör ägarbyte
      </h3>
      <form className="box">
        <label className="label" htmlFor="name">
          Namn *
        </label>
        <input className="input" type="text" />
        <label className="label" htmlFor="name">
          E-post *
        </label>
        <input className="input" type="text" />
        <label className="label" htmlFor="name">
          Registeringsnummer *
        </label>
        <input className="input" type="text" />
        <label className="label" htmlFor="name">
          Önskat pris
        </label>
        <input className="input" type="text" />
        <label className="label" htmlFor="name">
          Eventuella defekter
        </label>
        <input className="input" type="text" />
        <button className="button" type="submit">
          SKICKA <img src={Sign} alt="btn" className="sign" />
        </button>
      </form>
    </div>
  );
};

export default Form;
