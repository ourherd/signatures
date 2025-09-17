// Email Signature Generator
const IMAGE_BASE_URL = 'https://batyr-assets.s3.ap-southeast-2.amazonaws.com/signatures/';

// Image mapping
const IMAGES = {
    logo: IMAGE_BASE_URL + 'batyr-logo.png',
    social1: IMAGE_BASE_URL + 'facebook-icon.png',
    social2: IMAGE_BASE_URL + 'twitter-icon.png',
    social3: IMAGE_BASE_URL + 'instagram-icon.png',
    social4: IMAGE_BASE_URL + 'website-icon.png',
    social5: IMAGE_BASE_URL + 'batyr-chat-icon.png',
    batyr: IMAGE_BASE_URL + 'batyr-app-text.png',
    certified: IMAGE_BASE_URL + 'diversity-flags.png'
};

// Signature templates
const templates = {
    short: (data) => `<html>
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
        ol{margin:0;padding:0}
        table td,table th{padding:0}
        .c26{vertical-align:middle;width:64.5pt}
        .c17{vertical-align:middle;width:259.5pt}
        .c6{vertical-align:middle;width:324pt}
        .c16{color:#002554;font-weight:600;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c15{color:#002554;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10.5pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c30{color:#222222;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:6pt;font-family:Arial, sans-serif;font-style:normal}
        .c13{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left;height:11pt}
        .c20{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left}
        .c31{padding-top:0pt;padding-bottom:7pt;line-height:1.0;text-align:left}
        .c8{border-spacing:0;border-collapse:collapse;margin-right:auto}
        .c21{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}
        .c10{orphans:2;widows:2}
        .c29{height:0.5pt}
        .c3{height:0pt}
    </style>
</head>
<body>
    <table class="c8">
        <tr class="c3">
            <td class="c26" colspan="1" rowspan="1">
                <p class="c21 c10"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 71.22px; height: 74.36px;"><img alt="" src="${IMAGES.logo}" style="width: 71.22px; height: 74.36px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            </td>
            <td class="c17" colspan="1" rowspan="1">
                <p class="c10 c31"><span class="c16">${data.name}</span></p>
                <p class="c10 c21"><span class="c15">${data.position}</span></p>
                ${data.phone ? `<p class="c21 c10"><span class="c15">${data.phone}</span></p>` : ''}
                ${data.pronouns ? `<p class="c21 c10"><span class="c15">${data.pronouns}</span></p>` : ''}
            </td>
        </tr>
        <tr class="c29">
            <td class="c6" colspan="2" rowspan="1">
                <p class="c10 c13"><span class="c30"></span></p>
                <p class="c20 c10"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 28.50px; height: 28.16px;"><img alt="" src="${IMAGES.social1}" style="width: 28.50px; height: 28.16px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 29.50px; height: 28.55px;"><img alt="" src="${IMAGES.social2}" style="width: 29.50px; height: 28.55px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 28.50px; height: 28.99px;"><img alt="" src="${IMAGES.social3}" style="width: 28.50px; height: 28.99px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 28.50px; height: 29.19px;"><img alt="" src="${IMAGES.social4}" style="width: 28.50px; height: 29.19px; margin-left: -0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 31.27px; height: 28.80px;"><img alt="" src="${IMAGES.social5}" style="width: 31.27px; height: 28.80px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 115.20px; height: 28.80px;"><img alt="" src="${IMAGES.batyr}" style="width: 115.20px; height: 28.80px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            </td>
        </tr>
    </table>
</body>
</html>`,

    long: (data) => `<html>
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
        ol{margin:0;padding:0}
        table td,table th{padding:0}
        .c26{vertical-align:middle;width:64.5pt}
        .c12{vertical-align:middle;width:257.2pt}
        .c5{vertical-align:middle;width:321.8pt}
        .c34{color:#002554;font-weight:600;text-decoration:none;vertical-align:baseline;font-size:13pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c15{color:#002554;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10.5pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c32{color:#222222;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:5pt;font-family:Arial, sans-serif;font-style:normal}
        .c33{color:#2b7de1;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:10pt;font-family:Montserrat, sans-serif;font-style:normal}
        .c39{font-size:10pt;font-family:Montserrat, sans-serif;color:#2b7de1;font-weight:400}
        .c13{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left;height:11pt}
        .c20{padding-top:0pt;padding-bottom:0pt;line-height:1.656;text-align:left}
        .c4{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left;height:11pt}
        .c31{padding-top:0pt;padding-bottom:7pt;line-height:1.0;text-align:left}
        .c8{border-spacing:0;border-collapse:collapse;margin-right:auto}
        .c21{padding-top:0pt;padding-bottom:0pt;line-height:1.0;text-align:left}
        .c10{orphans:2;widows:2}
        .c3{height:0pt}
    </style>
</head>
<body>
    <table class="c8">
        <tr class="c3">
            <td class="c26" colspan="1" rowspan="1">
                <p class="c21 c10"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 71.22px; height: 74.36px;"><img alt="" src="${IMAGES.logo}" style="width: 71.22px; height: 74.36px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            </td>
            <td class="c12" colspan="1" rowspan="1">
                <p class="c31 c10"><span class="c34">${data.name}</span></p>
                <p class="c21 c10"><span class="c15">${data.position}</span></p>
                ${data.phone ? `<p class="c21 c10"><span class="c15">${data.phone}</span></p>` : ''}
                ${data.pronouns ? `<p class="c21 c10"><span class="c15">${data.pronouns}</span></p>` : ''}
            </td>
        </tr>
        <tr class="c3">
            <td class="c5" colspan="2" rowspan="1">
                <p class="c13 c10"><span class="c32"></span></p>
                <p class="c10 c20" style="margin-top: 6pt; margin-bottom: 12pt;"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 28.50px; height: 28.16px;"><img alt="" src="${IMAGES.social1}" style="width: 28.50px; height: 28.16px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 29.50px; height: 28.55px;"><img alt="" src="${IMAGES.social2}" style="width: 29.50px; height: 28.55px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 28.50px; height: 28.99px;"><img alt="" src="${IMAGES.social3}" style="width: 28.50px; height: 28.99px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 28.50px; height: 29.19px;"><img alt="" src="${IMAGES.social4}" style="width: 28.50px; height: 29.19px; margin-left: -0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 31.27px; height: 28.80px;"><img alt="" src="${IMAGES.social5}" style="width: 31.27px; height: 28.80px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 115.20px; height: 28.80px;"><img alt="" src="${IMAGES.batyr}" style="width: 115.20px; height: 28.80px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
            </td>
        </tr>
    </table>
    <p class="c21 c10" style="margin-top: 12pt; margin-bottom: 6pt;"><span class="c39">I acknowledge the Aboriginal and Torres Strait Islander peoples as traditional custodians of the land on which batyr operates, and pay my respect to Elders past and present.</span></p>
    <p class="c21 c10" style="margin-bottom: 12pt;"><span class="c33">batyr is committed to providing a safe, culturally appropriate, inclusive environment for all people, regardless of their ethnicity, faith, disability, sexuality, or gender identity.</span></p>
    <p class="c21 c10" style="margin-top: 12pt;"><span style="overflow: hidden; display: inline-block; margin: 0.00px 0.00px; border: 0.00px solid #000000; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px); width: 155.50px; height: 22.00px;"><img alt="" src="${IMAGES.certified}" style="width: 155.50px; height: 22.00px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title=""></span></p>
</body>
</html>`
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
    inputs.forEach(input => {
        input.addEventListener('input', generateSignatureReactive);
        input.addEventListener('change', generateSignatureReactive);
    });

    // Tab switching
    document.querySelectorAll('.tab-button').forEach(button => {
        button.addEventListener('click', switchTab);
    });

    // Copy buttons
    document.getElementById('copySignature').addEventListener('click', copySignature);
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
        template: formData.get('template')
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
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');

    // Show/hide tab content
    const tabName = e.target.dataset.tab;
    document.querySelectorAll('.tab-content').forEach(content => {
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
        showNotification('Nice! HTML code copied and ready to paste!', 'success');
    } catch (err) {
        // Fallback for older browsers
        htmlCode.select();
        document.execCommand('copy');
        showNotification('Nice! HTML code copied and ready to paste!', 'success');
    }
}

async function copySignature() {
    try {
        // Get the actual signature HTML (without wrapper)
        const signatureContent = signaturePreview.querySelector('html') || signaturePreview.firstElementChild || signaturePreview;

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

        showNotification('Perfect! Your signature is copied and ready to go!', 'success');
    } catch (err) {
        showNotification('Oops! Let\'s try the HTML copy button instead - it works great!', 'error');
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