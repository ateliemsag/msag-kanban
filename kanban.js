const projetos = [
  {
    id: "proj-001",
    cliente: "Maria da Silva",
    etapa: "ideia",
    prazo: "2025-08-20",
    materiais: ["renda francesa", "zíper"]
  },
  {
    id: "proj-002",
    cliente: "Ana Clara",
    etapa: "modelagem",
    prazo: "2025-08-25",
    materiais: ["tule", "pedrarias"]
  }
];

function renderKanban() {
  document.querySelectorAll('.kanban-column .cards').forEach(c => c.innerHTML = '');
  projetos.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'bg-white p-3 rounded shadow mb-2';
    card.innerHTML = `<strong>${proj.cliente}</strong><br><span class='text-xs text-gray-600'>Prazo: ${proj.prazo}</span>`;
    document.querySelector(`#${proj.etapa} .cards`).appendChild(card);
  });
}

renderKanban();