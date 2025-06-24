const shareBtn = document.querySelector('.share-btn');
const socials = document.querySelector('.socials');

shareBtn.addEventListener('click', () => {
  socials.classList.toggle('active');
  shareBtn.classList.toggle('active');
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.share-container')) {
    socials.classList.remove('active');
    shareBtn.classList.remove('active');
  }
})