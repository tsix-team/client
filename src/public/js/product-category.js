document.addEventListener('DOMContentLoaded', function() {
    const mainCategories = document.querySelectorAll('.main-category');
  
    mainCategories.forEach(category => {
      category.addEventListener('click', function() {
        const subCategories = this.querySelector('.sub-categories');
        if (subCategories.style.display === 'block') {
          subCategories.style.display = 'none';
        } else {
          subCategories.style.display = 'block';
        }
      });
    });
  });