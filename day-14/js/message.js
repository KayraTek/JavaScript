const showAlert = (message) => {
    alert(message);
};

const showConfirm = (message) => {
    return confirm(message);
}; 

export default showAlert;
export {showConfirm}