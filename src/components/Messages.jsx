import { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'rsvp'),
      orderBy('createdAt', 'desc'),
    );

    const unsubscribe = onSnapshot(messagesQuery, (querySnapshot) => {
      const data = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((msg) => msg.message !== '');
      setMessages(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {messages.map((msg) => (
        <div className='row my-1 section-messages ' key={msg.id}>
          <div
            className="card-message bg-light rounded-3 p-3 transition-all hover-shadow-sm my-3"
          >
            <h3 className="fw-bold text-dark mb-1 fs-5">{msg.name}</h3>
            <p className="text-muted fs-6">{msg.message}</p>
          </div>
        </div>
      ))}
    </>
  );
}
