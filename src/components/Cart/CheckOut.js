import classes from "./CheckOut.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => {
  return value.trim() === "";
};
const correctPostal = (value) => {
  return value.trim().length === 5;
};

const CheckOut = (props) => {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = correctPostal(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    const formValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredPostalIsValid &&
      enteredStreetIsValid;

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    if (!formValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameSubmitCLasses = `${classes.control} ${
    formInputValidity.name ? "" : classes.invalid
  }`;

  const streetSubmitCLasses = `${classes.control} ${
    formInputValidity.street ? "" : classes.invalid
  }`;

  const postalSubmitCLasses = `${classes.control} ${
    formInputValidity.postal ? "" : classes.invalid
  }`;

  const citySubmitCLasses = `${classes.control} ${
    formInputValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameSubmitCLasses}>
        <label htmlFor="name">Your Name</label>
        <input ref={nameInputRef} type="text" id="name" />
        {!formInputValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetSubmitCLasses}>
        <label htmlFor="street">Street</label>
        <input ref={streetInputRef} type="text" id="street" />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={postalSubmitCLasses}>
        <label htmlFor="postal">Postal Code</label>
        <input ref={postalInputRef} type="text" id="postal" />
        {!formInputValidity.postal && (
          <p>Please enter a valid postal code (5 characters) </p>
        )}
      </div>
      <div className={citySubmitCLasses}>
        <label htmlFor="city">City</label>
        <input ref={cityInputRef} type="text" id="city" />
        {!formInputValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default CheckOut;
