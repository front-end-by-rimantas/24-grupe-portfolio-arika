function services(data) {
    // input validation
    if (typeof data !== 'object' ||
      Array.isArray(data)) {
      return 'Netinkamo tipo parametras';
    }
  
    const allowedKeys = ['selector', 'list'];
    const keys = Object.keys(data);
    if (keys.length !== 2) {
      return 'Netinkamas kiekis objekto raktazodziu';
    }
  
    for (const key of keys) {
      if (!allowedKeys.includes(key)) {
        return `Neatpazintas raktazodis "${key}"`;
      }
    }
  
    const { selector, list } = data;
  
    if (!Array.isArray(list)) {
      return 'Parametras "list" netinkamo formato';
    }
  
    if (typeof selector !== 'string' ||
      selector === '') {
      return 'Parametras "selector" netinkamo formato';
    }
  
    // logic
    const DOM = document.querySelector(selector);
    if (!DOM) {
      return 'Pagal pateikta selectoriu nerastas elementas';
    }
  
    let HTML = '';
    for (const item of list) {
      if (item.icon && item.title && item.description) {
        HTML += `<div class="service">
                  <i class="fa fa-${item.icon}"></i>
                  <h2>${item.title}</h2>
                  <p class="c-gray">${item.description}</p>
              </div>`, '';
      }
    }
  
    // post logic validation
    if (HTML === '') {
      return 'Duomenyse nerasta jokios teisingos informacijos';
    }
  
    // result return
    DOM.innerHTML = HTML;
  
    return true;
  }
  
  export { services }