function info(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const infoObject = data[i];
        HTML +=`<div class="col-xl-3 col-md-6 col-sm-6 col-12">
                    <div class="icon">
                    <i class="${infoObject.icon}"></i>
                    </div>
                    <div class="info-text">
                        <h2>${infoObject.h2}</h2>
                        <p class="c-gray">${infoObject.p}</p>
                    </div>
                </div>`
        DOM.innerHTML = HTML;
    }
}

export { info };