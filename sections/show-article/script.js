const singNews = document.querySelector('.single-info');
const singNewsButton = document.querySelector('.watch-news__btn');

const mainN01 = document.querySelector('.rec-n__01');
const mainN02 = document.querySelector('.rec-n__02');
const mainN03 = document.querySelector('.rec-n__03');
const mainN04 = document.querySelector('.rec-n__04');
const mainN05 = document.querySelector('.rec-n__05');
const mainN06 = document.querySelector('.rec-n__06');
const mainN07 = document.querySelector('.rec-n__07');
const mainN08 = document.querySelector('.rec-n__08');


document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelectorAll('.social-icon');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });

        icon.addEventListener('focus', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.outline = '2px solid #000';
        });

        icon.addEventListener('blur', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.outline = 'none';
        });
    });
});

singNews.addEventListener('mouseover', ()=> {
    singNewsButton.style.display = 'flex';
    document.querySelector('.single-info__tag').style.color = '#e6e6e6ff';
    document.querySelector('.single-info__parag').style.color = '#e6e6e6ff';
});

singNews.addEventListener('mouseout', ()=> {
    singNewsButton.style.display = 'none';
    document.querySelector('.single-info__tag').style.color = 'var(--mG-mid)';
    document.querySelector('.single-info__parag').style.color = 'var(--mG-mid)';
});

mainN01.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-01').style.color = '#fff';
    document.querySelector('.rec-n__dateof-01').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-01').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-01').style.display = 'flex';
});

mainN01.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-01').style.color = '#000';
    document.querySelector('.rec-n__dateof-01').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-01').style.color = '#000';
    document.querySelector('.rec-n__btn-01').style.display = 'none';
});

mainN02.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-02').style.color = '#fff';
    document.querySelector('.rec-n__dateof-02').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-02').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-02').style.display = 'flex';
});

mainN02.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-02').style.color = '#000';
    document.querySelector('.rec-n__dateof-02').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-02').style.color = '#000';
    document.querySelector('.rec-n__btn-02').style.display = 'none';
});

mainN03.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-03').style.color = '#fff';
    document.querySelector('.rec-n__dateof-03').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-03').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-03').style.display = 'flex';
});

mainN03.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-03').style.color = '#000';
    document.querySelector('.rec-n__dateof-03').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-03').style.color = '#000';
    document.querySelector('.rec-n__btn-03').style.display = 'none';
});

mainN04.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-04').style.color = '#fff';
    document.querySelector('.rec-n__dateof-04').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-04').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-04').style.display = 'flex';
});

mainN04.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-04').style.color = '#000';
    document.querySelector('.rec-n__dateof-04').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-04').style.color = '#000';
    document.querySelector('.rec-n__btn-04').style.display = 'none';
});


mainN05.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-05').style.color = '#fff';
    document.querySelector('.rec-n__dateof-05').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-05').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-05').style.display = 'flex';
});

mainN05.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-05').style.color = '#000';
    document.querySelector('.rec-n__dateof-05').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-05').style.color = '#000';
    document.querySelector('.rec-n__btn-05').style.display = 'none';
});

mainN06.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-06').style.color = '#fff';
    document.querySelector('.rec-n__dateof-06').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-06').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-06').style.display = 'flex';
});

mainN06.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-06').style.color = '#000';
    document.querySelector('.rec-n__dateof-06').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-06').style.color = '#000';
    document.querySelector('.rec-n__btn-06').style.display = 'none';
});

mainN07.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-07').style.color = '#fff';
    document.querySelector('.rec-n__dateof-07').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-07').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-07').style.display = 'flex';
});

mainN07.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-07').style.color = '#000';
    document.querySelector('.rec-n__dateof-07').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-07').style.color = '#000';
    document.querySelector('.rec-n__btn-07').style.display = 'none';
});

mainN08.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-08').style.color = '#fff';
    document.querySelector('.rec-n__dateof-08').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-08').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-08').style.display = 'flex';
});

mainN08.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-08').style.color = '#000';
    document.querySelector('.rec-n__dateof-08').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-08').style.color = '#000';
    document.querySelector('.rec-n__btn-08').style.display = 'none';
});