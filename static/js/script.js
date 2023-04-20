// JavaScript code for fade-in transition
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
  });
  
  window.addEventListener('load', function() {
    document.body.style.opacity = '1';
  });
  
  window.addEventListener('beforeunload', function() {
    document.body.classList.add('fade-out');
  });