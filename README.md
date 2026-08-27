# Web Development Coursework

HTML, CSS, and JavaScript exercises from my Web Development class. The repo covers introductory markup notes, a personal profile page, and a themed registration form.

## Projects

### Example — HTML basics

Introductory notes on HTML structure, document type, and common tags (`<html>`, `<head>`, `<body>`, headings, paragraphs, bold text).

- Open: [`Example/sample1.html`](Example/sample1.html)

### Profile — Personal webpage

A single-page profile for Jeremias G. Pablo, built with HTML and CSS. It includes:

- Header with photo, subtitle, and quote
- In-page navigation
- About, hobbies, and skills sections
- Contact details and a mailto form

- Open: [`Profile/profile.html`](Profile/profile.html)

### Form — Bring Back the Light

A registration flow themed around [Bring Back the Light](https://bringbackthelight.org/), a firefly conservation initiative in Bali. It practices forms, client-side validation, and layout.

**Registration page** ([`Form/register-form.html`](Form/register-form.html))

- Name, email, password, confirm password, gender, date of birth, and country
- Live password checks (length, number, special character, match)
- Custom “Other” gender field
- Terms checkbox that enables the submit button
- Video background with a static image fallback

**Terms page** ([`Form/terms.html`](Form/terms.html))

- Membership, privacy, and conservation guidelines
- Link back to the registration form

## How to view

Open any HTML file in a browser. No build step or server is required.

```text
Example/sample1.html
Profile/profile.html
Form/register-form.html
Form/terms.html
```

For the form project, keep the `Form/assets` folder next to the HTML files so the logo, video, and fallback image load correctly.

## Tech

| Area       | Used for                                      |
| ---------- | --------------------------------------------- |
| HTML       | Page structure, semantic sections, forms      |
| CSS        | Layout, theming, custom inputs, media queries |
| JavaScript | Password rules, form behavior, video fallback |
