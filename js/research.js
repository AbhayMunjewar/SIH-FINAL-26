/* ==========================================================================
   BhoomiDrishti — Research Officer Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function renderResearchResults() {
  const container = document.getElementById("researchResultsGrid");
  if (!container) return;

  let html = "";
  BhoomiMockData.researchDocs.forEach(doc => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
          <span class="status-pill status-active">${doc.type}</span>
          <span style="font-size: 11px; color: var(--text-muted);">${doc.year}</span>
        </div>
        <h4 style="color: var(--primary-navy); margin-bottom: 6px;">${doc.title}</h4>
        <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 8px;">${doc.authors} | Source: ${doc.source}</p>
        <p style="font-size: 13px; color: var(--text-primary); margin-bottom: 12px;">${doc.summary}</p>
        <div style="display: flex; gap: 8px;">
          <button onclick="BhoomiShared.showToast('Document added to active synthesis buffer.', 'success')" class="btn btn-sm btn-secondary">➕ Add to Synthesis</button>
          <button onclick="BhoomiShared.showToast('Full PDF viewer opened.', 'info')" class="btn btn-sm btn-secondary">👁️ View Document</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function runAiResearchSearch() {
  const query = document.getElementById("aiQueryInput")?.value || "";
  const box = document.getElementById("aiSynthesisContainer");
  const text = document.getElementById("aiSynthesisText");

  if (!box || !text) return;

  BhoomiShared.showToast("Querying indexed research repository and generating synthesis...", "info");
  
  setTimeout(() => {
    box.style.display = "flex";
    text.innerHTML = `
      <strong>Synthesized Evidence for query "${query || 'SVAMITVA dispute reduction'}":</strong><br>
      • Digital land records and drone mapping reduce boundary disputes by an estimated 28% within 24 months of title issuance.<br>
      • High initial dispute spikes occur during draft record publication, but decline rapidly after village revenue approval.<br>
      • Key requirement: Legal validity of drone maps under state revenue codes (e.g. Maharashtra Land Revenue Code 1966).
    `;
  }, 1000);
}

function runResearchGapAnalysis() {
  const domain = document.getElementById("gapDomainSelect")?.value;
  const region = document.getElementById("gapRegionSelect")?.value;
  const container = document.getElementById("gapResultsContainer");
  if (!container) return;

  BhoomiShared.showToast("Scanning literature index for research gaps...", "info");

  setTimeout(() => {
    container.innerHTML = `
      <div class="alert-box alert-warning">
        <div>
          <strong>🔍 AI IDENTIFIED RESEARCH GAPS — ${domain} (${region})</strong>
          <ul style="margin-top: 8px; padding-left: 18px; line-height: 1.6;">
            <li><strong>High Priority Gap 1:</strong> Lack of longitudinal studies evaluating female land ownership changes post-digital card distribution in tribal areas.</li>
            <li><strong>Medium Priority Gap 2:</strong> Limited empirical data on land dispute resolution timelines in urban-rural fringe zones along highway corridors.</li>
          </ul>
        </div>
      </div>
    `;
  }, 800);
}

function runPredictiveModel() {
  const container = document.getElementById("predictOutput");
  if (!container) return;

  BhoomiShared.showToast("Building AI trend projection model...", "info");

  setTimeout(() => {
    container.innerHTML = `
      <div class="alert-box alert-info">
        <div>
          <strong>🤖 AI PREDICTIVE PROJECTION (2025–2030)</strong><br>
          • <strong>Projected Agri Land Conversion:</strong> Estimated 4.8% to 6.2% conversion of agricultural parcel area in Nagpur corridor by 2030 based on 10-year historical trends.<br>
          • <strong>Model Confidence:</strong> Moderate (84% validation score against ISRO LULC series).<br>
          • <em>Note: Model-based projection for policy planning reference only.</em>
        </div>
      </div>
    `;
  }, 800);
}

function openUploadModal() {
  BhoomiShared.showToast("Upload Research Paper dialog opened.", "info");
}
