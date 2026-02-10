// Get person from URL parameter
function getPersonFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('person') || 'rich'; // default to 'rich'
}

// Load JSON data
async function loadPersonData(person) {
  try {
    const response = await fetch(`person/${person}.json`);

    if (!response.ok) {
      throw new Error(`Data file not found for person: ${person}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
}

// Main function
async function init() {
  const container = document.getElementById('signature-container');
  const person = getPersonFromUrl();

  try {
    // Load data
    const data = await loadPersonData(person);

    if (!data) {
      container.innerHTML = '<div style="padding:40px;text-align:center;color:#e74c3c;">Person not found</div>';
      return;
    }

    // Replace placeholders
    const html = renderSignature(data);

    // Render
    container.innerHTML = html;

  } catch (error) {
    console.error('Error:', error);
    container.innerHTML = '<div style="padding:40px;text-align:center;color:#e74c3c;">Error loading signature</div>';
  }
}

function renderSignature(data) {
  // Clean URLs (remove trailing spaces)
  const clean = (str) => str ? str.trim() : '';

  const html = `
    <table width="500" style="width: 500px;" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="500" style="width: 500px;">
          <table width="502" cellspacing="0" border="0" style="width: 502px;background-color: #ffffff;">
            <tr>
              <td width="502" style="width: 502px;" height="20"></td>
            </tr>
          </table>
          <table width="500" cellpadding="0" cellspacing="0" border="0" style="width: 500px;font-family: 'Segoe UI', sans-serif;font-weight: 200;">
            <tbody>
              <tr>
                <td style="width: 185px; background-color:#F2F1F0;vertical-align: top;" align="center">
                  <table width="185" style="width: 185px;" cellspacing="0" border="0">
                    <tr>
                      <td width="185" style="width: 185px;">
                        <img src="${clean(data.profileImage)}" alt="Profile Photo" style="width: 185px; height: auto; display:block; border:0; outline:none; text-decoration:none;" />
                      </td>
                    </tr>
                  </table>
                </td>
                <td style="width: 315px; vertical-align:top;background-color:#F2F1F0;" align="left">
                  <table width="315" cellspacing="0" border="0" style="width: 315px;background-color: #ffffff;">
                    <tr>
                      <td width="315" style="width: 315px; padding: 0 10px 5px 20px">
                        <img src="${clean(data.signatureTitleImage)}" alt="Signature Title"
                          height="65" style="display: block;margin: 0 0 0 0;border:0;"/>
                      </td>
                    </tr>
                    ${
                      data?.ctaLink
                        ? `
                          <tr>
                            <td style="padding: 0 10px 15px 20px">
                              <a href="${clean(data.ctaLink)}" target="_blank" style="display: inline-block; text-align: left;">
                                <img src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-Button-CTA.png"
                                  height="35" alt="CTA"
                                  style="display:inline-block;border:0;outline:none;text-decoration:none;"/>
                              </a>
                            </td>
                          </tr>
                        `
                        : ''
                    }
                  </table>

                  <table width="315" style="width: 315px;" cellspacing="0" border="0">
                    <tr>
                      <td style="background-color:#F2F1F0;padding: 15px 20px 0 20px;font-weight: 200;line-height: 1.1;" valign="top">
                        <p style="margin: 0 0 6px 0;">
                          ${
                            data?.phone1Link
                              ?
                                `<a href="${clean(data.phone1Link)}" target="_blank" style="text-decoration: none; border:none; display:inline-block;">
                                  <img height="9" src="${clean(data.phone1Image)}" style="border:0;vertical-align:middle;"/>
                                </a>
                                <img height="10" src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-divider-3.png" style="margin: 0 1px 0 2px;border:0;vertical-align:middle;"/>`
                              : ''
                          }
                          <a href="https://jaka1901.github.io/auto-call?number=+61390888077" target="_blank" style="text-decoration: none; border:none; display:inline-block;">
                            <img height="9" src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-phone-2-2.png" style="border:0;vertical-align:middle;"/>
                          </a>
                        </p>
                        <p style="margin: 0 0 6px 0;">
                          <a href="https://www.heyjack.com.au/" target="_blank" style="text-decoration: none; border:none; display:inline-block;">
                            <img height="13" src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-website3.png" style="border:0;vertical-align:middle;"/>
                          </a>
                        </p>
                        <p style="margin: 0 0 6px 0;">
                          <img height="11" src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-address-2.png" style="border:0;vertical-align:middle;"/>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td width="280" style="width: 280px; padding: 0 15px 0 20px; vertical-align: bottom;">
                        <table width="280" cellspacing="0" border="0" style="width: 280px;margin: 15px 0 0 0;">
                          <tr>
                            <td width="190px" style="width: 190px;">
                              <a href="https://www.instagram.com/heyjack_co" style="text-decoration: none; border:none; display:inline-block;" target="_blank">
                                <img height="20" src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-ig-2.png" style="margin: 0 8px 0 0;border:0;vertical-align:middle;"/>
                              </a>
                              <a href="https://www.tiktok.com/@heyjack_co" style="text-decoration: none; border:none; display:inline-block;" target="_blank">
                                <img height="20" src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-tt-2.png" style="border:0;vertical-align:middle;"/>
                              </a>
                            </td>
                            <td width="90px" style="width: 90px;text-align: right;">
                              <a href="https://www.heyjack.com.au/" target="_blank">
                                <img src="https://www.heyjack.com.au/wp-content/uploads/2026/02/signature-hj-logo.png" height="18" alt="Arrow" style="display:inline-block;border:0;"/>
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table width="502" cellspacing="0" border="0" style="width: 502px; background-color: #F2F1F0;">
            <tr>
              <td width="502" style="width: 502px;" height="15"></td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `;

  return  html
}


// Run when page loads
document.addEventListener('DOMContentLoaded', init);