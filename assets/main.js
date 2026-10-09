const email = 'contact@damian-proksch.social';

document.querySelectorAll('[data-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});

const copyButton = document.querySelector('#copy-email');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = 'E-Mail-Adresse kopiert.';
    } catch {
      status.textContent = `Bitte kopiere die Adresse manuell: ${email}`;
    }
  });
}

const grid = document.querySelector('#certificate-grid');
const certificates = window.portfolioCertificates;

if (grid && Array.isArray(certificates) && certificates.length) {
  const dialog = document.querySelector('#certificate-dialog');
  const image = document.querySelector('#dialog-image');
  const title = document.querySelector('#dialog-title');
  const details = document.querySelector('#dialog-details');
  const count = document.querySelector('#certificate-count');
  let lastTrigger;
  count.textContent = `${certificates.length} ${certificates.length === 1 ? 'Nachweis' : 'Nachweise'}`;
  grid.replaceChildren();

  certificates.forEach(certificate => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'certificate-card';
    card.setAttribute('aria-haspopup', 'dialog');
    const thumbnail = document.createElement('img');
    thumbnail.src = certificate.image;
    thumbnail.alt = certificate.title;
    thumbnail.loading = 'lazy';
    const copy = document.createElement('span');
    copy.className = 'certificate-copy';
    const heading = document.createElement('strong');
    heading.textContent = certificate.title;
    const meta = document.createElement('small');
    meta.textContent = [certificate.issuer, certificate.date].filter(Boolean).join(' · ');
    const link = document.createElement('span');
    link.className = 'text-link';
    link.textContent = 'Nachweis ansehen ↗';
    copy.append(heading, meta, link);
    card.append(thumbnail, copy);
    card.addEventListener('click', () => {
      lastTrigger = card;
      image.src = certificate.image;
      image.alt = certificate.title;
      title.textContent = certificate.title;
      details.textContent = meta.textContent;
      dialog.showModal();
    });
    grid.append(card);
  });

  document.querySelector('#dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener('close', () => lastTrigger?.focus());
}
