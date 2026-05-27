(function () {
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const filtersEl = document.getElementById('borough-filters');
  const countEl = document.getElementById('count');
  const emptyEl = document.getElementById('empty');

  const boroughs = ['All', ...Array.from(new Set(LANDMARKS.map(l => l.borough)))];
  let activeBorough = 'All';
  let query = '';

  function renderFilters() {
    filtersEl.innerHTML = '';
    boroughs.forEach(b => {
      const btn = document.createElement('button');
      btn.className = 'chip' + (b === activeBorough ? ' active' : '');
      btn.textContent = b;
      btn.addEventListener('click', () => {
        activeBorough = b;
        renderFilters();
        renderGrid();
      });
      filtersEl.appendChild(btn);
    });
  }

  function renderGrid() {
    const q = query.trim().toLowerCase();
    const items = LANDMARKS.filter(l => {
      const matchBorough = activeBorough === 'All' || l.borough === activeBorough;
      const matchQuery = !q ||
        l.name.toLowerCase().includes(q) ||
        l.desc.toLowerCase().includes(q) ||
        l.borough.toLowerCase().includes(q);
      return matchBorough && matchQuery;
    });

    grid.innerHTML = '';
    items.forEach(l => {
      const li = document.createElement('li');
      li.className = 'card';
      li.innerHTML =
        '<span class="borough"></span>' +
        '<h3></h3>' +
        '<p></p>';
      li.querySelector('.borough').textContent = l.borough;
      li.querySelector('h3').textContent = l.name;
      li.querySelector('p').textContent = l.desc;
      grid.appendChild(li);
    });

    countEl.textContent = items.length + ' of ' + LANDMARKS.length + ' landmarks';
    emptyEl.hidden = items.length !== 0;
  }

  search.addEventListener('input', e => {
    query = e.target.value;
    renderGrid();
  });

  renderFilters();
  renderGrid();
})();
