document.addEventListener('DOMContentLoaded', function () {
  const languageSelect = document.getElementById('language-select');

  if (languageSelect) {
    languageSelect.addEventListener('change', function () {
      const selectedLanguage = this.value;
      const currentPath = window.location.pathname;
      let newPath;

      if (selectedLanguage === 'en') {
        // If default language, remove the language prefix
        newPath = currentPath.replace(/^\/(es|de)\//, '/');
      } else {
        // Add or replace the language prefix
        if (currentPath === '/') {
          newPath = `/${selectedLanguage}/`;
        } else if (/^\/(es|de)\//.test(currentPath)) {
          newPath = currentPath.replace(/^\/(es|de)\//, `/${selectedLanguage}/`);
        } else {
          newPath = `/${selectedLanguage}${currentPath}`;
        }
      }

      window.location.href = newPath;
    });
  }
});