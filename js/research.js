/* ==========================================================================
   BhoomiDrishti — Research Officer Controller & RAG Engine
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
          <button onclick="BhoomiShared.showToast('Document added to active synthesis buffer.', 'success')" class="btn btn-sm btn-secondary">➕ Add to RAG Context</button>
          <button onclick="BhoomiShared.showToast('Full PDF viewer opened.', 'info')" class="btn btn-sm btn-secondary">👁️ View Document</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function setRagQuery(q) {
  const input = document.getElementById("aiQueryInput");
  if (input) {
    input.value = q;
    runAiResearchSearch();
  }
}

function runAiResearchSearch() {
  const query = document.getElementById("aiQueryInput")?.value || "SVAMITVA dispute reduction";
  const box = document.getElementById("aiSynthesisContainer");
  const text = document.getElementById("aiSynthesisText");
  const steps = document.getElementById("ragPipelineSteps");
  const chunksList = document.getElementById("retrievedChunksList");

  if (!box || !text) return;

  BhoomiShared.showToast("⚡ Initiating RAG Pipeline: Vectorizing Query & Performing Similarity Search...", "info");
  
  if (steps) steps.style.display = "block";
  box.style.display = "none";

  // Simulate RAG Pipeline Delay
  setTimeout(() => {
    box.style.display = "flex";

    // 1. Synthesized Response with Citations
    text.innerHTML = `
      <strong>Synthesized Evidence RAG Answer for query "${query}":</strong><br><br>
      • <strong>Dispute Reduction Impact:</strong> Empirical evaluation of digital land records and drone mapping indicates an estimated <strong>28% decrease in boundary disputes</strong> within 24 months of title distribution <a href="#doc_103" style="color: var(--primary-navy); font-weight: 700;">[Doc #103]</a>.<br><br>
      • <strong>Fringe Conversion Dynamics:</strong> Remote sensing LULC series shows a <strong>24% conversion rate</strong> of agricultural land to non-agricultural zones along infrastructure corridors like the Nagpur Ring Road <a href="#doc_102" style="color: var(--primary-navy); font-weight: 700;">[Doc #102]</a>.<br><br>
      • <strong>Statutory Mandates:</strong> Property card issuance under the SVAMITVA Scheme operates under statutory provisions of state revenue codes (e.g. Maharashtra Land Revenue Code 1966) <a href="#pol_204" style="color: var(--primary-navy); font-weight: 700;">[Pol #204]</a>.
    `;

    // 2. Render Retrieved Chunks with Similarity Ranks
    if (chunksList) {
      chunksList.innerHTML = `
        <div style="display: grid; gap: 8px; font-size: 12px; margin-top: 6px;">
          <div style="background: #F8FAFC; padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--secondary-green);">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--primary-navy);">[Doc #103] Digital Land Records and Dispute Frequencies in Schedule V Areas</strong>
              <span class="status-pill status-active" style="font-size: 10px;">Similarity: 94.2%</span>
            </div>
            <div style="color: var(--text-muted); margin-top: 2px;">"Comparative analysis of court dispute filings before and after SVAMITVA drone surveys in tribal habitations shows dispute reduction..."</div>
          </div>
          <div style="background: #F8FAFC; padding: 8px 12px; border-radius: 4px; border-left: 3px solid var(--info-blue);">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--primary-navy);">[Doc #102] Urban Sprawl & Fringe Land Conversion along Nagpur Corridor</strong>
              <span class="status-pill status-info" style="font-size: 10px;">Similarity: 88.7%</span>
            </div>
            <div style="color: var(--text-muted); margin-top: 2px;">"Remote sensing analysis demonstrating 24% conversion of prime agricultural land to urban/industrial zones..."</div>
          </div>
        </div>
      `;
    }
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

// --------------------------------------------------------------------------
// RAG ARCHITECTURE INSPECTOR MODAL
// --------------------------------------------------------------------------
function openRagArchitectureModal() {
  const modal = document.createElement("div");
  modal.className = "modal-backdrop active";
  modal.id = "rag-arch-modal";
  modal.innerHTML = `
    <div class="modal-dialog" style="max-width: 760px;">
      <div class="modal-header">
        <h3 class="modal-title">⚡ BhoomiDrishti RAG Engine Architecture</h3>
        <button class="modal-close" onclick="document.getElementById('rag-arch-modal').remove()">×</button>
      </div>
      <div class="modal-body" style="font-size: 13px; color: var(--text-primary);">
        <div class="alert-box alert-info" style="margin-bottom: 16px;">
          ℹ️ <strong>RAG System Flowchart:</strong> Demonstrates how retrieval-augmented generation connects research papers, legislative acts, and court precedents with LLM synthesis.
        </div>

        <div style="background: #0F172A; color: white; padding: 20px; border-radius: var(--radius-md); font-family: monospace; line-height: 1.6; font-size: 12px; margin-bottom: 16px; overflow-x: auto;">
[1. Document Ingestion] ──► [2. Chunking & Tokenization] ──► [3. Embedding Model]
(PDFs, Acts, Papers)        (512-Token Overlapping Chunks)     (text-embedding-3-small)
                                                                       │
                                                                       ▼
[6. Cited LLM Synthesis] ◄── [5. Hybrid Retrieval Rerank] ◄── [4. Vector DB Storage]
(Rule C Transparency)        (Cosine Similarity + BM25)         (ChromaDB / PGVector)
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
          <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: var(--radius-md);">
            <strong style="color: var(--primary-navy);">📚 Document Store Indexed:</strong>
            <ul style="padding-left: 16px; font-size: 12px; color: var(--text-muted); margin-top: 4px;">
              <li>1,247 Research Papers & Case Studies</li>
              <li>384 Policy Acts & Legislative Frameworks</li>
              <li>892 Land Suit Court Precedents</li>
            </ul>
          </div>
          <div style="border: 1px solid var(--border-color); padding: 12px; border-radius: var(--radius-md);">
            <strong style="color: var(--primary-navy);">🛡️ AI Guardrails & Rule C:</strong>
            <ul style="padding-left: 16px; font-size: 12px; color: var(--text-muted); margin-top: 4px;">
              <li>Mandatory Source Traceability</li>
              <li>Inline Document Citation Tags</li>
              <li>Confidence & Uncertainty Scoring</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button onclick="document.getElementById('rag-arch-modal').remove()" class="btn btn-primary">Close Architecture Diagram</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

function openUploadModal() {
  BhoomiShared.showToast("Upload Research Paper dialog opened.", "info");
}
