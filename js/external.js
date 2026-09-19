/* ==========================================================================
   BhoomiDrishti — External Knowledge Partner Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function renderExternalDocs() {
  const container = document.getElementById("externalDocsGrid");
  if (!container) return;

  const openDocs = BhoomiMockData.researchDocs.filter(d => d.access === "Public");
  let html = "";

  openDocs.forEach(doc => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <span class="status-pill status-active">${doc.type}</span>
        <h4 style="color: var(--primary-navy); margin: 6px 0;">${doc.title}</h4>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Authors: ${doc.authors} (${doc.year})</p>
        <p style="font-size: 13px; color: var(--text-primary); margin-bottom: 12px;">${doc.summary}</p>
        <button onclick="BhoomiShared.showToast('Paper open for academic reference.', 'info')" class="btn btn-sm btn-secondary">Read Paper</button>
      </div>
    `;
  });

  container.innerHTML = html;
}
