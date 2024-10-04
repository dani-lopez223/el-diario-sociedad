const mainNews = document.querySelector('.main-info__content');
const mainNewsButton = document.querySelector('.watch-news__btn');

const recentNews = document.querySelector('.recent-info');

const recN01 = document.querySelector('.rec-n__01');
const recN02 = document.querySelector('.rec-n__02');
const recN03 = document.querySelector('.rec-n__03');
const recN04 = document.querySelector('.rec-n__04');
const recN05 = document.querySelector('.rec-n__05');
const recN06 = document.querySelector('.rec-n__06');

const recN07 = document.querySelector('.rec-n__07');
const recN08 = document.querySelector('.rec-n__08');
const recN09 = document.querySelector('.rec-n__09');
const recN10 = document.querySelector('.rec-n__10');
const recN11 = document.querySelector('.rec-n__11');
const recN12 = document.querySelector('.rec-n__12');

const recN13 = document.querySelector('.rec-n__13');
const recN14 = document.querySelector('.rec-n__14');
const recN15 = document.querySelector('.rec-n__15');
const recN16 = document.querySelector('.rec-n__16');
const recN17 = document.querySelector('.rec-n__17');
const recN18 = document.querySelector('.rec-n__18');


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

mainNews.addEventListener('mouseover', ()=> {
    mainNewsButton.style.display = 'flex';
    document.querySelector('.main-info__tag').style.color = '#e6e6e6ff';
    document.querySelector('.main-info__parag').style.color = '#e6e6e6ff';
});

mainNews.addEventListener('mouseout', ()=> {
    mainNewsButton.style.display = 'none';
    document.querySelector('.main-info__tag').style.color = 'var(--mG-mid)';
    document.querySelector('.main-info__parag').style.color = 'var(--mG-mid)';
});

recN01.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-01').style.color = '#fff';
    document.querySelector('.rec-n__dateof-01').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-01').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-01').style.display = 'flex';
});

recN01.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-01').style.color = '#000';
    document.querySelector('.rec-n__dateof-01').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-01').style.color = '#000';
    document.querySelector('.rec-n__btn-01').style.display = 'none';
});

recN02.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-02').style.color = '#fff';
    document.querySelector('.rec-n__dateof-02').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-02').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-02').style.display = 'flex';
});

recN02.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-02').style.color = '#000';
    document.querySelector('.rec-n__dateof-02').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-02').style.color = '#000';
    document.querySelector('.rec-n__btn-02').style.display = 'none';
});

recN03.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-03').style.color = '#fff';
    document.querySelector('.rec-n__dateof-03').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-03').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-03').style.display = 'flex';
});

recN03.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-03').style.color = '#000';
    document.querySelector('.rec-n__dateof-03').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-03').style.color = '#000';
    document.querySelector('.rec-n__btn-03').style.display = 'none';
});

recN04.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-04').style.color = '#fff';
    document.querySelector('.rec-n__dateof-04').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-04').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-04').style.display = 'flex';
});

recN04.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-04').style.color = '#000';
    document.querySelector('.rec-n__dateof-04').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-04').style.color = '#000';
    document.querySelector('.rec-n__btn-04').style.display = 'none';
});

recN05.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-05').style.color = '#fff';
    document.querySelector('.rec-n__dateof-05').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-05').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-05').style.display = 'flex';
});

recN05.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-05').style.color = '#000';
    document.querySelector('.rec-n__dateof-05').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-05').style.color = '#000';
    document.querySelector('.rec-n__btn-05').style.display = 'none';
});

recN06.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-06').style.color = '#fff';
    document.querySelector('.rec-n__dateof-06').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-06').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-06').style.display = 'flex';
});

recN06.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-06').style.color = '#000';
    document.querySelector('.rec-n__dateof-06').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-06').style.color = '#000';
    document.querySelector('.rec-n__btn-06').style.display = 'none';
});

recN07.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-07').style.color = '#fff';
    document.querySelector('.rec-n__dateof-07').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-07').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-07').style.display = 'flex';
});

recN07.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-07').style.color = '#000';
    document.querySelector('.rec-n__dateof-07').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-07').style.color = '#000';
    document.querySelector('.rec-n__btn-07').style.display = 'none';
});

recN08.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-08').style.color = '#fff';
    document.querySelector('.rec-n__dateof-08').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-08').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-08').style.display = 'flex';
});

recN08.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-08').style.color = '#000';
    document.querySelector('.rec-n__dateof-08').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-08').style.color = '#000';
    document.querySelector('.rec-n__btn-08').style.display = 'none';
});

recN09.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-09').style.color = '#fff';
    document.querySelector('.rec-n__dateof-09').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-09').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-09').style.display = 'flex';
});

recN09.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-09').style.color = '#000';
    document.querySelector('.rec-n__dateof-09').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-09').style.color = '#000';
    document.querySelector('.rec-n__btn-09').style.display = 'none';
});

recN10.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-10').style.color = '#fff';
    document.querySelector('.rec-n__dateof-10').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-10').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-10').style.display = 'flex';
});

recN10.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-10').style.color = '#000';
    document.querySelector('.rec-n__dateof-10').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-10').style.color = '#000';
    document.querySelector('.rec-n__btn-10').style.display = 'none';
});

recN11.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-11').style.color = '#fff';
    document.querySelector('.rec-n__dateof-11').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-11').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-11').style.display = 'flex';
});

recN11.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-11').style.color = '#000';
    document.querySelector('.rec-n__dateof-11').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-11').style.color = '#000';
    document.querySelector('.rec-n__btn-11').style.display = 'none';
});

recN12.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-12').style.color = '#fff';
    document.querySelector('.rec-n__dateof-12').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-12').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-12').style.display = 'flex';
});

recN12.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-12').style.color = '#000';
    document.querySelector('.rec-n__dateof-12').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-12').style.color = '#000';
    document.querySelector('.rec-n__btn-12').style.display = 'none';
});

recN13.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-13').style.color = '#fff';
    document.querySelector('.rec-n__dateof-13').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-13').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-13').style.display = 'flex';
});

recN13.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-13').style.color = '#000';
    document.querySelector('.rec-n__dateof-13').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-13').style.color = '#000';
    document.querySelector('.rec-n__btn-13').style.display = 'none';
});

recN14.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-14').style.color = '#fff';
    document.querySelector('.rec-n__dateof-14').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-14').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-14').style.display = 'flex';
});

recN14.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-14').style.color = '#000';
    document.querySelector('.rec-n__dateof-14').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-14').style.color = '#000';
    document.querySelector('.rec-n__btn-14').style.display = 'none';
});

recN15.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-15').style.color = '#fff';
    document.querySelector('.rec-n__dateof-15').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-15').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-15').style.display = 'flex';
});

recN15.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-15').style.color = '#000';
    document.querySelector('.rec-n__dateof-15').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-15').style.color = '#000';
    document.querySelector('.rec-n__btn-15').style.display = 'none';
});

recN16.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-16').style.color = '#fff';
    document.querySelector('.rec-n__dateof-16').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-16').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-16').style.display = 'flex';
});

recN16.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-16').style.color = '#000';
    document.querySelector('.rec-n__dateof-16').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-16').style.color = '#000';
    document.querySelector('.rec-n__btn-16').style.display = 'none';
});

recN17.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-17').style.color = '#fff';
    document.querySelector('.rec-n__dateof-17').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-17').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-17').style.display = 'flex';
});

recN17.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-17').style.color = '#000';
    document.querySelector('.rec-n__dateof-17').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-17').style.color = '#000';
    document.querySelector('.rec-n__btn-17').style.display = 'none';
});

recN18.addEventListener('mouseover', ()=> {
    document.querySelector('.rec-n__title-18').style.color = '#fff';
    document.querySelector('.rec-n__dateof-18').style.color = 'var(--mG-brightExtra)';
    document.querySelector('.rec-n__sub-titles-18').style.color = '#e6e6e6ff';
    document.querySelector('.rec-n__btn-18').style.display = 'flex';
});

recN18.addEventListener('mouseout', ()=> {
    document.querySelector('.rec-n__title-18').style.color = '#000';
    document.querySelector('.rec-n__dateof-18').style.color = 'var(--mG-mid)';
    document.querySelector('.rec-n__sub-titles-18').style.color = '#000';
    document.querySelector('.rec-n__btn-18').style.display = 'none';
});