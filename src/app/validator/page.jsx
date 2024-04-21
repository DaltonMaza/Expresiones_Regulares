'use client'
import { useEffect, useState } from "react";

const Validator = () => {
  const [name, setName] = useState('');
  const [nameValid, setNameValid] = useState('');
  const [mac, setMac] = useState('');
  const [macValid, setMacValid] = useState('');
  const [ip, setIp] = useState('');
  const [ipValid, setIpValid] = useState('');
  const [identification, setIdentification] = useState('');
  const [identificationValid, setIdentificationValid] = useState('')
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState('');
  const [telephone, setTelephone] = useState('');
  const [telephoneValid, setTelephoneValid] = useState('');

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  };

  useEffect(() => {
    validarNombre();
  }, [name]);

  const handleMacInputChange = (event) => {
    setMac(event.target.value);
  };

  useEffect(() => {
    validarMac();
  }, [mac]);

  const handleIpInputChange = (event) => {
    setIp(event.target.value);
  };

  useEffect(() => {
    validarIp();
  }, [ip]);

  const handleIdentificationInputChange = (event) => {
    setIdentification(event.target.value);
  };

  useEffect(() => {
    validarIdentification();
  }, [identification]);

  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    validarEmail();
  }, [email]);

  const handleTelephoneInputChange = (event) => {
    setTelephone(event.target.value);
  };

  useEffect(() => {
    validarTelephone();
  }, [telephone]);

  const validarNombre = () => {
    const regex = /^[A-Z][a-zÁÉÍÓÚáéíóúñ]+\s[A-Z][a-zÁÉÍÓÚáéíóúñ]+\s[A-Z][a-zÁÉÍÓÚáéíóúñ]+\s[A-Z][a-zÁÉÍÓÚáéíóúñ]+$/;

    if (!regex.test(name)) {
      setNameValid(false);
      console.log("El nombre y apellido no son válidos");
    } else {
      setNameValid(true);
      console.log("El nombre y apellido son válidos");
    }
  };

  const validarMac = () => {
    const regex = /^[A-F0-9]{2}[:][A-F0-9]{2}[:][A-F0-9]{2}[:][A-F0-9]{2}[:][A-F0-9]{2}[:][A-F0-9]{2}$/;

    if (!regex.test(mac)) {
      setMacValid(false);
      console.log("La Mac no es válida");
    } else {
      setMacValid(true);
      console.log("La Mac es válida");
    }
  };

  const validarIp = () => {
    const regex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])[.](25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])[.](25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])[.](25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9])$/;

    if (!regex.test(ip)) {
      setIpValid(false);
      console.log("La IP no es válida");
    } else {
      setIpValid(true);
      console.log("La IP es válida");
    }
  };

  const validarIdentification = () => {
    const regex = /^[0-9]{10}$/;

    if (!regex.test(identification)) {
      setIdentificationValid(false);
      console.log("La cédula no es válida");
    } else {
      setIdentificationValid(true);
      console.log("La cédula es válida");
    }
  };

  const validarEmail = () => {
    const regex = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+[@][a-zA-Z0-9.-]+[.][a-zA-Z]+$/;

    if (!regex.test(email)) {
      setEmailValid(false);
      console.log("El correo no es válido");
    } else {
      setEmailValid(true);
      console.log("El correo es válido");
    }
  };

  const validarTelephone = () => {
    const regex = /^[0-9]{10}$/;

    if (!regex.test(telephone)) {
      setTelephoneValid(false);
      console.log("El teléfono no es válido");
    } else {
      setTelephoneValid(true);
      console.log("El teléfono es válido");
    }
  };


  return (
    <div className="container">
      <header>
        <div className="text-center">
          <h2>Expresiones regulares</h2>
        </div>
        <p />
        <p>Este validador trabaja con expresiones regulares, controlando la informacion ingresada</p>
      </header>

      <div className="text-center" style={{ margin: "15px" }}>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseName" role="button" aria-expanded="false" aria-controls="collapseExample">
            Nombres y Apellidos
          </a>
        </p>
        <div className="collapse" id="collapseName">
          <div className="card card-body">
            <div className="mb-3">
              <label className="form-label">Ingrese dos nombres y dos Apellidos</label>
              <input className={`form-control ${nameValid ? 'is-valid' : 'is-invalid'}`} value={name} onChange={handleNameInputChange} />
              {!nameValid && <div class="invalid-feedback">El nombre y apellido no son válidos</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ margin: "15px" }}>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseMac" role="button" aria-expanded="false" aria-controls="collapseExample">
            Dirección Mac
          </a>
        </p>
        <div className="collapse" id="collapseMac">
          <div className="card card-body">
            <div className="mb-3">
              <label className="form-label">Ingrese una dirección Mac completa</label>
              <input className={`form-control ${macValid ? 'is-valid' : 'is-invalid'}`} value={mac} onChange={handleMacInputChange} />
              {!macValid && <div class="invalid-feedback">La Mac no es válida</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ margin: "15px" }}>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseIp" role="button" aria-expanded="false" aria-controls="collapseExample">
            Dirección IP
          </a>
        </p>
        <div className="collapse" id="collapseIp">
          <div className="card card-body">
            <div className="mb-3">
              <label className="form-label">Ingrese una dirección IPV4 completa</label>
              <input className={`form-control ${ipValid ? 'is-valid' : 'is-invalid'}`} value={ip} onChange={handleIpInputChange} />
              {!ipValid && <div class="invalid-feedback">La IP no es válida</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ margin: "15px" }}>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseIdentification" role="button" aria-expanded="false" aria-controls="collapseExample">
            Cédula
          </a>
        </p>
        <div className="collapse" id="collapseIdentification">
          <div className="card card-body">
            <div className="mb-3">
              <label className="form-label">Ingrese su cédula</label>
              <input className={`form-control ${identificationValid ? 'is-valid' : 'is-invalid'}`} value={identification} onChange={handleIdentificationInputChange} />
              {!identificationValid && <div class="invalid-feedback">La cédula no es válida</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ margin: "15px" }}>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseEmail" role="button" aria-expanded="false" aria-controls="collapseExample">
            Email
          </a>
        </p>
        <div className="collapse" id="collapseEmail">
          <div className="card card-body">
            <div className="mb-3">
              <label className="form-label">Ingrese su email</label>
              <input className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`} value={email} onChange={handleEmailInputChange} />
              {!emailValid && <div class="invalid-feedback">El email no es válido</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" style={{ margin: "15px" }}>
        <p className="d-inline-flex gap-1">
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseTelephone" role="button" aria-expanded="false" aria-controls="collapseExample">
            Teléfono
          </a>
        </p>
        <div className="collapse" id="collapseTelephone">
          <div className="card card-body">
            <div className="mb-3">
              <label className="form-label">Ingrese su teléfono</label>
              <input className={`form-control ${telephoneValid ? 'is-valid' : 'is-invalid'}`} value={telephone} onChange={handleTelephoneInputChange} />
              {!telephone && <div class="invalid-feedback">El teléfono no es válido</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Validator;