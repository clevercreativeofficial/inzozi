// data.js
const memberData = {
  firstname: 'Ezéchiel',
  lastname: 'SINZINKAYO',
  number: '34652',
  statut: 'Full Member',
  substatut: 'Membre à part entière',
  phone: '79 123 456',
  email: 'sinzinkayo@gmail.com',
  pageNumber: '1',
  totalPages: '6',
  signingDate: new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
  photoSrc: './assets/images/ezechiel.png',
  signatureSrc: './assets/images/signature.png',
  qrCodeSrc: './assets/images/qr-code.webp',
  statutIconSrc: './assets/icons/circle-star.svg',
};

function hydrate(data) {
  Object.entries(data).forEach(([field, value]) => {
    document.querySelectorAll(`[data-field="${field}"]`).forEach((el) => {
      if (el.tagName === 'IMG') {
        el.src = value;
      } else {
        el.textContent = value;
      }
    });
  });
}

hydrate(memberData);