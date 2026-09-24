/* ==========================================================================
   BhoomiDrishti — Complete Mock Dataset Store
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   DEMO DATA — SIMULATED FOR SIH PROTOTYPE
   ========================================================================== */

const BhoomiMockData = {
  // ------------------------------------------------------------------------
  // 1. SYSTEM USERS & CREDENTIALS
  // ------------------------------------------------------------------------
  users: [
    {
      id: "usr_101",
      name: "Rajesh Kumar Verma",
      email: "admin@bhoomi.gov.in",
      role: "admin",
      roleLabel: "System Administrator",
      department: "DoLR HQ, New Delhi",
      region: "National",
      status: "Active",
      lastLogin: "2026-09-19 14:10"
    },
    {
      id: "usr_102",
      name: "Priya Sharma",
      email: "data@bhoomi.gov.in",
      role: "data",
      roleLabel: "Data & Integration Officer",
      department: "NIC Delhi / DoLR Cell",
      region: "National",
      status: "Active",
      lastLogin: "2026-09-19 13:45"
    },
    {
      id: "usr_103",
      name: "Dr. Anand Mishra",
      email: "research@bhoomi.gov.in",
      role: "research",
      roleLabel: "Research Officer",
      department: "NRSC Hyderabad / DoLR Research Cell",
      region: "National",
      status: "Active",
      lastLogin: "2026-09-19 12:30"
    },
    {
      id: "usr_104",
      name: "Adv. Meena Pillai",
      email: "policy@bhoomi.gov.in",
      role: "policy",
      roleLabel: "Policy & Legal Officer",
      department: "MoRD Legal Cell",
      region: "National",
      status: "Active",
      lastLogin: "2026-09-19 11:15"
    },
    {
      id: "usr_105",
      name: "Vikram Singh Rathore",
      email: "planning@bhoomi.gov.in",
      role: "decision",
      roleLabel: "Planning & Decision Officer",
      department: "DPIIT / Planning Division",
      region: "Maharashtra",
      status: "Active",
      lastLogin: "2026-09-19 10:05"
    },
    {
      id: "usr_106",
      name: "Dr. Sunita Rao",
      email: "researcher@iitb.ac.in",
      role: "external",
      roleLabel: "External Researcher",
      department: "IIT Bombay — Dept of Earth Sciences",
      region: "Maharashtra",
      status: "Active",
      lastLogin: "2026-09-18 16:20"
    }
  ],

  // ------------------------------------------------------------------------
  // 2. INTEGRATED DATA SOURCES & APIS
  // ------------------------------------------------------------------------
  apiSources: [
    { id: "api_1", name: "Bhuvan / NRSC LULC API", provider: "ISRO NRSC", status: "Active", sync: "2 mins ago", records: "1.2M", freshness: "98%", errorRate: "0.1%" },
    { id: "api_2", name: "Census Demographics API", provider: "RGI India", status: "Active", sync: "1 hr ago", records: "2.1M", freshness: "96%", errorRate: "0.0%" },
    { id: "api_3", name: "Mahabhulekh Land Records API", provider: "Govt of Maharashtra", status: "Partial", sync: "3 hrs ago", records: "840K", freshness: "78%", errorRate: "2.3%" },
    { id: "api_4", name: "IMD Climate Data Stream", provider: "MoES IMD", status: "Active", sync: "30 mins ago", records: "124K", freshness: "99%", errorRate: "0.0%" },
    { id: "api_5", name: "data.gov.in Portal API", provider: "NIC India", status: "Active", sync: "15 mins ago", records: "412K", freshness: "95%", errorRate: "0.1%" }
  ],

  // ------------------------------------------------------------------------
  // 3. NATIONAL INDICATORS — LAND DISPUTES & CLIMATE RESILIENCE
  // ------------------------------------------------------------------------
  disputeStats: {
    totalActive: 2847,
    yoyChange: "-8.3%",
    avgResolutionMonths: 14.2,
    prevResolutionMonths: 16.8,
    digitizedPct: 74,
    breakdown: [
      { type: "Boundary Disputes", pct: 38 },
      { type: "Ownership Disputes", pct: 29 },
      { type: "Encroachment Cases", pct: 19 },
      { type: "Inheritance & Partition", pct: 14 }
    ]
  },

  climateResilience: [
    { district: "Nagpur", actualRainfall: "1184.2 mm", departurePct: "+12.3%", category: "Excess", score: 7.1, risk: "Moderate Flood Risk", trend: "Stable", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" },
    { district: "Mumbai City", actualRainfall: "2680.5 mm", departurePct: "+21.5%", category: "Large Excess", score: 5.2, risk: "High Inundation Risk", trend: "Worsening", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" },
    { district: "Thane", actualRainfall: "2840.1 mm", departurePct: "+17.8%", category: "Excess", score: 5.4, risk: "High Drainage Stress", trend: "Worsening", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" },
    { district: "Pune", actualRainfall: "985.4 mm", departurePct: "+10.7%", category: "Normal", score: 7.8, risk: "Low Risk", trend: "Improving", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" },
    { district: "Nashik", actualRainfall: "842.0 mm", departurePct: "+3.9%", category: "Normal", score: 6.9, risk: "Moderate Risk", trend: "Stable", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" },
    { district: "Amravati", actualRainfall: "720.6 mm", departurePct: "-14.7%", category: "Deficient", score: 5.4, risk: "Dry Spell Stress", trend: "Worsening", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" },
    { district: "Aurangabad (Chhatrapati Sambhajinagar)", actualRainfall: "510.2 mm", departurePct: "-24.4%", category: "Deficient", score: 4.8, risk: "High Drought Risk", trend: "Worsening", period: "Monsoon 2024", attribution: "India Meteorological Department (IMD)" }
  ],

  // ------------------------------------------------------------------------
  // 3.1 IMD DISTRICT RAINFALL DATA STREAM (REQUIREMENT 10, 13, 14)
  // ------------------------------------------------------------------------
  imdRainfallData: [
    { state: "Maharashtra", district: "Nagpur", actual_mm: 1184.2, normal_mm: 1054.3, departure_pct: 12.3, category: "Excess", period: "Monsoon 2024", updated: "2024-09-30", risk: "Candidate land parcels require additional drainage assessment due to +12.3% excess monsoon runoff." },
    { state: "Maharashtra", district: "Thane", actual_mm: 2840.1, normal_mm: 2410.0, departure_pct: 17.8, category: "Excess", period: "Monsoon 2024", updated: "2024-09-30", risk: "High coastal & urban drainage stress. Land acquisition corridors require 200m buffer from flood zones." },
    { state: "Maharashtra", district: "Aurangabad", actual_mm: 510.2, normal_mm: 675.0, departure_pct: -24.4, category: "Deficient", period: "Monsoon 2024", updated: "2024-09-30", risk: "Severe rainfed agricultural stress (-24.4%). Drought-adaptive land pooling policy recommended." }
  ],

  // ------------------------------------------------------------------------
  // 4. RESEARCH REPOSITORY (15+ ENTRIES)
  // ------------------------------------------------------------------------
  researchDocs: [
    {
      id: "doc_101",
      title: "Impact of Land Consolidation on Agricultural Productivity in Maharashtra",
      type: "Research Paper",
      authors: "Dr. Anand Mishra, Prof. Sanjay Mehta",
      year: 2024,
      region: "Maharashtra",
      source: "Journal of Indian Land Governance",
      tags: ["Agricultural Land", "Land Consolidation", "Maharashtra"],
      summary: "Evaluates post-consolidation crop yield increases across 12 districts in Maharashtra, showing an average 18% improvement in farm efficiency.",
      access: "Public"
    },
    {
      id: "doc_102",
      title: "Urban Sprawl and Fringe Land Conversion along Nagpur Corridor 2015–2024",
      type: "Case Study",
      authors: "Dr. Sunita Rao, IIT Bombay",
      year: 2024,
      region: "Nagpur",
      source: "GIS & Remote Sensing Review",
      tags: ["Urban Land", "Infrastructure", "Nagpur"],
      summary: "Remote sensing analysis demonstrating 24% conversion of prime agricultural land to urban/industrial zones near Nagpur Ring Road.",
      access: "Public"
    },
    {
      id: "doc_103",
      title: "Digital Land Records and Dispute Frequencies in Schedule V Tribal Areas",
      type: "Policy Paper",
      authors: "Adv. Ananya Singh, NLU Delhi",
      year: 2023,
      region: "Central India",
      source: "DoLR Occasional Papers",
      tags: ["Land Dispute", "Digital Records", "Tribal Land"],
      summary: "Comparative analysis of court dispute filings before and after SVAMITVA drone surveys in tribal habitations.",
      access: "Restricted"
    },
    {
      id: "doc_104",
      title: "Climate Stress and Crop Land Adaptation in Vidarbha Region",
      type: "Govt Report",
      authors: "ICAR & IMD Joint Taskforce",
      year: 2023,
      region: "Vidarbha",
      source: "Ministry of Agriculture",
      tags: ["Climate-Land", "Vidarbha", "Agricultural Land"],
      summary: "Projections of precipitation variability and monsoon shifts impacting rainfed agricultural parcels in eastern Maharashtra.",
      access: "Public"
    },
    {
      id: "doc_105",
      title: "Evaluation of RFCTLARR Act 2013 Compensation Norms for Highway Projects",
      type: "Legal Analysis",
      authors: "Adv. Meena Pillai, MoRD Legal Cell",
      year: 2024,
      region: "National",
      source: "MoRD Internal Legal Digest",
      tags: ["Land Acquisition", "RFCTLARR 2013", "Legal Framework"],
      summary: "Synthesizes Supreme Court judgments on multiplier factors applied to rural land compensation rates.",
      access: "Restricted"
    }
  ],

  // ------------------------------------------------------------------------
  // 5. POLICY & LEGAL DOCUMENTS (REAL LEGISLATION)
  // ------------------------------------------------------------------------
  policies: [
    {
      id: "pol_201",
      title: "Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013",
      jurisdiction: "Central",
      year: 2013,
      category: "Land Acquisition",
      status: "Active Framework",
      summary: "Regulates land acquisition and lays down rules for providing compensation, rehabilitation and resettlement to affected persons in India."
    },
    {
      id: "pol_202",
      title: "Forest (Conservation) Amendment Act, 2023",
      jurisdiction: "Central",
      year: 2023,
      category: "Forest & Environment",
      status: "Active Framework",
      summary: "Amends the 1980 Act to streamline clearances for strategic national security infrastructure and linear public projects."
    },
    {
      id: "pol_203",
      title: "Maharashtra Land Revenue Code, 1966 (with 2022 Non-Agricultural Use Amendments)",
      jurisdiction: "Maharashtra",
      year: 1966,
      category: "Revenue & Land Use",
      status: "State Law",
      summary: "Consolidates and amends the law relating to land and land revenue in the State of Maharashtra."
    },
    {
      id: "pol_204",
      title: "SVAMITVA Scheme Operational Guidelines",
      jurisdiction: "Central",
      year: 2020,
      category: "Digital Records",
      status: "National Scheme",
      summary: "Central sector scheme providing property cards to village household owners using drone survey technology."
    }
  ],

  // ------------------------------------------------------------------------
  // 6. SCENARIOS FOR NAGPUR → MANALI HIGHWAY PROJECT
  // ------------------------------------------------------------------------
  scenarios: [
    {
      route: "Route A (Direct Corridor)",
      distanceKm: 1380,
      affectedKm2: 284,
      agriLandKm2: 142,
      forestKm2: 18.4,
      populationBuffer: "1.24 Lakhs",
      waterBodies: 12,
      costIndex: "Medium",
      climateRisk: "Moderate",
      legalConstraints: 4
    },
    {
      route: "Route B (Bypass Forest Zone)",
      distanceKm: 1420,
      affectedKm2: 312,
      agriLandKm2: 168,
      forestKm2: 8.2,
      populationBuffer: "0.98 Lakhs",
      waterBodies: 8,
      costIndex: "High",
      climateRisk: "Low",
      legalConstraints: 7
    },
    {
      route: "Route C (Existing HW Expansion)",
      distanceKm: 1365,
      affectedKm2: 267,
      agriLandKm2: 124,
      forestKm2: 24.6,
      populationBuffer: "1.41 Lakhs",
      waterBodies: 15,
      costIndex: "Low",
      climateRisk: "High",
      legalConstraints: 3
    }
  ],

  // ------------------------------------------------------------------------
  // 7. INNOVATION HUB OPPORTUNITIES (REQ 15)
  // ------------------------------------------------------------------------
  innovation: {
    hackathons: [
      { id: "h1", title: "🏆 LandTech National Hackathon 2026", org: "DoLR + NIC", prize: "₹10 Lakhs", status: "Registration Open", deadline: "30 Sep 2026", teams: 87 },
      { id: "h2", title: "🏆 GeoInnovate India Sprint", org: "ISRO NRSC", prize: "₹8 Lakhs", status: "Submissions Open", deadline: "15 Oct 2026", teams: 124 }
    ],
    grants: [
      { id: "g1", title: "💰 National Land Governance Research Grant", org: "DoLR / ICSSR", amount: "Up to ₹25 Lakhs", eligible: "Universities & Research Orgs", status: "Open Call" },
      { id: "g2", title: "💰 Climate-Land Nexus Research Fellowship", org: "MoEFCC + ICAR", amount: "₹8 Lakhs/year", eligible: "PhD & Post-Doc Scholars", status: "Open Call" }
    ],
    competitions: [
      { id: "c1", title: "📊 Land Data Visualization Challenge", org: "NIC India", prize: "₹1 Lakh", status: "Active", deadline: "20 Oct 2026" }
    ],
    pilots: [
      { id: "p1", title: "🚀 AI Land Dispute Pre-Screening Pilot", org: "DoLR + NLU Delhi", location: "Nagpur District", status: "Active Pilot" }
    ]
  },

  // ------------------------------------------------------------------------
  // 8. OUTBOUND APIS REFERENCE (REQ 18)
  // ------------------------------------------------------------------------
  outboundApis: [
    { endpoint: "/api/v1/research/search", method: "GET", auth: "OAuth 2.0 Bearer", desc: "Search published research repository by keyword, region or topic tag." },
    { endpoint: "/api/v1/gis/layers", method: "GET", auth: "OAuth 2.0 Bearer", desc: "Retrieve GeoJSON vectors for land-use patterns, water bodies and climate risk layers." },
    { endpoint: "/api/v1/policy/repository", method: "GET", auth: "OAuth 2.0 Bearer", desc: "Query national and state policy frameworks, amendments and legal digests." },
    { endpoint: "/api/v1/reports/export", method: "GET", auth: "OAuth 2.0 Bearer", desc: "Export standardized evidence reports for specific project IDs." }
  ]
};

// Initial state for LocalStorage fallback
if (!localStorage.getItem("bhoomi_project_state")) {
  const initialProjectState = {
    activeProject: "Nagpur → Manali Highway",
    dataLayer: { lastSync: "2026-09-19 10:30", freshness: 96, sources: ["Bhuvan", "Census", "IMD"], updatedBy: "Priya Sharma (Data Officer)" },
    researchLayer: { documentsFound: 42, synthesisDone: true, lastSynthesis: "2026-09-19 11:15", updatedBy: "Dr. Anand Mishra (Research Officer)" },
    policyLayer: { constraintsFound: 7, complianceAlerts: 3, lastAnalysis: "2026-09-19 11:45", updatedBy: "Adv. Meena Pillai (Policy Officer)" },
    decisionLayer: { scenariosRun: 3, currentScenario: "Route B selected for review", notes: "Route B presents optimal forest conservation outcome.", updatedBy: "Vikram Singh (Planning Officer)" }
  };
  localStorage.setItem("bhoomi_project_state", JSON.stringify(initialProjectState));
}
