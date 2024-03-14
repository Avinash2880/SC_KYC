// JavaScript for capturing video and processing form submission

// Language data
const languageData = {
    en: {
      pageTitle: 'EleganceVerify - Online Video KYC',
      nameLabel: 'Name:',
      dobLabel: 'Date of Birth:',
      addressLabel: 'Address:',
      panAadhaarLabel: 'PAN Card/Aadhaar:',
      signatureLabel: 'Signature:',
      incomeRangeLabel: 'Income Range:',
      employmentTypeLabel: 'Type of Employment:',
      startButton: 'Start Video KYC',
      captureButton: 'Capture Photo',
      footerText: '&copy; 2024 EleganceVerify. All rights reserved.',
    },
    hi: {
      pageTitle: 'एलिगेंसवेरीफाई - ऑनलाइन वीडियो केवाईसी',
      nameLabel: 'नाम:',
      dobLabel: 'जन्म की तारीख:',
      addressLabel: 'पता:',
      panAadhaarLabel: 'पैन कार्ड/आधार कार्ड:',
      signatureLabel: 'हस्ताक्षर:',
      incomeRangeLabel: 'आय का दायरा:',
      employmentTypeLabel: 'रोजगार का प्रकार:',
      startButton: 'वीडियो केवाईसी शुरू करें',
      captureButton: 'तस्वीर कैप्चर करें',
      footerText: '&copy; 2024 एलिगेंसवेरीफाई। सभी अधिकार सुरक्षित।',
    },
    te: {
      pageTitle: 'ఎలిగెన్స్‌వెరిఫై - ఆన్‌లైన్ వీడియో కేవిసీ',
      nameLabel: 'పేరు:',
      dobLabel: 'పుట్టిన తేదీ:',
      addressLabel: 'చిరునామా:',
      panAadhaarLabel: 'పాన్ కార్డ్ / ఆధార్:',
      signatureLabel: 'సిగ్నేచర్:',
      incomeRangeLabel: 'ఆదాయ విలువలు:',
      employmentTypeLabel: 'ఉద్యోగ రకం:',
      startButton: 'వీడియో కేవాయ్‌సీ ప్రారంభించండి',
      captureButton: 'ఫోటో ప్రతిగ్రహించండి',
      footerText: '&copy; 2024 ఎలిగెన్స్‌వెరిఫై. అనైతిక హక్కులు పాలుపంచబడినవి.',
    },
    ta: {
      pageTitle: 'எலிகன்ஸ்வெரிஃபை - ஆன்லைன் வீடியோ கைவேலை',
      nameLabel: 'பெயர்:',
      dobLabel: 'பிறந்த தேதி:',
      addressLabel: 'முகவரி:',
      panAadhaarLabel: 'பான் அட்டை / ஆதார் அட்டை:',
      signatureLabel: 'கையொப்பம்:',
      incomeRangeLabel: 'வருமான வரம்பு:',
      employmentTypeLabel: 'உத்தியைப் பற்றிய வகை:',
      startButton: 'வீடியோ கேவைசை தொடங்கு',
      captureButton: 'புகைப்படத்தை பிடிக்கவும்',
      footerText: '&copy; 2024 எலிகன்ஸ்வெரிஃபை. அனைத்து உரிமைகளும் பாதுகாப்பாக்கப்பட்டுள்ளன.',
    }
  };
  
  // Function to update page content based on selected language
  function updateLanguage(language) {
    const data = languageData[language];
    document.title = data.pageTitle;
    document.querySelector('h1').textContent = data.pageTitle;
    document.querySelectorAll('label')[0].textContent = data.nameLabel;
    document.querySelectorAll('label')[1].textContent = data.dobLabel;
    document.querySelectorAll('label')[2].textContent = data.addressLabel;
    document.querySelectorAll('label')[3].textContent = data.panAadhaarLabel;
    document.querySelectorAll('label')[4].textContent = data.signatureLabel;
    document.querySelectorAll('label')[5].textContent = data.incomeRangeLabel;
    document.querySelectorAll('label')[6].textContent = data.employmentTypeLabel;
    document.querySelector('button[type="submit"]').textContent = data.startButton;
    document.getElementById('captureButton').textContent = data.captureButton;
    document.querySelector('footer p').innerHTML = data.footerText;
  }
  
  // Event listener for language selection change
  document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    updateLanguage(selectedLanguage);
  });
  
  // Get access to the video stream
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
      var video = document.getElementById('liveVideo');
      video.srcObject = stream;
    })
    .catch(function(error) {
      console.error('Error accessing video stream:', error);
    });
  
  // Function to capture photo from video stream
  document.getElementById('captureButton').addEventListener('click', function() {
    var canvas = document.createElement('canvas');
    var video = document.getElementById('liveVideo');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    var context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    var photo = canvas.toDataURL('image/png');
    console.log('Captured photo:', photo);
  });
  
  // Function to handle form submission
  document.getElementById('kycForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Perform form validation and submission logic here
    console.log('KYC form submitted!');
  });
  
  // Initialize page with default language
  updateLanguage('en');
  