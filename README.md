# Rownd Authentication Festival Demo

A demo showcasing Rownd's authentication and SquadUp ticketing integration in a static HTML page.

## Quick Start

1. Clone the repository: 

```bash
git clone https://github.com/rgthelen/rownd-squadup-ticket-demo.git
cd rownd-squadup-ticket-demo
```

2. Run and install http-server (or any other local server that can serve static files)

```bash
npm install -g http-server
http-server
```
3. Visit `http://localhost:8080` in your browser

## Setting up Rownd Integration

### Code Implementation

1. Create a Rownd app and get the app key; https://app.rownd.io

2. Add the Rownd snippet to your HTML:

https://app.rownd.io/code/

```html
  <script>
    !function () { 
      var e = window._rphConfig = window._rphConfig || [];
      let t = window.localStorage.getItem("rph_base_url_override") || "https://hub.rownd.io"; e.push(["setBaseUrl", t]);
      var r = document, s = r.createElement("script"), m = r.createElement("script"), a = r.getElementsByTagName("script")[0];
      s.type = "text/javascript", s.noModule = !0, s.async = !0, s.src = t + "/static/scripts/rph.js", a.parentNode.insertBefore(s, a);
      m.type = "module", m.async = !0, m.src = t + "/static/scripts/rph.mjs", a.parentNode.insertBefore(m, a);
    } ();
    _rphConfig.push(["setAppKey", "key_fbp3arnk3ots40ef54qkemdb" ]);
  </script>

  ```

3. Add the button trigger for tickets:

```html



# Rownd Authentication Festival Demo

A demo showcasing Rownd's authentication and SquadUp ticketing integration in a static HTML page.

## Quick Start

1. Clone the repository:
bash
git clone https://github.com/yourusername/rownd-festival.git
cd rownd-festival

2. Install and run http-server:
bash
npm install -g http-server
http-server

3. Visit `http://localhost:8080` in your browser

## Setting up Rownd Integration

### Code Implementation

1. Create a Rownd app and get the app key; https://app.rownd.io

2. Add the Rownd snippet to your HTML:

```html
  <script>
    !function () { 
      var e = window._rphConfig = window._rphConfig || [];
      let t = window.localStorage.getItem("rph_base_url_override") || "https://hub.rownd.io"; e.push(["setBaseUrl", t]);
      var r = document, s = r.createElement("script"), m = r.createElement("script"), a = r.getElementsByTagName("script")[0];
      s.type = "text/javascript", s.noModule = !0, s.async = !0, s.src = t + "/static/scripts/rph.js", a.parentNode.insertBefore(s, a);
      m.type = "module", m.async = !0, m.src = t + "/static/scripts/rph.mjs", a.parentNode.insertBefore(m, a);
    } ();
    _rphConfig.push(["setAppKey", "YOUR_ROWND_APP_KEY" ]);
  </script>
  ```

3. Add the button trigger for tickets:

Open “My tickets” from a clickable element
Add the attribute below to a clickable element (like a button or link) to trigger the “My tickets” modal


```html
<button data-rownd-tickets-open>My tickets</button>
```

OR

Open “My tickets” using javascript

Add the following javascript function to a clickable element (like a button or link) to trigger the “My tickets” modal.
rownd.squadUp.yourTickets()

Example:

```html 
<button onClick{() => rownd.squadUp.yourTickets()}>My tickets</button>
```


### Rownd Configuration

3. Get a SquadUp API Key:
   - Contact SquadUp support at support@squadup.com

4. Configure SquadUp in Rownd:
   - Navigate to Integrations > SquadUp
   - Add your SquadUp API key
   - Configure desired settings
   Add trusted domains:
   - Go to Settings > Domains
   - Add your domains (including test domains like `localhost:8080`)
   - Include all development and production URLs (or set up multiple Rowond apps)

5. Customize the experience:
   - Go to the Design tab
   - Modify colors, text, and branding
   - Configure authentication flows

## Important Notes

- **Feature Activation**: Contact both support@squadup.com and support@rownd.io to enable this integration
- **Local Development**: Ensure you add your local development URL (e.g., `http://localhost:8080`) to Rownd's trusted domains
- **Security**: Never commit your Rownd app key or SquadUp API key to version control

## Support

For questions or issues:
- Rownd Support: support@rownd.io
- SquadUp Support: support@squadup.com


