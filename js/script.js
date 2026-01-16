/* =============================== */
/* BEFORE / AFTER SLIDER LOGIC     */
/* =============================== */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ba-slider').forEach(slider => {
    const range = slider.querySelector('.ba-range');
    const after = slider.querySelector('.after');
    const divider = slider.querySelector('.ba-divider');
    const handle = slider.querySelector('.ba-handle');

    function update(val) {
      after.style.clipPath = `inset(0 0 0 ${val}%)`;
      if (divider) divider.style.left = val + '%';
      if (handle) handle.style.left = val + '%';
    }

    if (range) {
      update(range.value);
      range.addEventListener('input', e => update(e.target.value));
    }
  });
});
