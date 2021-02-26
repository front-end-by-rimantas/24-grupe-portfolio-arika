//   ----------------- IMPORTS -----------------
//   header
//   hero
//   about me
//   services
//   works
import { works } from './components/works.js';
import { worksData } from './data/worksData.js';

//   professional skills
import { progressBarData } from './data/progressBarData.js';
import { ProgressBar } from './components/ProgressBar.js';
//   testimonials
//   blogs
//   contact me
import { infoData } from './data/infoData.js';
import { info } from './components/info.js';
//   footer

//   ----------------- CODING -----------------
//   header
//   hero
const TypeWriter = function(txtElement, words, wait = 500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function() {

    const current = this.wordIndex % this.words.length;

    const fullTxt = this.words[current];
    
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }else{
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = 200;

    if (this.isDeleting) {
        typeSpeed /= 3;
    }

    if (!this.isDeleting &&
        this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
    }else if (this.isDeleting &&
        this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWriter(txtElement, words, wait);
}
//   about me
//   services
//   works
new works('.works-img', worksData);
const gallery = document.querySelectorAll(".row .img-box");
const plus = document.querySelectorAll(".plus-box")
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const currentImg = previewBox.querySelector(".current");
const totalImg = previewBox.querySelector(".total");
const background = document.querySelector(".background");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let  newIndex = i;
        plus[i].onclick = ()=>{
            function preview() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            prevBtn.onclick = ()=>{
                newIndex--;
                if (newIndex === -1) {
                    newIndex = 8;
                    preview();
                }
                preview();
            }
            nextBtn.onclick = ()=>{
                newIndex++;
                if (newIndex === 9) {
                    newIndex = 0;
                    preview();
                }
                preview();
            }

            preview();
            previewBox.classList.add("show");
            background.style.display = "block";

            closeIcon.onclick = ()=>{
                previewBox.classList.remove("show");
                background.style.display = "none";
            }
            background.onclick = ()=>{
                previewBox.classList.remove("show");
                background.style.display = "none";
            }
        }
    }
}
//   professional skills
new ProgressBar('.left-column-skills', progressBarData);
//   testimonials
//   blogs
//   contact me
new info('.info', infoData);
//   footer