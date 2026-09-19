/* ==========================================================================
   BhoomiDrishti — System Admin Controller
   SIH 2026 | PS 26019 | Department of Land Resources (DoLR), MoRD, GoI
   ========================================================================== */

function renderUsersTable() {
  const tbody = document.querySelector("#usersTable tbody");
  if (!tbody) return;

  let html = "";
  BhoomiMockData.users.forEach(u => {
    html += `
      <tr>
        <td style="font-weight: 600; color: var(--primary-navy);">${u.name}<br><span style="font-size: 11px; color: var(--text-muted);">${u.email}</span></td>
        <td><span class="role-badge ${u.role}">${u.roleLabel}</span></td>
        <td>${u.department}</td>
        <td>${u.region}</td>
        <td><span class="status-pill status-${u.status.toLowerCase()}">${u.status}</span></td>
        <td>${u.lastLogin}</td>
        <td>
          <button onclick="BhoomiShared.showToast('User status updated for ${u.name}', 'success')" class="btn btn-sm btn-secondary">Edit</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function renderOutboundApis() {
  const container = document.getElementById("outboundApisContainer");
  if (!container) return;

  let html = "";
  BhoomiMockData.outboundApis.forEach(api => {
    html += `
      <div style="border: 1px solid var(--border-color); padding: 16px; border-radius: var(--radius-md); background: white;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 11px; font-weight: 700; background: var(--primary-navy); color: white; padding: 2px 6px; border-radius: 4px;">${api.method}</span>
          <span style="font-size: 11px; color: var(--text-muted);">${api.auth}</span>
        </div>
        <code style="display: block; font-size: 13px; font-weight: 700; color: var(--primary-navy); margin-bottom: 6px;">${api.endpoint}</code>
        <p style="font-size: 12.5px; color: var(--text-primary); margin-bottom: 12px;">${api.desc}</p>
        <button onclick="BhoomiShared.showToast('Endpoint URL copied to clipboard.', 'info')" class="btn btn-sm btn-secondary">📋 Copy API Specs</button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function openAddUserModal() {
  BhoomiShared.showToast("Add User dialog: Create new government user account.", "info");
}
