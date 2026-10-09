# Damian Proksch · Portfolio

Mehrseitiges deutsches Portfolio für damian-proksch.social. Reines HTML, CSS und JavaScript, ohne Abhängigkeiten, externe Schriftarten oder Code-Kommentare.

## Seiten

- index.html: Startseite
- story.html: Story mit als unvollständig gekennzeichnetem Werdegang
- zertifikate.html: Zertifikatsgalerie mit zugänglicher Großansicht
- kontakt.html: E-Mail-Kontakt und Kopierfunktion
- 404.html: Fehlerseite

## Auf GitHub veröffentlichen

1. Ein neues öffentliches Repository anlegen, beispielsweise `portfolio`.
2. Den Inhalt dieses Ordners direkt in das Repository hochladen. `index.html` muss im Hauptverzeichnis liegen, nicht in einem zusätzlichen Unterordner. Die leere Datei `.nojekyll` ebenfalls hinzufügen, gegebenenfalls über Git.
3. Unter Settings → Pages als Quelle „Deploy from a branch“ auswählen: Branch `main`, Ordner `/(root)`.
4. Unter „Custom domain“ `damian-proksch.social` eintragen. Die beiliegende CNAME-Datei allein aktiviert die Domain nicht in den Einstellungen.
5. Die Domain zuerst gemäß GitHub-Anleitung verifizieren und beim Domainanbieter die DNS-Einträge für GitHub Pages konfigurieren. Bestehende MX-, SPF-, DKIM- und DMARC-Einträge für die E-Mail unverändert lassen. Keine Nameserver pauschal ersetzen.
6. Nach erfolgreicher DNS-Prüfung „Enforce HTTPS“ aktivieren.

Aktuelle offizielle Anleitungen:

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages

Das Projekt wurde nicht in ein GitHub-Konto hochgeladen. Domain und DNS wurden nicht verändert.

## Zertifikate ergänzen

Bilder als JPG, PNG oder WebP in `assets/certificates/` speichern. Dateinamen ohne Leerzeichen verwenden. In `assets/certificates.js` echte Nachweise hinterlegen:

```js
window.portfolioCertificates = [
  {
    title: 'Titel deines echten Zertifikats',
    issuer: 'Aussteller',
    date: 'Monat Jahr',
    image: 'assets/certificates/dein-zertifikat.webp'
  }
];
```

Vier echte Nachweise sind bereits hinterlegt. Die PNGs wurden aus den gelieferten PDF-Seiten bei 200 dpi gerendert, ohne Zuschnitt, Retusche oder Inhaltsänderungen. Die Einträge erscheinen in der angegebenen Reihenfolge. Die Jahreszahl wird im Footer automatisch aktualisiert. Persönliche Angaben, die nicht öffentlich sein sollen, vor dem Hochladen aus Zertifikatsbildern entfernen.

## Persönliche Inhalte

Die Story ist ein neutraler erster Entwurf. Vor der Veröffentlichung eigene Stationen, beruflichen Schwerpunkt und Ziele in `story.html` ergänzen. Anschließend den Hinweis „Story in Vorbereitung“ entfernen. Es wurden keine Arbeitgeber, Abschlüsse, Berufserfahrungen oder Zertifikate erfunden.

Die Website enthält noch keine individuell ausgefüllten rechtlichen Angaben. Vor öffentlicher Nutzung die für dein Portfolio erforderlichen Angaben zu Impressum und Datenschutz ergänzen. Im gelieferten Stand werden keine Analyse-Tools, Cookies oder Kontaktformulare eingesetzt.

## Lokal ansehen

Im Projektordner ausführen:

```bash
python3 -m http.server 8000
```

Dann http://localhost:8000 im Browser öffnen. Kein Build erforderlich. Die Kopierfunktion benötigt einen sicheren Browserkontext; HTTPS oder localhost verwenden.
