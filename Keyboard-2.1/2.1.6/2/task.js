let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}

// // найти все ссылки, атрибут href у которых содержит ://
// // и при этом href не начинается с http://internal.com
// let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
// let links = document.querySelectorAll(selector);

// links.forEach(link => link.style.color = 'orange');