
import React from 'react';

interface BookingWidgetProps {
  src: string;
  id: string;
}

const BookingWidget: React.FC<BookingWidgetProps> = ({ src, id }) => {
  return (
    // The container is given a slightly smaller border-radius than the modal parent
    // to ensure the iframe corners do not stick out.
    // The height is now more responsive to avoid being too short on some screens.
    <div className="overflow-hidden" style={{ height: '75vh', minHeight: '600px', borderRadius: '14px' }}>
        <iframe
            title="Book an Appointment"
            src={src}
            style={{ width: '100%', height: '100%', border: 'none' }}
            scrolling="auto"
            id={id}
        ></iframe>
    </div>
  );
};

export default BookingWidget;