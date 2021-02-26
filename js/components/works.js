function works(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const worksObject = data[i];
        HTML += `<div class="box">
                    <div class="img-box">
                        <img src="${worksObject.href}" alt="${worksObject.alt}">
                        <div class="content">
                            <button class="plus-box">
                                <i class="plus"></i>
                            </button>
                            <h2>
                                <a href="#"> Our Photography</a>
                            </h2>
                        </div>
                    </div>
                </div>`
    }
    DOM.innerHTML = HTML;
}
export { works };