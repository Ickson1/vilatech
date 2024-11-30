// Alternância de temas
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verificar tema salvo no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Alternar entre claro e escuro
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
  }
});

// Rolagem suave
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

const menuItems = document.querySelectorAll('.menu-item');

// Adicionar evento de clique para cada item do menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remover a classe "active" de todos os itens
    menuItems.forEach(i => i.classList.remove('active'));

    // Adicionar a classe "active" ao item clicado
    item.classList.add('active');

    // Rolagem suave para a seção correspondente
    const sectionId = item.getAttribute('data-section');
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

