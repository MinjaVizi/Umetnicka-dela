import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Kontakt = () => {
  const [ime, setIme] = useState('');
  const [prezime, setPrezime] = useState('');
  const [email, setEmail] = useState('');
  const [poruka, setPoruka] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ovdje možete postaviti logiku za slanje podataka na server ili drugu potrebnu obradu
    console.log('Podaci poslani:', { ime, prezime, email, poruka });

    // Pokažemo SweetAlert prozor sa porukom
    Swal.fire({
      title: 'Hvala!',
      text: 'Očekujte povratnu informaciju u najkraćem mogućem roku.',
      icon: 'success',
      confirmButtonText: 'Ok',
    });

    // Resetiramo polja forme
    setIme('');
    setPrezime('');
    setEmail('');
    setPoruka('');
  };

  return (
    <div className="kontakt-forma">
      <h2>Kontaktirajte nas</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ime:</label>
          <input
            type="text"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Prezime:</label>
          <input
            type="text"
            value={prezime}
            onChange={(e) => setPrezime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Poruka:</label>
          <textarea
            value={poruka}
            onChange={(e) => setPoruka(e.target.value)}
            required
          />
        </div>
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};

export default Kontakt;



