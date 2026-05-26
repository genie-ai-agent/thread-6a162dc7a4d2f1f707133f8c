(function () {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const search = document.getElementById('search');
  const filtersEl = document.getElementById('borough-filters');
  const countEl = document.getElementById('result-count');

  const BOROUGHS = ['All', 'Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
  let activeBorough = 'All';
  let query = '';

  // Build borough filter chips
  BOROUGHS.forEach((b) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (b === 'All' ? ' active' : '');
    btn.textContent = b;
    btn.dataset.borough = b;
    btn.setAttribute('role', 'tab');
    btn.addEventListener('click', () => {
      activeBorough = b;
      filtersEl.querySelectorAll('.filter-btn').forEach((el) => el.classList.toggle('active', el.dataset.borough === b));
      render();
    });
    filtersEl.appendChild(btn);
  });

  search.addEventListener('input', (e) => {
    query = e.target.value.trim().toLowerCase();
    render();
  });

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function matches(item) {
    if (activeBorough !== 'All' && item.borough !== activeBorough) return false;
    if (!query) return true;
    const hay = (item.name + ' ' + item.neighborhood + ' ' + item.type + ' ' + item.blurb).toLowerCase();
    return hay.includes(query);
  }

  function render() {
    const filtered = LANDMARKS.filter(matches);
    grid.innerHTML = filtered.map(cardHtml).join('');
    empty.hidden = filtered.length !== 0;
    countEl.textContent = filtered.length + ' landmark' + (filtered.length === 1 ? '' : 's') +
      (activeBorough === 'All' ? ' across all boroughs' : ' in ' + activeBorough);
  }

  function cardHtml(item) {
    return (
      '<article class="card">' +
        '<div class="card-head">' +
          '<h2>' + escapeHtml(item.name) + '</h2>' +
          '<span class="badge">' + escapeHtml(item.type) + '</span>' +
        '</div>' +
        '<div class="meta">' +
          '<span>' + escapeHtml(item.borough) + '</span>' +
          '<span>' + escapeHtml(item.neighborhood) + '</span>' +
          '<span>' + item.year + '</span>' +
        '</div>' +
        '<p class="blurb">' + escapeHtml(item.blurb) + '</p>' +
      '</article>'
    );
  }

  render();
})();
