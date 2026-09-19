/* ==========================================================================
   BhoomiDrishti — Policy & Legal Officer Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function renderPolicies() {
  const container = document.getElementById("policyDocsGrid");
  if (!container) return;

  let html = "";
  BhoomiMockData.policies.forEach(p => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <span class="status-pill status-info">${p.jurisdiction}</span>
        <h4 style="color: var(--primary-navy); margin: 6px 0;">${p.title}</h4>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">Category: ${p.category} | Year: ${p.year} | Status: ${p.status}</p>
        <p style="font-size: 13px; color: var(--text-primary); margin-bottom: 12px;">${p.summary}</p>
        <button onclick="BhoomiShared.showToast('Full statutory text opened.', 'info')" class="btn btn-sm btn-secondary">📜 View Act & Provisions</button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function runPolicySimulation() {
  const output = document.getElementById("simulationOutput");
  if (!output) return;

  BhoomiShared.showToast("Executing policy simulation model...", "info");

  setTimeout(() => {
    output.innerHTML = `
      <div class="alert-box alert-warning" style="flex-direction: column;">
        <strong>⚠️ SIMULATED POLICY REFORM OUTCOME (INDICATIVE ONLY)</strong>
        <p style="margin-top: 6px; font-size: 13px;">
          • <strong>Estimated Land Acquisition Time:</strong> Reduced by 35% under Land Pooling relative to direct acquisition.<br>
          • <strong>Estimated Displaced Population Impact:</strong> 14% lower under pooled layout.<br>
          • <em>Disclaimer: Analytical simulation for policy decision support. Statutory approvals required.</em>
        </p>
      </div>
    `;
  }, 1000);
}
