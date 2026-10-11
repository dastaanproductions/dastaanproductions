import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { contact } from '../data/siteInfo';

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${contact.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
