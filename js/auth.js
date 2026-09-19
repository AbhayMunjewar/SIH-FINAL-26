/* ==========================================================================
   BhoomiDrishti — Authentication & RBAC Engine
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

const BhoomiAuth = {
  // Page to required role mapping
  pagePermissions: {
    "admin_dashboard.html": ["admin"],
    "data_dashboard.html": ["admin", "data"],
    "research_dashboard.html": ["admin", "research"],
    "policy_dashboard.html": ["admin", "policy"],
    "decision_dashboard.html": ["admin", "decision"],
    "external_portal.html": ["admin", "external"],
    "public_portal.html": ["admin", "data", "research", "policy", "decision", "external", "public"]
  },

  // 1. Get current logged in session
  getSession() {
    const raw = localStorage.getItem("bhoomi_user_session");
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  },

  // 2. Perform login
  login(email, password, selectedRole) {
    // Validate credentials
    const user = BhoomiMockData.users.find(u => u.email === email && u.role === selectedRole);
    if (!user) {
      return { success: false, message: "Invalid credentials or role mismatch for prototype demo." };
    }

    const sessionData = {
      user: user.email,
      name: user.name,
      role: user.role,
      roleLabel: user.roleLabel,
      department: user.department,
      region: user.region,
      loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    localStorage.setItem("bhoomi_user_session", JSON.stringify(sessionData));
    return { success: true, session: sessionData, redirectUrl: BhoomiAuth.getDashboardUrl(user.role) };
  },

  // 3. Get redirect URL for role
  getDashboardUrl(role) {
    switch (role) {
      case "admin": return "admin_dashboard.html";
      case "data": return "data_dashboard.html";
      case "research": return "research_dashboard.html";
      case "policy": return "policy_dashboard.html";
      case "decision": return "decision_dashboard.html";
      case "external": return "external_portal.html";
      default: return "public_portal.html";
    }
  },

  // 4. Verify RBAC on protected page load
  checkAccess(currentPageFile) {
    if (currentPageFile === "index.html") return; // Login page open to all

    const session = BhoomiAuth.getSession();
    
    // Guest view handles public portal
    if (currentPageFile === "public_portal.html") {
      return;
    }

    // Require valid session for internal dashboards
    if (!session) {
      BhoomiAuth.showAccessDeniedOverlay("No active session found. Please login to continue.");
      return;
    }

    const allowedRoles = BhoomiAuth.pagePermissions[currentPageFile] || [];
    if (!allowedRoles.includes(session.role)) {
      BhoomiAuth.showAccessDeniedOverlay(`Your role (${session.roleLabel}) does not have permission to view this section.`);
    }
  },

  // 5. Render Access Denied overlay
  showAccessDeniedOverlay(reason) {
    document.body.innerHTML = `
      <div style="height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #F5F7FA; font-family: Inter, sans-serif; text-align: center; padding: 20px;">
        <div style="background: white; padding: 40px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); max-width: 480px; width: 100%;">
          <div style="font-size: 48px; margin-bottom: 16px;">🔒</div>
          <h2 style="color: #0D3B66; margin-bottom: 12px;">Access Restricted</h2>
          <p style="color: #6B7A8D; font-size: 14px; margin-bottom: 24px;">${reason}</p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <a href="index.html" style="background: #0D3B66; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 13px;">Return to Login</a>
            <button onclick="BhoomiAuth.switchRole('admin')" style="background: #F4A716; color: #0D3B66; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 13px; cursor: pointer;">Switch to Admin Mode</button>
          </div>
        </div>
      </div>
    `;
  },

  // 6. Demo role switcher
  switchRole(targetRole) {
    const targetUser = BhoomiMockData.users.find(u => u.role === targetRole) || {
      email: `${targetRole}@bhoomi.gov.in`,
      name: `Demo ${targetRole.toUpperCase()} User`,
      role: targetRole,
      roleLabel: targetRole.toUpperCase() + " Role",
      department: "DoLR Prototype Cell",
      region: "National"
    };

    const sessionData = {
      user: targetUser.email,
      name: targetUser.name,
      role: targetRole,
      roleLabel: targetUser.roleLabel,
      department: targetUser.department,
      region: targetUser.region,
      loginTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    localStorage.setItem("bhoomi_user_session", JSON.stringify(sessionData));
    window.location.href = BhoomiAuth.getDashboardUrl(targetRole);
  },

  // 7. Logout
  logout() {
    localStorage.removeItem("bhoomi_user_session");
    window.location.href = "index.html";
  }
};
