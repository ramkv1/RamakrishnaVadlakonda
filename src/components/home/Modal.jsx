import React, { useState } from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';
import emailjs from '@emailjs/browser';


const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
      endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
  });

const CalendarModal = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleScheduleMeeting = () => {
    if (selectedTime) {
      alert(`Meeting scheduled from ${selectedTime.startTime} till 30 mins`);
    } else {
      alert('No meeting time selected');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedTime && email && name) {
      const templateParams = {
        from_name: name,
        to_name: email,
        subject: 'Scheduled Meeting Details',
        message: `Hi ${name},\n\nYour meeting has been scheduled for ${selectedTime.startTime} till 30 mins.`
      };

      emailjs.send('service_lrkdihg', 'template_k1qwzdg', templateParams, 'QVArMZv5XVK9Zgbli')
        .then((response) => {
          console.log('Email sent successfully!', response);
          // Example: Display a success message to the user
          alert('Email sent successfully!');
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          // Example: Display an error message to the user
          alert('Email sending failed.');
        });

      // Reset form fields
      setEmail('');
      setName('');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  
  return (
    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">
              Schedule Call
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ScheduleMeeting
              borderRadius={10}
              primaryColor="#3f5b85"
              eventDurationInMinutes={30}
              availableTimeslots={availableTimeslots}
              onStartTimeSelect={setSelectedTime}
            />
            {selectedTime && (
              <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Send Meeting Details
                </button>
              </form>
            )}
            {!selectedTime && (
              <p>Please select a date and time for the meeting.</p>
            )}
            <button className="btn btn-primary mt-3" onClick={handleScheduleMeeting}>
              Schedule Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
