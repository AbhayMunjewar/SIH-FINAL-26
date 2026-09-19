/* ==========================================================================
   BhoomiDrishti — Data Officer Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function renderDataSources() {
  const container = document.getElementById("dataSourcesGrid");
  if (!container) return;

  let html = "";
  BhoomiMockData.apiSources.forEach(src => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h4 style="font-size: 14px; color: var(--primary-navy);">${src.name}</h4>
          <span class="status-pill status-${src.status.toLowerCase()}">${src.status}</span>
        </div>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 6px;">Provider: ${src.provider}</p>
        <div style="font-size: 12px; display: flex; justify-content: space-between; margin-bottom: 12px; color: var(--text-primary);">
          <span>Records: <strong>${src.records}</strong></span>
          <span>Freshness: <strong>${src.freshness}</strong></span>
        </div>
        <div style="display: flex; gap: 8px;">
          <button onclick="syncSingleSource('${src.name}')" class="btn btn-sm btn-secondary">🔄 Sync Now</button>
          <button onclick="BhoomiShared.showToast('${src.name} integration details verified.', 'info')" class="btn btn-sm btn-secondary">Details</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function syncSingleSource(sourceName) {
  BhoomiShared.showToast(`Initiating sync request for ${sourceName}...`, "info");
  setTimeout(() => {
    BhoomiShared.showToast(`✅ ${sourceName} successfully synchronized (342 new records).`, "success");
  }, 1200);
}

function triggerAllSync() {
  BhoomiShared.showToast("Initiating national data sync across all 5 streams...", "info");
  setTimeout(() => {
    BhoomiShared.showToast("✅ All data streams synchronized and quality-verified.", "success");
  }, 1500);
}
