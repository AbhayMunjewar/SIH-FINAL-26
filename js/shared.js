/* ==========================================================================
   BhoomiDrishti — Shared UI Components & Layout Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

const BhoomiShared = {
  // 1. Initialize shared layout elements
  init(activePage, activeNavId) {
    // Check page permission first
    BhoomiAuth.checkAccess(activePage);
    
    // Inject header and sidebar if protected page
    if (activePage !== "index.html") {
      this.renderBanner();
      this.renderHeader(activePage);
      if (activePage !== "public_portal.html") {
        this.renderSidebar(activeNavId);
      }
    }
  },

  // 2. Render Demo Mode top banner
  renderBanner() {
    const banner = document.createElement("div");
    banner.className = "demo-banner";
    banner.innerHTML = `⚠️ PROTOTYPE DEMO MODE — All numbers, API calls and analytical results are simulated for SIH 2026 | PS 26019`;
    document.body.prepend(banner);
  },

  // 3. Render Header
  renderHeader(activePage) {
    const session = BhoomiAuth.getSession() || { name: "Guest User", role: "public", roleLabel: "Public Guest" };
    const header = document.createElement("header");
    header.className = "main-header";
    header.innerHTML = `
      <div class="header-left">
        <a href="public_portal.html" class="brand-logo">
          <span class="flag-icon">🇮🇳</span>
          <span>BhoomiDrishti</span>
        </a>
        <span class="page-title-header">National Land Governance Platform</span>
      </div>
      <div class="header-right">
        <span class="role-badge ${session.role}">${session.roleLabel}</span>
        
        <div class="notification-bell" onclick="BhoomiShared.toggleNotifications()">
          🔔 <span class="notification-badge">3</span>
        </div>

        <div class="user-menu-trigger" onclick="BhoomiShared.openRoleSwitcherModal()">
          <div class="user-avatar">${session.name.charAt(0)}</div>
          <span style="font-weight: 600; font-size: 13px;">${session.name}</span>
          <span style="font-size: 10px; color: var(--text-muted);">▼</span>
        </div>
      </div>
    `;

    const layout = document.querySelector(".layout-container") || document.body;
    document.body.insertBefore(header, layout);
  },

  // 4. Render Sidebar Navigation
  renderSidebar(activeNavId) {
    const session = BhoomiAuth.getSession();
    const role = session ? session.role : "public";

    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";

    let navItemsHtml = "";
    const navs = this.getNavItemsForRole(role);

    navs.forEach(nav => {
      const activeClass = nav.id === activeNavId ? "active" : "";
      navItemsHtml += `
        <li class="nav-item">
          <a href="${nav.link}" class="nav-link ${activeClass}">
            <span class="nav-icon">${nav.icon}</span>
            <span>${nav.title}</span>
          </a>
        </li>
      `;
    });

    sidebar.innerHTML = `
      <ul class="sidebar-nav">
        ${navItemsHtml}
      </ul>
      <div class="sidebar-footer">
        <div class="active-project-card">
          <div style="font-size: 10px; color: #A0B0C0; text-transform: uppercase;">📁 Active Project</div>
          <div class="project-title">Nagpur → Manali Highway</div>
          <div style="font-size: 10.5px; color: #C0CDE0; margin-top: 4px;">Status: Route B Selected</div>
        </div>
        <button onclick="BhoomiAuth.logout()" class="btn btn-sm btn-block btn-secondary" style="margin-top: 12px; background: rgba(255,255,255,0.1); color: white; border: none;">
          🚪 Logout
        </button>
      </div>
    `;

    const layout = document.querySelector(".layout-container");
    if (layout) {
      layout.prepend(sidebar);
    }
  },

  // 5. Get navigation items by role
  getNavItemsForRole(role) {
    switch (role) {
      case "admin":
        return [
          { id: "overview", icon: "🏠", title: "Overview", link: "admin_dashboard.html" },
          { id: "users", icon: "👥", title: "User Management", link: "admin_dashboard.html#users" },
          { id: "apis", icon: "🔗", title: "API Management", link: "admin_dashboard.html#apis" },
          { id: "audit", icon: "📋", title: "Audit Logs", link: "admin_dashboard.html#audit" },
          { id: "apidocs", icon: "🔌", title: "API Documentation", link: "admin_dashboard.html#apidocs" }
        ];
      case "data":
        return [
          { id: "overview", icon: "🏠", title: "Overview", link: "data_dashboard.html" },
          { id: "sources", icon: "🗄️", title: "Data Sources", link: "data_dashboard.html#sources" },
          { id: "ingestion", icon: "📥", title: "Ingestion Queue", link: "data_dashboard.html#ingestion" },
          { id: "quality", icon: "✅", title: "Quality Monitor", link: "data_dashboard.html#quality" }
        ];
      case "research":
        return [
          { id: "overview", icon: "🏠", title: "Overview", link: "research_dashboard.html" },
          { id: "ai-search", icon: "🔍", title: "AI Search & Gaps", link: "research_dashboard.html#search" },
          { id: "repository", icon: "📚", title: "Repository", link: "research_dashboard.html#repo" },
          { id: "innovation", icon: "💡", title: "Innovation Hub", link: "research_dashboard.html#innovation" }
        ];
      case "policy":
        return [
          { id: "overview", icon: "🏠", title: "Overview", link: "policy_dashboard.html" },
          { id: "repository", icon: "📜", title: "Policy Repository", link: "policy_dashboard.html#repo" },
          { id: "performance", icon: "📈", title: "Policy Performance", link: "policy_dashboard.html#performance" },
          { id: "simulation", icon: "🎮", title: "Policy Simulation", link: "policy_dashboard.html#simulation" }
        ];
      case "decision":
        return [
          { id: "overview", icon: "🏠", title: "Overview", link: "decision_dashboard.html" },
          { id: "gis", icon: "🗺️", title: "GIS Analysis", link: "decision_dashboard.html#gis" },
          { id: "scenarios", icon: "🎯", title: "Scenario Comparison", link: "decision_dashboard.html#scenarios" },
          { id: "report", icon: "📄", title: "Evidence Report", link: "decision_dashboard.html#report" }
        ];
      default:
        return [
          { id: "welcome", icon: "🏠", title: "Welcome", link: "external_portal.html" },
          { id: "browse", icon: "🔍", title: "Browse Research", link: "external_portal.html#browse" },
          { id: "datasets", icon: "📊", title: "Public Datasets", link: "external_portal.html#datasets" },
          { id: "innovation", icon: "💡", title: "Innovation Hub", link: "external_portal.html#innovation" }
        ];
    }
  },

  // 6. Toast Notification Handler
  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
      <span style="font-size: 13px;">${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
  },

  // 7. Role Switcher Modal
  openRoleSwitcherModal() {
    const modal = document.createElement("div");
    modal.className = "modal-backdrop active";
    modal.id = "role-switcher-modal";
    modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-header">
          <h3 class="modal-title">🔄 Switch User Role (Demo Mode)</h3>
          <button class="modal-close" onclick="document.getElementById('role-switcher-modal').remove()">×</button>
        </div>
        <div class="modal-body">
          <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">
            Select a role to explore BhoomiDrishti from different access perspectives:
          </p>
          <div style="display: grid; gap: 10px;">
            <button onclick="BhoomiAuth.switchRole('admin')" class="btn btn-secondary" style="justify-content: flex-start;">🔑 System Administrator</button>
            <button onclick="BhoomiAuth.switchRole('data')" class="btn btn-secondary" style="justify-content: flex-start;">🗄️ Data & Integration Officer</button>
            <button onclick="BhoomiAuth.switchRole('research')" class="btn btn-secondary" style="justify-content: flex-start;">🔍 Research Officer</button>
            <button onclick="BhoomiAuth.switchRole('policy')" class="btn btn-secondary" style="justify-content: flex-start;">⚖️ Policy & Legal Officer</button>
            <button onclick="BhoomiAuth.switchRole('decision')" class="btn btn-secondary" style="justify-content: flex-start;">🎯 Planning & Decision Officer</button>
            <button onclick="BhoomiAuth.switchRole('external')" class="btn btn-secondary" style="justify-content: flex-start;">🎓 External Knowledge Partner</button>
            <button onclick="window.location.href='public_portal.html'" class="btn btn-secondary" style="justify-content: flex-start;">👁️ Public Guest Access</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  toggleNotifications() {
    this.showToast("🔔 Active Notifications: 3 pending task reviews for your role.", "info");
  }
};
