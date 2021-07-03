// Create a fingerprinting message channel to listen on
const fpChannel = new BroadcastChannel("fingerprint");

const frame = document.getElementById("fpframe");

frame.src = "/frame.html";

let data = [];

fpChannel.onmessage = (e) => {
  console.log(e);

  data.push(e.data);

  // If we don't have enough data, create another popup
  if (data.length != 2) frame.contentWindow.location.reload();
  else {
    console.log(data);
    frame.remove();
    report();
  }
};

function deepEqual(a, b) {
  if (typeof a == "object" && a != null && typeof b == "object" && b != null) {
    var count = [0, 0];
    for (var key in a) count[0]++;
    for (var key in b) count[1]++;
    if (count[0] - count[1] != 0) {
      return false;
    }
    for (var key in a) {
      if (key != "duration" && (!(key in b) || !deepEqual(a[key], b[key]))) {
        return false;
      }
    }
    for (var key in b) {
      if (key != "duration" && (!(key in a) || !deepEqual(b[key], a[key]))) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}

function report() {
  const stableEl = document.getElementById("stable");
  const audioEl = document.getElementById("audio");
  const canvasEl = document.getElementById("canvas");
  const colorDepthEl = document.getElementById("colorDepth");
  const colorGaumutEl = document.getElementById("colorGaumut");
  const contrastEl = document.getElementById("contrast");
  const cookiesEnabledEl = document.getElementById("cookiesEnabled");
  const cpuClassEl = document.getElementById("cpuClass");
  const deviceMemoryEl = document.getElementById("deviceMemory");
  const domBlockersEl = document.getElementById("domBlockers");
  const fontPreferencesEl = document.getElementById("fontPreferences");
  const fontsEl = document.getElementById("fonts");
  const forcedColorsEl = document.getElementById("forcedColors");
  const hardwareConcurrencyEl = document.getElementById("hardwareConcurrency");
  const hdrEl = document.getElementById("hdr");
  const indexedDbEl = document.getElementById("indexedDB");
  const invertedColorsEl = document.getElementById("invertedColors");
  const languagesEl = document.getElementById("languages");
  const localStorageEl = document.getElementById("localStorage");
  const mathEl = document.getElementById("math");
  const monochromeEl = document.getElementById("monochrome");
  const osCpuEl = document.getElementById("osCpu");
  const platformEl = document.getElementById("platform");
  const pluginsEl = document.getElementById("plugins");
  const reducedMotionEl = document.getElementById("reducedMotion");
  const screenFrameEl = document.getElementById("screenFrame");
  const screenResolutionEl = document.getElementById("screenResolution");
  const sessionStorageEl = document.getElementById("sessionStorage");
  const timezoneEl = document.getElementById("timezone");
  const touchSupportEl = document.getElementById("touchSupport");
  const vendorEl = document.getElementById("vendor");
  const vendorFlavoursEl = document.getElementById("vendorFlavours");

  // Check if the finger print is stable
  if (data[0].visitorId == data[1].visitorId) {
    stableEl.innerHTML = "Stable :(";
  } else {
    stableEl.innerHTML = "Unstable :)";
  }

  // Audio
  if (deepEqual(data[0].components.audio, data[1].components.audio)) {
    audioEl.innerHTML = "Audio: <b>Same</b>";
  } else {
    audioEl.innerHTML = "Audio: <b>Different</b>";
  }

  // Canvas
  if (deepEqual(data[0].components.canvas, data[1].components.canvas)) {
    canvasEl.innerHTML = "Canvas: <b>Same</b>";
  } else {
    canvasEl.innerHTML = "Canvas: <b>Different</b>";
  }

  // Color Depth
  if (deepEqual(data[0].components.colorDepth, data[1].components.colorDepth)) {
    colorDepthEl.innerHTML = "Color Depth: <b>Same</b>";
  } else {
    colorDepthEl.innerHTML = "Color Depth: <b>Different</b>";
  }

  // Color Gaumut
  if (
    deepEqual(data[0].components.colorGaumut, data[1].components.colorGaumut)
  ) {
    colorGaumutEl.innerHTML = "Color Gaumut: <b>Same</b>";
  } else {
    colorGaumutEl.innerHTML = "Color Gaumut: <b>Different</b>";
  }

  // Contrast
  if (deepEqual(data[0].components.contrast, data[1].components.contrast)) {
    contrastEl.innerHTML = "Contrast: <b>Same</b>";
  } else {
    contrastEl.innerHTML = "Contrast: <b>Different</b>";
  }

  // Cookies Enabled
  if (
    deepEqual(
      data[0].components.cookiesEnabled,
      data[1].components.cookiesEnabled
    )
  ) {
    cookiesEnabledEl.innerHTML = "Cookies Enabled: <b>Same</b>";
  } else {
    cookiesEnabledEl.innerHTML = "Cookies Enabled: <b>Different</b>";
  }

  // CPU Class
  if (deepEqual(data[0].components.cpuClass, data[1].components.cpuClass)) {
    cpuClassEl.innerHTML = "CPU Class: <b>Same</b>";
  } else {
    cpuClassEl.innerHTML = "CPU Class: <b>Different</b>";
  }

  // Device Memory
  if (
    deepEqual(data[0].components.deviceMemory, data[1].components.deviceMemory)
  ) {
    deviceMemoryEl.innerHTML = "Device Memory: <b>Same</b>";
  } else {
    deviceMemoryEl.innerHTML = "Device Memory: <b>Different</b>";
  }

  // DOM Blockers
  if (
    deepEqual(data[0].components.domBlockers, data[1].components.domBlockers)
  ) {
    domBlockersEl.innerHTML = "DOM Blockers: <b>Same</b>";
  } else {
    domBlockersEl.innerHTML = "DOM Blockers: <b>Different</b>";
  }

  // Font Preferences
  if (
    deepEqual(
      data[0].components.fontPreferences,
      data[1].components.fontPreferences
    )
  ) {
    fontPreferencesEl.innerHTML = "Font Preferences: <b>Same</b>";
  } else {
    fontPreferencesEl.innerHTML = "Font Preferences: <b>Different</b>";
  }

  // Fonts
  if (deepEqual(data[0].components.fonts, data[1].components.fonts)) {
    fontsEl.innerHTML = "Fonts: <b>Same</b>";
  } else {
    fontsEl.innerHTML = "Fonts: <b>Different</b>";
  }

  // Forced Colors
  if (
    deepEqual(data[0].components.forcedColors, data[1].components.forcedColors)
  ) {
    forcedColorsEl.innerHTML = "Forced Colors: <b>Same</b>";
  } else {
    forcedColorsEl.innerHTML = "Forced Colors: <b>Different</b>";
  }

  // Hardware Concurrency
  if (
    deepEqual(
      data[0].components.hardwareConcurrency,
      data[1].components.hardwareConcurrency
    )
  ) {
    hardwareConcurrencyEl.innerHTML = "Hardware Concurrency: <b>Same</b>";
  } else {
    hardwareConcurrencyEl.innerHTML = "Hardware Concurrency: <b>Different</b>";
  }

  // HDR
  if (deepEqual(data[0].components.hdr, data[1].components.hdr)) {
    hdrEl.innerHTML = "HDR: <b>Same</b>";
  } else {
    hdrEl.innerHTML = "HDR: <b>Different</b>";
  }

  // IndexedDB
  if (deepEqual(data[0].components.indexedDb, data[1].components.indexedDb)) {
    indexedDbEl.innerHTML = "IndexedDB: <b>Same</b>";
  } else {
    indexedDbEl.innerHTML = "IndexedDB: <b>Different</b>";
  }

  // Inverted Colors
  if (
    deepEqual(
      data[0].components.invertedColors,
      data[1].components.invertedColors
    )
  ) {
    invertedColorsEl.innerHTML = "Inverted Colors: <b>Same</b>";
  } else {
    invertedColorsEl.innerHTML = "Inverted Colors: <b>Different</b>";
  }

  // Languages
  if (deepEqual(data[0].components.languages, data[1].components.languages)) {
    languagesEl.innerHTML = "Languages: <b>Same</b>";
  } else {
    languagesEl.innerHTML = "Languages: <b>Different</b>";
  }

  // Local Storage
  if (
    deepEqual(data[0].components.localStorage, data[1].components.localStorage)
  ) {
    localStorageEl.innerHTML = "Local Storage: <b>Same</b>";
  } else {
    localStorageEl.innerHTML = "Local Storage: <b>Different</b>";
  }

  // Math
  if (deepEqual(data[0].components.math, data[1].components.math)) {
    mathEl.innerHTML = "Math: <b>Same</b>";
  } else {
    mathEl.innerHTML = "Math: <b>Different</b>";
  }

  // Monochrome
  if (deepEqual(data[0].components.monochrome, data[1].components.monochrome)) {
    monochromeEl.innerHTML = "Monochrome: <b>Same</b>";
  } else {
    monochromeEl.innerHTML = "Monochrome: <b>Different</b>";
  }

  // OS CPU
  if (deepEqual(data[0].components.osCpu, data[1].components.osCpu)) {
    osCpuEl.innerHTML = "OS CPU: <b>Same</b>";
  } else {
    osCpuEl.innerHTML = "OS CPU: <b>Different</b>";
  }

  // Platform
  if (deepEqual(data[0].components.platform, data[1].components.platform)) {
    platformEl.innerHTML = "Platform: <b>Same</b>";
  } else {
    platformEl.innerHTML = "Platform: <b>Different</b>";
  }

  // Plugins
  if (deepEqual(data[0].components.plugins, data[1].components.plugins)) {
    pluginsEl.innerHTML = "Plugins: <b>Same</b>";
  } else {
    pluginsEl.innerHTML = "Plugins: <b>Different</b>";
  }

  // Reduced Motion
  if (
    deepEqual(
      data[0].components.reducedMotion,
      data[1].components.reducedMotion
    )
  ) {
    reducedMotionEl.innerHTML = "Reduced Motion: <b>Same</b>";
  } else {
    reducedMotionEl.innerHTML = "Reduced Motion: <b>Different</b>";
  }

  // Screen Frame
  if (
    deepEqual(data[0].components.screenFrame, data[1].components.screenFrame)
  ) {
    screenFrameEl.innerHTML = "Screen Frame: <b>Same</b>";
  } else {
    screenFrameEl.innerHTML = "Screen Frame: <b>Different</b>";
  }

  // Screen Resolution
  if (
    deepEqual(
      data[0].components.screenResolution,
      data[1].components.screenResolution
    )
  ) {
    screenResolutionEl.innerHTML = "Screen Resolution: <b>Same</b>";
  } else {
    screenResolutionEl.innerHTML = "Screen Resolution: <b>Different</b>";
  }

  // Session Storage
  if (
    deepEqual(
      data[0].components.sessionStorage,
      data[1].components.sessionStorage
    )
  ) {
    sessionStorageEl.innerHTML = "Session Storage: <b>Same</b>";
  } else {
    sessionStorageEl.innerHTML = "Session Storage: <b>Different</b>";
  }

  // Timezone
  if (deepEqual(data[0].components.timezone, data[1].components.timezone)) {
    timezoneEl.innerHTML = "Timezone: <b>Same</b>";
  } else {
    timezoneEl.innerHTML = "Timezone: <b>Different</b>";
  }

  // Touch Support
  if (
    deepEqual(data[0].components.touchSupport, data[1].components.touchSupport)
  ) {
    touchSupportEl.innerHTML = "Touch Support: <b>Same</b>";
  } else {
    touchSupportEl.innerHTML = "Touch Support: <b>Different</b>";
  }

  // Vendor
  if (deepEqual(data[0].components.vendor, data[1].components.vendor)) {
    vendorEl.innerHTML = "Vendor: <b>Same</b>";
  } else {
    vendorEl.innerHTML = "Vendor: <b>Different</b>";
  }

  // Vendor Flavour
  if (
    deepEqual(
      data[0].components.vendorFlavour,
      data[1].components.vendorFlavour
    )
  ) {
    vendorFlavoursEl.innerHTML = "Vendor Flavour: <b>Same</b>";
  } else {
    vendorFlavoursEl.innerHTML = "Vendor Flavour: <b>Different</b>";
  }
}
