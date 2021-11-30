import React from 'react';

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Link</h2>
      <p>
        Your link:{' '}
        <a href={link.to} target="_blank" rel="noopener noreferrer">
          {link.to}
        </a>
      </p>
      <p>
        From:{' '}
        <a href={link.form} target="_blank" rel="noopener noreferrer">
          {link.form}
        </a>
      </p>
      <p>
        Link clicks: <strong>{link.clicks}</strong>
      </p>
      <p>
        Creation date: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </p>
    </>
  );
};
