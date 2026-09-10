// data.js
const memberData = {
  firstname: 'Ezéchiel',
  lastname: 'SINZINKAYO',
  number: '34652',
  statut: 'Full Member',
  phone: '79 123 456',
  email: 'sinzinkayo@gmail.com',
  signingDate: new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
  photoSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  signatureSrc: 'https://static.vecteezy.com/ti/vecteur-libre/p1/59415135-elegant-noir-signature-faux-un-autographe-echantillons-elegant-manuscrit-un-autographe-numerique-encre-signature-isole-sur-transparent-contexte-pour-exemples-de-documents-certificats-et-contrats-vectoriel.jpg',
  qrCodeSrc: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
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