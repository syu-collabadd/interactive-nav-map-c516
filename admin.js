// Admin View - Fleet Dashboard
document.getElementById('admin-page').innerHTML = `
  <nav class="border-b border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <a href="#" onclick="showPage('home-page'); return false" class="flex items-center gap-2">
          <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-xl font-semibold">RouteWise</span>
        </a>
        <div class="flex gap-4">
          <a href="#" onclick="showPage('app-page'); return false" class="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            User View
          </a>
        </div>
      </div>
    </div>
  </nav>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Admin Dashboard</h1>
      <p class="text-slate-400">Monitor and manage your entire fleet</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Active Routes</span>
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h3.5" />
          </svg>
        </div>
        <p class="text-3xl font-bold">24</p>
        <p class="text-xs text-green-500 mt-1">+3 from yesterday</p>
      </div>

      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Total Deliveries</span>
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <p class="text-3xl font-bold">187</p>
        <p class="text-xs text-green-500 mt-1">+12% this week</p>
      </div>

      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Avg. Time Saved</span>
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-3xl font-bold">23m</p>
        <p class="text-xs text-slate-400 mt-1">Per route</p>
      </div>

      <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
        <div class="flex items-center justify-between mb-2">
          <span class="text-slate-400 text-sm">Active Drivers</span>
          <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </div>
        <p class="text-3xl font-bold">18</p>
        <p class="text-xs text-slate-400 mt-1">Out of 22 total</p>
      </div>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Active Routes List -->
      <div class="lg:col-span-1 space-y-6">
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h2 class="text-lg font-semibold mb-4">Active Routes</h2>
          <div id="active-routes" class="space-y-4"></div>
        </div>
      </div>

      <!-- Map -->
      <div class="lg:col-span-2">
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Fleet Overview</h2>
            <span class="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
              Live Tracking
            </span>
          </div>
          <div id="admin-map" class="h-[600px] rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
`;

// Sample active routes data
const activeRoutes = [
  {
    id: 1,
    driver: 'John Smith',
    stops: 8,
    completed: 3,
    eta: '2:45 PM',
    status: 'on-time',
    location: { lat: 40.7580, lng: -73.9855 }
  },
  {
    id: 2,
    driver: 'Sarah Johnson',
    stops: 12,
    completed: 7,
    eta: '3:15 PM',
    status: 'on-time',
    location: { lat: 40.7484, lng: -73.9857 }
  },
  {
    id: 3,
    driver: 'Mike Chen',
    stops: 6,
    completed: 2,
    eta: '4:30 PM',
    status: 'delayed',
    location: { lat: 40.7614, lng: -73.9776 }
  },
];

let adminMap;

// Initialize admin map
function initAdminMap() {
  adminMap = L.map('admin-map').setView([40.7560, -73.9870], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(adminMap);

  // Render active routes list
  const routesContainer = document.getElementById('active-routes');
  activeRoutes.forEach((route) => {
    const routeDiv = document.createElement('div');
    routeDiv.className = 'p-4 bg-slate-800/50 rounded-lg';
    const statusIcon = route.status === 'on-time'
      ? '<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
      : '<svg class="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';

    const progress = Math.round((route.completed / route.stops) * 100);
    routeDiv.innerHTML = `
      <div class="flex items-start justify-between mb-2">
        <div>
          <p class="font-medium">${route.driver}</p>
          <p class="text-xs text-slate-400">Route #${route.id}</p>
        </div>
        ${statusIcon}
      </div>
      <div class="space-y-1 text-sm">
        <div class="flex justify-between text-slate-400">
          <span>Progress</span>
          <span>${route.completed}/${route.stops} stops</span>
        </div>
        <div class="w-full bg-slate-700 rounded-full h-1.5">
          <div class="bg-blue-500 h-1.5 rounded-full" style="width: ${progress}%"></div>
        </div>
        <div class="flex justify-between text-slate-400 pt-1">
          <span>ETA</span>
          <span class="text-white">${route.eta}</span>
        </div>
      </div>
    `;
    routesContainer.appendChild(routeDiv);

    // Add driver markers to map
    const driverIcon = L.divIcon({
      className: 'driver-marker',
      html: `<div style="background: ${route.status === 'on-time' ? '#10b981' : '#f59e0b'}; width: 28px; height: 28px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    L.marker([route.location.lat, route.location.lng], { icon: driverIcon })
      .addTo(adminMap)
      .bindPopup(`<strong>${route.driver}</strong><br>Route #${route.id}<br>${route.completed}/${route.stops} stops`);
  });
}

// Initialize on page load
if (document.getElementById('admin-page').classList.contains('active')) {
  setTimeout(initAdminMap, 100);
}
