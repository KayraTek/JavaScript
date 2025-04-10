const bsOffcanvas = new bootstrap.Offcanvas('#privacyOffCanvas');
const isPrivacyPolicyAccepted = localStorage.getItem("privacy-policy");

if (!localStorage.getItem('privacyAccepted')) {
    bsOffcanvas.show();
}


document.getElementById("btnAccept").addEventListener('click', () => {
    localStorage.setItem('privacyAccepted', 'true');
    bsOffcanvas.hide();
});
