// data.js
const memberData = {
  firstname: 'Ezéchiel',
  lastname: 'SINZINKAYO',
  number: '02534652',
  signingDate: new Date().toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }),
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