// User View - Route Planner
document.getElementById('app-page').innerHTML = `
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
          <a href="#" onclick="showPage('admin-page'); return false" class="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg transition">
            Admin Portal
          </a>
        </div>
      </div>
    </div>
  </nav>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Route Planner</h1>
      <p class="text-slate-400">Plan and optimize your delivery routes with AI</p>
    </div>

    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Sidebar -->
      <div class="lg:col-span-1 space-y-6">
        <!-- Delivery Points -->
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <h2 class="text-lg font-semibold mb-4">Delivery Stops</h2>
          <div id="delivery-stops" class="space-y-3"></div>
          <button onclick="optimizeRoute()" id="optimize-btn" class="w-full mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Optimize Route
          </button>
        </div>

        <!-- Route Stats -->
        <div id="route-stats" class="bg-slate-900 rounded-xl border border-slate-800 p-6" style="display: none;">
          <h2 class="text-lg font-semibold mb-4">Route Summary</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm">Total Time</span>
              </div>
              <span class="font-semibold">42 min</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span class="text-sm">Distance</span>
              </div>
              <span class="font-semibold">8.4 mi</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-slate-400">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
                <span class="text-sm">Time Saved</span>
              </div>
              <span class="font-semibold text-green-500">18 min</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="lg:col-span-2">
        <div class="bg-slate-900 rounded-xl border border-slate-800 p-6">
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">Interactive Map</h2>
            <span id="optimized-badge" class="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full" style="display: none;">
              Route Optimized
            </span>
          </div>
          <div id="map" class="h-[600px] rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>
`;

// Sample delivery points in New York City
const deliveryPoints = [
  { lat: 40.7580, lng: -73.9855, label: 'Stop 1', address: 'Times Square, NYC' },
  { lat: 40.7484, lng: -73.9857, label: 'Stop 2', address: 'Empire State Building' },
  { lat: 40.7614, lng: -73.9776, label: 'Stop 3', address: 'Central Park South' },
  { lat: 40.7589, lng: -73.9851, label: 'Stop 4', address: 'Columbus Circle' },
  { lat: 40.7549, lng: -73.9840, label: 'Stop 5', address: 'Carnegie Hall' },
];

let map, routeLine;
let isOptimized = false;

// Initialize map
function initAppMap() {
  map = L.map('map').setView([40.7580, -73.9855], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19,
  }).addTo(map);

  // Render delivery stops list
  const stopsContainer = document.getElementById('delivery-stops');
  deliveryPoints.forEach((point, index) => {
    const stopDiv = document.createElement('div');
    stopDiv.className = 'flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg';
    stopDiv.innerHTML = `
      <div class="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-semibold">
        ${index + 1}
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-medium text-sm">${point.label}</p>
        <p class="text-xs text-slate-400 truncate">${point.address}</p>
      </div>
    `;
    stopsContainer.appendChild(stopDiv);

    // Add markers
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background: #3b82f6; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    L.marker([point.lat, point.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`<strong>${point.label}</strong><br>${point.address}`);
  });
}

function optimizeRoute() {
  const btn = document.getElementById('optimize-btn');
  btn.disabled = true;
  btn.innerHTML = '<span>Optimizing...</span>';

  setTimeout(() => {
    isOptimized = true;
    btn.disabled = false;
    btn.innerHTML = `
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
      Optimize Route
    `;

    // Draw route line
    const latlngs = deliveryPoints.map(p => [p.lat, p.lng]);
    if (routeLine) {
      map.removeLayer(routeLine);
    }
    routeLine = L.polyline(latlngs, {
      color: '#3b82f6',
      weight: 4,
      opacity: 0.7,
      smoothFactor: 1,
    }).addTo(map);

    // Show stats and badge
    document.getElementById('route-stats').style.display = 'block';
    document.getElementById('optimized-badge').style.display = 'block';
  }, 2000);
}

// Initialize on page load
if (document.getElementById('app-page').classList.contains('active')) {
  setTimeout(initAppMap, 100);
}
