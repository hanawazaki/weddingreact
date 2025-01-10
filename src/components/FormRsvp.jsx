import { useState } from 'react'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormRsvp = ({ handleModalToggle }) => {

  const [formData, setFormData] = useState({
    name: '',
    message: '',
    attendance: 'not',
    count: 0,
  });

  const handleChange = (e) => {
    const { name, value, id, type } = e.target;

    const updatedValue = type === 'number' ? Number(value) : value;

    setFormData((prevData) => {
      if (name === 'attendance' && id === 'attend') {
        return { ...prevData, attendance: 'attend', count: 1 };
      }

      if (name === 'attendance' && id === 'not') {
        return { ...prevData, attendance: 'not', count: 0 };
      }

      return {
        ...prevData,
        [name || 'attendance']: id || updatedValue,
      };
    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.attendance == 'attend' && formData.count < 1) {
        alert("isi jumlah kehadiran terlebih dahulu")
        return false
      }

      const docRef = await addDoc(collection(db, 'rsvp'), {
        ...formData,
        createdAt: serverTimestamp(), // Field createdAt
      });

      alert("Data berhasil disimpan!");
      // Reset form (optional)
      setFormData({
        name: '',
        message: '',
        attendance: 'not',
        count: 0,
      });
      handleModalToggle(false)
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <div className="modal-overlay wpo-contact-section " onClick={handleModalToggle}
      style={{
        paddingBottom: "0px",

      }}>
      <div className="modal-content wpo-contact-section-wrapper" style={{ width: "600px" }} onClick={(e) => e.stopPropagation()}>
        <div className='wpo-contact-form-area'>
          <div className="fw-semibold fs-6 text-center mb-4">
            <h4 className='text-white'>Konfirmasi kehadiran & pesan</h4>
          </div>
          <form className="contact-validation-active" id="contact-form-main" onSubmit={handleSubmit}
            style={{

            }}
          >
            <div className='mb-3'>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required />
            </div>
            <div className='mb-3'>
              <textarea
                className="form-control"
                style={{ height: 'auto' }}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder='Pesan'
                rows="4"
              />
            </div>
            <div className="radio-buttons mb-3">
              <p>
                <input
                  type="radio"
                  id="attend"
                  name="attendance"
                  checked={formData.attendance === 'attend'}
                  onChange={handleChange}
                />
                <label htmlFor="attend">Ya, Saya akan datang</label>
              </p>
              <p>
                <input
                  type="radio"
                  id="not"
                  name="attendance"
                  checked={formData.attendance === 'not'}
                  onChange={handleChange}
                />
                <label htmlFor="not">Maaf, Saya tidak bisa datang</label>
              </p>
            </div>
            <div className='mb-3'>
              {
                formData.attendance === 'attend' && (
                  <>
                    <label htmlFor="" style={{ color: "white" }}>
                      Jumlah Kehadiran
                    </label>
                    <input type="number" className='form-control'
                      name="count"
                      value={formData.count}
                      onChange={(e) => {
                        const value = Math.max(0, Number(e.target.value));
                        setFormData({ ...formData, count: value });
                      }}
                      required
                    />

                  </>
                )
              }

            </div>
            <div className="submit-area">
              <button type="submit" className="btn-schedule">Kirim</button>
              <div id="c-loader">
                <i className="ti-reload"></i>
              </div>
            </div>
            <div className="clearfix error-handling-messages">
              <div id="success">Thank you</div>
              <div id="error"> Error occurred while sending email. Please try again later.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  )
}

export default FormRsvp