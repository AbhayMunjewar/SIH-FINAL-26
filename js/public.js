/* ==========================================================================
   BhoomiDrishti — Public Guest Portal Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function renderPublicResearch() {
  const query = (document.getElementById("publicSearchInput")?.value || "").toLowerCase();
  const docsGrid = document.getElementById("publicDocsGrid");
  if (!docsGrid) return;

  const publicDocs = BhoomiMockData.researchDocs.filter(d => 
    d.access === "Public" && 
    (d.title.toLowerCase().includes(query) || d.summary.toLowerCase().includes(query) || d.region.toLowerCase().includes(query))
  );

  if (publicDocs.length === 0) {
    docsGrid.innerHTML = `<div style="grid-column: span 2; text-align: center; color: var(--text-muted); padding: 24px;">No public research documents found matching '${query}'.</div>`;
    return;
  }

  let html = "";
  publicDocs.forEach(doc => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <span class="status-pill status-active" style="margin-bottom: 8px;">${doc.type}</span>
        <h4 style="color: var(--primary-navy); margin: 6px 0;">${doc.title}</h4>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Authors: ${doc.authors} (${doc.year}) | Region: ${doc.region}</p>
        <p style="font-size: 13px; color: var(--text-primary); margin-bottom: 12px;">${doc.summary}</p>
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 12px;">
          ${doc.tags.map(t => `<span style="background: var(--bg-main); font-size: 11px; padding: 2px 8px; border-radius: 4px; color: var(--text-muted);">${t}</span>`).join('')}
        </div>
        <button onclick="BhoomiShared.showToast('Document opened for viewing.', 'info')" class="btn btn-sm btn-secondary">👁️ Read Paper Digest</button>
      </div>
    `;
  });

  docsGrid.innerHTML = html;
}

function renderPublicPolicies() {
  const container = document.getElementById("publicPoliciesList");
  if (!container) return;

  let html = "";
  BhoomiMockData.policies.forEach(p => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <span class="status-pill status-info">${p.jurisdiction}</span>
        <h4 style="color: var(--primary-navy); margin: 6px 0;">${p.title}</h4>
        <p style="font-size: 12.5px; color: var(--text-muted); margin-bottom: 8px;">Category: ${p.category} | Year: ${p.year} | Status: ${p.status}</p>
        <p style="font-size: 13px; color: var(--text-primary);">${p.summary}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}
