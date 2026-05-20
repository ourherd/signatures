// Email Signature Generator
const IMAGE_BASE_URL =
    'https://batyr-assets.s3.ap-southeast-2.amazonaws.com/signatures/';

// Image mapping
const IMAGES = {
    logo: IMAGE_BASE_URL + 'batyr-logo.png',
    social1: IMAGE_BASE_URL + 'website-icon.png',
    social2: IMAGE_BASE_URL + 'linkedin-icon.png',
    social3: IMAGE_BASE_URL + 'instagram-icon.png',
    social4: IMAGE_BASE_URL + 'tiktok-icon.png',
    social5: IMAGE_BASE_URL + 'facebook-icon.png',
    social6: IMAGE_BASE_URL + 'youtube-icon.png',
    social7: IMAGE_BASE_URL + 'pintrest-icon.png',
    certified: IMAGE_BASE_URL + 'diversity-flags.png',
};

// Signature templates
const templates = {
    short: (data) => `<html lang="en" dir="ltr">
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <title>${data.name} - Email Signature</title>
    <style type="text/css">
        ol{margin:0;padding:0}
        table td,table th{padding:0}
        .c16{color:#002554;font-weight:600;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c15{font-size:10.5pt;font-family:Montserrat,sans-serif;color:#002554;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap}
        .c30{color:#222222;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:6pt;font-family:Arial, sans-serif;font-style:normal}
        .c13{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left;height:11pt}
        .c20{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left}
        .c31{padding-top:0pt;padding-bottom:7pt;line-height:1.0;text-align:left}
        .c21{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}
        .c10{orphans:2;widows:2}
    </style>
</head>
<body>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;margin-right:auto;">
        <tr>
            <td colspan="1" rowspan="1" style="width:64.5pt;vertical-align:middle;">
                <p class="c21 c10"><img alt="Batyr logo" src="${IMAGES.logo}" width="71" height="74" style="width:71.22px;height:74.36px;display:block;border:0;" title="Batyr - the preventative mental health organisation"></p>
            </td>
            <td colspan="1" rowspan="1" style="width:259.5pt;vertical-align:middle;">
                <p class="c10 c31"><span class="c16">${data.name}</span></p>
                <p class="c10 c21"><span class="c15">${data.position}</span></p>
                ${data.phone ? `<p class="c21 c10"><span class="c15">${data.phone}</span></p>` : ''}
                ${data.pronouns ? `<p class="c21 c10"><span class="c15">${data.pronouns}</span></p>` : ''}
            </td>
        </tr>
        <tr>
            <td colspan="2" rowspan="1" style="width:324pt;vertical-align:middle;">
                <p class="c10 c13"><span class="c30" aria-hidden="true"></span></p>
                <p class="c10 c20" style="margin-top: 6pt; margin-bottom: 12pt;"><a href="https://www.batyr.com.au/" style="text-decoration:none;" title="Visit Batyr website" aria-label="Visit Batyr website"><img alt="Batyr website" src="${IMAGES.social1}" width="29" height="28" style="width:28.50px;height:28.16px;display:inline-block;border:0;vertical-align:middle;" title="Batyr website"></a><a href="https://www.linkedin.com/company/batyr-pty-ltd/" style="text-decoration:none;" title="Visit Batyr on LinkedIn" aria-label="Visit Batyr on LinkedIn"><img alt="LinkedIn" src="${IMAGES.social2}" width="30" height="29" style="width:29.50px;height:28.55px;display:inline-block;border:0;vertical-align:middle;" title="LinkedIn"></a><a href="https://www.instagram.com/batyraus/" style="text-decoration:none;" title="Visit Batyr on Instagram" aria-label="Visit Batyr on Instagram"><img alt="Instagram" src="${IMAGES.social3}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Instagram"></a><a href="https://www.tiktok.com/@batyraus" style="text-decoration:none;" title="Visit Batyr on TikTok" aria-label="Visit Batyr on TikTok"><img alt="TikTok" src="${IMAGES.social4}" width="29" height="29" style="width:28.50px;height:29.19px;display:inline-block;border:0;vertical-align:middle;" title="TikTok"></a><a href="https://www.facebook.com/batyraus/" style="text-decoration:none;" title="Visit Batyr on Facebook" aria-label="Visit Batyr on Facebook"><img alt="Facebook" src="${IMAGES.social5}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Facebook"></a><a href="https://www.youtube.com/@batyraustralia" style="text-decoration:none;" title="Visit Batyr on Youtube" aria-label="Visit Batyr on Youtube"><img alt="Youtube" src="${IMAGES.social6}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Youtube"></a><a href="https://au.pinterest.com/batyraus/" style="text-decoration:none;" title="Visit Batyr on Pintrest" aria-label="Visit Batyr on Pintrest"><img alt="Pintrest" src="${IMAGES.social7}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Pintrest"></a></p>
            </td>
        </tr>
    </table>
</body>
</html>`,

    long: (data) => `<html lang="en" dir="ltr">
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <title>${data.name} - Email Signature</title>
    <style type="text/css">
        ol{margin:0;padding:0}
        table td,table th{padding:0}
        .c34{color:#002554;font-weight:600;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c15{font-size:10.5pt;font-family:Montserrat,sans-serif;color:#002554;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap}
        .c32{color:#222222;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:5pt;font-family:Arial, sans-serif;font-style:normal}
        .c33{font-size:10pt;font-family:Montserrat,sans-serif;color:#2b7de1;background-color:transparent;font-weight:300;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap}
        .c13{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left;height:11pt}
        .c20{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left}
        .c31{padding-top:0pt;padding-bottom:7pt;line-height:1.0;text-align:left}
        .c21{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}
        .c10{orphans:2;widows:2}
    </style>
</head>
<body>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border-spacing:0;margin-right:auto;">
        <tr>
            <td colspan="1" rowspan="1" style="width:64.5pt;vertical-align:middle;">
                <p class="c21 c10"><img alt="Batyr logo" src="${IMAGES.logo}" width="71" height="74" style="width:71.22px;height:74.36px;display:block;border:0;" title="Batyr - the preventative mental health organisation"></p>
            </td>
            <td colspan="1" rowspan="1" style="width:257.2pt;vertical-align:middle;">
                <p class="c31 c10"><span class="c34">${data.name}</span></p>
                <p class="c21 c10"><span class="c15">${data.position}</span></p>
                ${data.phone ? `<p class="c21 c10"><span class="c15">${data.phone}</span></p>` : ''}
                ${data.pronouns ? `<p class="c21 c10"><span class="c15">${data.pronouns}</span></p>` : ''}
            </td>
        </tr>
        <tr>
            <td colspan="2" rowspan="1" style="width:321.8pt;vertical-align:middle;">
                <p class="c13 c10"><span class="c32" aria-hidden="true"></span></p>
                <p class="c10 c20" style="margin-top: 6pt; margin-bottom: 12pt;"><a href="https://www.batyr.com.au/" style="text-decoration:none;" title="Visit Batyr website" aria-label="Visit Batyr website"><img alt="Batyr website" src="${IMAGES.social1}" width="29" height="28" style="width:28.50px;height:28.16px;display:inline-block;border:0;vertical-align:middle;" title="Batyr website"></a><a href="https://www.linkedin.com/company/batyr-pty-ltd/" style="text-decoration:none;" title="Visit Batyr on LinkedIn" aria-label="Visit Batyr on LinkedIn"><img alt="LinkedIn" src="${IMAGES.social2}" width="30" height="29" style="width:29.50px;height:28.55px;display:inline-block;border:0;vertical-align:middle;" title="LinkedIn"></a><a href="https://www.instagram.com/batyraus/" style="text-decoration:none;" title="Visit Batyr on Instagram" aria-label="Visit Batyr on Instagram"><img alt="Instagram" src="${IMAGES.social3}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Instagram"></a><a href="https://www.tiktok.com/@batyraus" style="text-decoration:none;" title="Visit Batyr on TikTok" aria-label="Visit Batyr on TikTok"><img alt="TikTok" src="${IMAGES.social4}" width="29" height="29" style="width:28.50px;height:29.19px;display:inline-block;border:0;vertical-align:middle;" title="TikTok"></a><a href="https://www.facebook.com/batyraus/" style="text-decoration:none;" title="Visit Batyr on Facebook" aria-label="Visit Batyr on Facebook"><img alt="Facebook" src="${IMAGES.social5}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Facebook"></a><a href="https://www.youtube.com/@batyraustralia" style="text-decoration:none;" title="Visit Batyr on Youtube" aria-label="Visit Batyr on Youtube"><img alt="Youtube" src="${IMAGES.social6}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Youtube"></a><a href="https://au.pinterest.com/batyraus/" style="text-decoration:none;" title="Visit Batyr on Pintrest" aria-label="Visit Batyr on Pintrest"><img alt="Pintrest" src="${IMAGES.social7}" width="29" height="29" style="width:28.50px;height:28.99px;display:inline-block;border:0;vertical-align:middle;" title="Pintrest"></a></p>
            </td>
        </tr>
    </table>
    <p class="c21 c10" style="margin-top: 12pt; margin-bottom: 6pt;"><span class="c33">I acknowledge the Aboriginal and Torres Strait Islander peoples as traditional custodians of the land on which batyr operates, and pay my respect to Elders past and present.</span></p>
    <p class="c21 c10" style="margin-bottom: 12pt;"><span class="c33">batyr is committed to providing a safe, culturally appropriate, inclusive environment for all people, regardless of their ethnicity, faith, disability, sexuality, or gender identity.</span></p>
    <p class="c21 c10" style="margin-top: 12pt;"><img alt="Aboriginal flag, Torres Strait Islander flag, Pride flag, and Transgender flag" src="${IMAGES.certified}" width="156" height="22" style="width:155.50px;height:22.00px;display:block;border:0;" title="Aboriginal flag, Torres Strait Islander flag, Pride flag, and Transgender flag"></p>
</body>
</html>`,
};

// DOM elements
let form, signaturePreview, htmlCode, notification;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    form = document.getElementById('signatureForm');
    signaturePreview = document.getElementById('signaturePreview');
    htmlCode = document.getElementById('htmlCode');
    notification = document.getElementById('notification');

    // Set up event listeners for reactive updates
    const inputs = form.querySelectorAll('input, select');
    inputs.forEach((input) => {
        input.addEventListener('input', generateSignatureReactive);
        input.addEventListener('change', generateSignatureReactive);
    });

    // Tab switching
    document.querySelectorAll('.tab-button').forEach((button) => {
        button.addEventListener('click', switchTab);
    });

    // Copy buttons
    document
        .getElementById('copySignature')
        .addEventListener('click', copySignature);
    document.getElementById('resetForm').addEventListener('click', resetForm);

    // Generate initial signature with pre-populated values
    generateSignatureReactive();
});

function generateSignatureReactive() {
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name').trim(),
        position: formData.get('position').trim(),
        phone: formData.get('phone').trim(),
        pronouns: formData.get('pronouns').trim(),
        template: formData.get('template'),
    };

    // Only generate if we have required fields
    if (data.name && data.position) {
        // Generate signature HTML
        const signatureHtml = templates[data.template](data);

        // Update preview
        signaturePreview.innerHTML = signatureHtml;
        htmlCode.value = signatureHtml;
    }
}

function generateSignature(e) {
    e.preventDefault();
    generateSignatureReactive();
    showNotification('Signature generated!', 'success');
}

function switchTab(e) {
    // Update active tab button
    document.querySelectorAll('.tab-button').forEach((btn) => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Show/hide tab content
    const tabName = e.target.dataset.tab;
    document.querySelectorAll('.tab-content').forEach((content) => {
        content.style.display = 'none';
    });

    if (tabName === 'preview') {
        document.getElementById('previewTab').style.display = 'block';
    } else {
        document.getElementById('htmlTab').style.display = 'block';
    }
}

async function copyHtmlCode() {
    try {
        await navigator.clipboard.writeText(htmlCode.value);
        showNotification(
            'Nice! HTML code copied and ready to paste!',
            'success',
        );
    } catch (err) {
        // Fallback for older browsers
        htmlCode.select();
        document.execCommand('copy');
        showNotification(
            'Nice! HTML code copied and ready to paste!',
            'success',
        );
    }
}

async function copySignature() {
    try {
        // Get the actual signature HTML (without wrapper)
        const signatureContent =
            signaturePreview.querySelector('html') ||
            signaturePreview.firstElementChild ||
            signaturePreview;

        // Create a temporary element to select the HTML
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.style.background = 'transparent';

        // Copy only the signature content (exclude wrapper divs)
        if (signatureContent.tagName === 'HTML') {
            // If it's the full HTML element, copy its content
            tempDiv.innerHTML = signatureContent.outerHTML;
        } else {
            tempDiv.innerHTML = signaturePreview.innerHTML;
        }

        document.body.appendChild(tempDiv);

        // Select the content
        const range = document.createRange();
        range.selectNodeContents(tempDiv);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        // Copy to clipboard
        document.execCommand('copy');

        // Clean up
        selection.removeAllRanges();
        document.body.removeChild(tempDiv);

        showNotification(
            'Perfect! Your signature is copied and ready to go!',
            'success',
        );
    } catch (err) {
        showNotification(
            "Oops! Let's try the HTML copy button instead - it works great!",
            'error',
        );
    }
}

function resetForm() {
    form.reset();
    signaturePreview.innerHTML = '';
    htmlCode.value = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showNotification(message, type = 'info') {
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
