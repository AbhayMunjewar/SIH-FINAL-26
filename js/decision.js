/* ==========================================================================
   BhoomiDrishti — Decision Support Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function generateEvidenceReportModal() {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop active";
  modal.id = "report-modal";
  modal.innerHTML = `
    <div class="modal-dialog" style="max-width: 720px;">
      <div class="modal-header">
        <h3 class="modal-title">📄 Official Evidence & Decision Support Report</h3>
        <button class="modal-close" onclick="document.getElementById('report-modal').remove()">×</button>
      </div>
      <div class="modal-body" style="font-family: serif; color: #111;">
        <div style="text-align: center; border-bottom: 2px solid #000; padding-bottom: 12px; margin-bottom: 16px;">
          <h2 style="font-size: 18px; text-transform: uppercase;">Government of India</h2>
          <h3 style="font-size: 14px; font-weight: 500;">Ministry of Rural Development | Department of Land Resources</h3>
          <p style="font-size: 11px; margin-top: 4px;">BhoomiDrishti National Knowledge Ecosystem — Evidence Digest</p>
        </div>

        <div style="font-size: 12px; margin-bottom: 16px;">
          <strong>Project:</strong> Proposed Nagpur → Manali Highway Corridor<br>
          <strong>Date:</strong> 19 September 2026 | <strong>Classification:</strong> Internal Official Review<br>
          <strong>Data Sources:</strong> ISRO NRSC Bhuvan LULC, RGI Census 2011, MoRD Legal Digest
        </div>

        <h4 style="font-size: 13px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-bottom: 8px;">1. EXECUTIVE ANALYTICAL OBSERVATION</h4>
        <p style="font-size: 12px; line-height: 1.5; margin-bottom: 12px;">
          Analytical evaluation across 3 corridor scenarios indicates that <strong>Route B (Forest Bypass)</strong> minimizes environmental friction with an 8.2 km² forest overlap (vs 24.6 km² in Route C) and reduces population buffer exposure to 0.98 Lakhs.
        </p>

        <h4 style="font-size: 13px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-bottom: 8px;">2. STATUTORY CLEARANCE REQUIREMENTS</h4>
        <p style="font-size: 12px; line-height: 1.5; margin-bottom: 16px;">
          • Forest Clearance under Forest (Conservation) Act 2023 required for all routes.<br>
          • Mandatory Social Impact Assessment (SIA) under RFCTLARR Act 2013 triggered.
        </p>

        <div class="alert-box alert-warning" style="font-family: sans-serif; font-size: 11px;">
          ⚠️ <strong>DISCLAIMER:</strong> This report provides evidence-based analysis for official decision-support. Final project route selection rests with competent statutory authorities. DEMO DATA — SIH 2026.
        </div>
      </div>
      <div class="modal-footer">
        <button onclick="window.print()" class="btn btn-primary">🖨️ Print Report</button>
        <button onclick="document.getElementById('report-modal').remove()" class="btn btn-secondary">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}
