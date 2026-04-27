"use strict";

const FEEDBACK_FORM_URL = "#";

const riverSites = [
  {
    name: "Lees Park",
    label: "LP",
    latitude: 53.545265,
    longitude: -2.072145,
    altitude: 185.6,
    distanceFromSource: 2.5,
    role: "Upstream reference site"
  },
  {
    name: "Daisy Nook",
    label: "DN",
    latitude: 53.504299,
    longitude: -2.121078,
    altitude: 80.1,
    distanceFromSource: 9.5,
    role: "Macroinvertebrate sampling site"
  },
  {
    name: "Failsworth WwTW",
    label: "WwTW",
    latitude: 53.49399,
    longitude: -2.158228,
    altitude: 61.7,
    distanceFromSource: 13.5,
    role: "Contextual wastewater treatment works location"
  },
  {
    name: "Clayton Vale",
    label: "CV",
    latitude: 53.491686,
    longitude: -2.17688,
    altitude: 52.5,
    distanceFromSource: 15,
    role: "Macroinvertebrate sampling site"
  }
];

const riverData = [
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 2.5, season: "Autumn", fe: 2831.396 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 1.9, season: "Autumn", fe: 3818.876 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 1.3, season: "Autumn", fe: 2067.379 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 1.9, season: "Autumn", fe: 8409.21 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 6.4, season: "Autumn", fe: 699.998 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 8.6, season: "Autumn", fe: 2829.273 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 1.8, season: "Autumn", fe: 7711.167 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 2.4, season: "Autumn", fe: 7700.986 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 1.8, season: "Autumn", fe: 2256.52 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 2.2, season: "Autumn", fe: 8122.712 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 0.6, season: "Autumn", fe: 3639.791 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 2.2, season: "Autumn", fe: 13413.907 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 2.0, season: "Autumn", fe: 3884.867 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 4.0, season: "Autumn", fe: 12896.878 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 1.7, season: "Autumn", fe: 4320.517 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 3.4, season: "Summer", fe: 5854.852 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 1.2, season: "Autumn", fe: 7621.882 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 4.0, season: "Autumn", fe: 870.501 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 7.3, season: "Autumn", fe: 1853.551 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 1.7, season: "Autumn", fe: 0.005 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 10.3, season: "Summer", fe: 1608.113 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 8.3, season: "Autumn", fe: 2854.663 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 1.5, season: "Autumn", fe: 2360.732 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 0.7, season: "Autumn", fe: 8544.601 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 10.7, season: "Autumn", fe: 1460.961 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 0.6, season: "Autumn", fe: 39206.45 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 0.6, season: "Autumn", fe: 12382.708 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 3.4, season: "Summer", fe: 2258.786 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 4.0, season: "Autumn", fe: 1821.368 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 8.3, season: "Autumn", fe: 578.786 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 2.7, season: "Autumn", fe: 6253.811 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 3.7, season: "Autumn", fe: 2468.428 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 3.5, season: "Autumn", fe: 1384.977 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 2.9, season: "Autumn", fe: 777.965 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 4.1, season: "Autumn", fe: 6504.967 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 5.6, season: "Autumn", fe: 3673.007 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 2.9, season: "Autumn", fe: 1868.197 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 3.5, season: "Autumn", fe: 1775.612 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 7.6, season: "Autumn", fe: 1485.772 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 6.0, season: "Autumn", fe: 6829.73 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 4.2, season: "Autumn", fe: 6839.681 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 5.3, season: "Autumn", fe: 6741.571 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 3.2, season: "Autumn", fe: 4511.434 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 5.2, season: "Autumn", fe: 3701.221 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 9.8, season: "Autumn", fe: 7236.376 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 6.4, season: "Autumn", fe: 11489.604 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 8.0, season: "Autumn", fe: 4641.728 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 3.8, season: "Autumn", fe: 16353.264 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 4.4, season: "Summer", fe: 12624.143 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 6.6, season: "Autumn", fe: 8652.525 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 4.1, season: "Summer", fe: 949.169 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 9.4, season: "Autumn", fe: 8364.749 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 1.4, season: "Autumn", fe: 42664.897 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 6.8, season: "Autumn", fe: 5362.242 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 7.3, season: "Summer", fe: 2748.708 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 4.4, season: "Summer", fe: 11633.205 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 4.6, season: "Autumn", fe: 13837.989 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 6.9, season: "Summer", fe: 8914.913 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 6.7, season: "Autumn", fe: 618.319 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 4.9, season: "Autumn", fe: 5074.508 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 6.7, season: "Autumn", fe: 7842.936 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 12.1, season: "Autumn", fe: 9099.113 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 7.8, season: "Autumn", fe: 13382.612 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 6.4, season: "Autumn", fe: 5813.208 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 7.1, season: "Autumn", fe: 1502.195 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 12.4, season: "Autumn", fe: 4706.733 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 9.9, season: "Summer", fe: 6682.93 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 18.1, season: "Autumn", fe: 5291.141 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 25.9, season: "Autumn", fe: 4766.182 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 4.9, season: "Autumn", fe: 4835.003 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 12.6, season: "Autumn", fe: 3033.331 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 6.8, season: "Autumn", fe: 1035.349 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 4.8, season: "Summer", fe: 4225.664 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 3.1, season: "Summer", fe: 9206.963 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 3.9, season: "Autumn", fe: 2819.714 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 5.1, season: "Summer", fe: 2196.896 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 9.5, season: "Autumn", fe: 3995.139 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 16.2, season: "Autumn", fe: 696.641 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 4.3, season: "Autumn", fe: 723.496 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 14.0, season: "Summer", fe: 858.757 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 12.0, season: "Autumn", fe: 4094.199 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 8.8, season: "Autumn", fe: 4249.023 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 8.5, season: "Autumn", fe: 9417.188 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 15.6, season: "Autumn", fe: 2873.825 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 13.0, season: "Summer", fe: 2305.23 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 15.6, season: "Autumn", fe: 13333.363 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 16.8, season: "Autumn", fe: 3132.443 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 20.2, season: "Summer", fe: 4179.303 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 17.0, season: "Summer", fe: 3989.38 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 10.9, season: "Autumn", fe: 1527.657 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 18.6, season: "Autumn", fe: 3233.263 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 29.4, season: "Autumn", fe: 3159.572 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 25.5, season: "Autumn", fe: 5678.98 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 23.6, season: "Summer", fe: 5499.455 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 32.9, season: "Autumn", fe: 4741.246 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 28.9, season: "Autumn", fe: 519.275 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 9.7, season: "Autumn", fe: 6183.461 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 31.3, season: "Summer", fe: 8808.297 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 24.8, season: "Summer", fe: 5151.882 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 19.3, season: "Autumn", fe: 826.257 },
  { taxon: "Cased Caddis", location: "Daisy Nook", dryWeight: 54.7, season: "Autumn", fe: 26764.649 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 21.0, season: "Summer", fe: 2996.853 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 29.4, season: "Autumn", fe: 2822.285 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 19.5, season: "Summer", fe: 4055.322 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 41.9, season: "Summer", fe: 4952.965 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 15.2, season: "Summer", fe: 14862.108 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 35.1, season: "Autumn", fe: 1999.099 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 47.8, season: "Summer", fe: 6165.769 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 22.9, season: "Autumn", fe: 1938.583 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 43.8, season: "Summer", fe: 5098.735 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 12.8, season: "Autumn", fe: 3116.449 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 65.3, season: "Summer", fe: 7481.492 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 37.3, season: "Autumn", fe: 2820.677 },
  { taxon: "Mayflies", location: "Daisy Nook", dryWeight: 58.7, season: "Autumn", fe: 3540.899 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 30.1, season: "Autumn", fe: 566.13 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 19.8, season: "Summer", fe: 11933.595 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 35.4, season: "Autumn", fe: 2385.122 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 29.3, season: "Autumn", fe: 1302.33 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 36.5, season: "Autumn", fe: 596.3 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 38.9, season: "Autumn", fe: 864.006 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 32.0, season: "Autumn", fe: 686.359 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 17.2, season: "Autumn", fe: 999.841 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 23.8, season: "Summer", fe: 15081.742 },
  { taxon: "Leeches", location: "Clayton Vale", dryWeight: 17.8, season: "Autumn", fe: 908.259 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 37.3, season: "Autumn", fe: 1720.243 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 42.0, season: "Summer", fe: 2404.64 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 53.7, season: "Autumn", fe: 2291.605 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 70.0, season: "Summer", fe: 4872.883 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 36.4, season: "Autumn", fe: 2379.63 },
  { taxon: "Cased Caddis", location: "Daisy Nook", dryWeight: 313.0, season: "Autumn", fe: 1648.443 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 44.4, season: "Autumn", fe: 1168.64 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 37.0, season: "Autumn", fe: 2382.531 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 56.5, season: "Autumn", fe: 2234.615 },
  { taxon: "Shrimps", location: "Clayton Vale", dryWeight: 41.5, season: "Autumn", fe: 1020.567 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 50.9, season: "Autumn", fe: 1587.53 },
  { taxon: "Worms", location: "Daisy Nook", dryWeight: 42.0, season: "Summer", fe: 13383.596 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 64.0, season: "Summer", fe: 2224.567 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 70.9, season: "Autumn", fe: 892.586 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 92.3, season: "Summer", fe: 1887.6 },
  { taxon: "Mayflies", location: "Clayton Vale", dryWeight: 113.9, season: "Summer", fe: 4812.988 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 103.3, season: "Autumn", fe: 2458.401 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 125.1, season: "Autumn", fe: 1908.964 },
  { taxon: "Leeches", location: "Daisy Nook", dryWeight: 221.4, season: "Autumn", fe: 1304.487 },
  { taxon: "Shrimps", location: "Daisy Nook", dryWeight: 187.5, season: "Autumn", fe: 2399.114 }
];

const chartColours = ["#2d6a4f", "#1d4e89", "#74c69d", "#f4a261", "#9b5de5", "#e76f51"];
let exploreChart = null;

document.addEventListener("DOMContentLoaded", () => {
  initialiseFeedbackButton();
  initialiseMap();
  initialiseCharts();
  initialiseFilters();
  writeTakeaways();
});

function initialiseFeedbackButton() {
  const feedbackButton = document.getElementById("feedbackButton");
  feedbackButton.href = FEEDBACK_FORM_URL;

  if (FEEDBACK_FORM_URL === "#") {
    feedbackButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your Google Form URL to FEEDBACK_FORM_URL in script.js.");
    });
  }
}

function initialiseMap() {
  const map = L.map("map", {
    scrollWheelZoom: false
  }).setView([53.515, -2.125], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const routePoints = riverSites.map((site) => [site.latitude, site.longitude]);

  L.polyline(routePoints, {
    color: "#1d4e89",
    weight: 4,
    opacity: 0.75
  }).addTo(map);

  riverSites.forEach((site) => {
    L.marker([site.latitude, site.longitude])
      .addTo(map)
      .bindPopup(`
        <strong>${site.name} (${site.label})</strong><br>
        ${site.role}<br>
        Altitude: ${site.altitude} m<br>
        Distance from source: ${site.distanceFromSource} km
      `);
  });
}

function initialiseCharts() {
  const composition = groupCount(riverData, "taxon");
  createPieChart("compositionChart", Object.keys(composition), Object.values(composition));

  const siteAverage = groupAverage(riverData, "location");
  createBarChart("siteChart", Object.keys(siteAverage), Object.values(siteAverage));

  const taxonAverage = groupAverage(riverData, "taxon");
  createBarChart("taxonChart", Object.keys(taxonAverage), Object.values(taxonAverage));

  const seasonAverage = groupAverage(riverData, "season");
  createBarChart("seasonChart", Object.keys(seasonAverage), Object.values(seasonAverage));

  createExploreChart(riverData);
}

function groupCount(data, key) {
  return data.reduce((summary, row) => {
    summary[row[key]] = (summary[row[key]] || 0) + 1;
    return summary;
  }, {});
}

function groupAverage(data, key) {
  const grouped = data.reduce((summary, row) => {
    if (!summary[row[key]]) {
      summary[row[key]] = { total: 0, count: 0 };
    }

    summary[row[key]].total += row.fe;
    summary[row[key]].count += 1;
    return summary;
  }, {});

  return Object.fromEntries(
    Object.entries(grouped).map(([label, value]) => [
      label,
      Number((value.total / value.count).toFixed(2))
    ])
  );
}

function createPieChart(canvasId, labels, values) {
  return new Chart(document.getElementById(canvasId), {
    type: "pie",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: chartColours
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: "bottom" }
      }
    }
  });
}

function createBarChart(canvasId, labels, values) {
  return new Chart(document.getElementById(canvasId), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: labels.map((_, index) => chartColours[index % chartColours.length]),
        borderRadius: 10
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Average Fe (µg/g dry weight)"
          }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `${formatNumber(context.raw)} µg/g dry weight`
          }
        }
      }
    }
  });
}

function createExploreChart(data) {
  exploreChart = new Chart(document.getElementById("exploreChart"), {
    type: "scatter",
    data: {
      datasets: [{
        label: "Fe concentration",
        data: data.map((row) => ({
          x: row.dryWeight,
          y: row.fe,
          taxon: row.taxon,
          location: row.location,
          season: row.season
        })),
        backgroundColor: "#2d6a4f"
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: {
          title: {
            display: true,
            text: "Dry weight (mg)"
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Fe (µg/g dry weight)"
          }
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (context) => {
              const point = context.raw;
              return [
                `${point.taxon} | ${point.location} | ${point.season}`,
                `Dry weight: ${point.x} mg`,
                `Fe: ${formatNumber(point.y)} µg/g dry weight`
              ];
            }
          }
        }
      }
    }
  });
}

function initialiseFilters() {
  populateFilter("taxonFilter", uniqueValues(riverData, "taxon"));
  populateFilter("locationFilter", uniqueValues(riverData, "location"));
  populateFilter("seasonFilter", uniqueValues(riverData, "season"));

  document.getElementById("taxonFilter").addEventListener("change", updateExploreChart);
  document.getElementById("locationFilter").addEventListener("change", updateExploreChart);
  document.getElementById("seasonFilter").addEventListener("change", updateExploreChart);
}

function uniqueValues(data, key) {
  return [...new Set(data.map((row) => row[key]))].sort();
}

function populateFilter(selectId, values) {
  const select = document.getElementById(selectId);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function updateExploreChart() {
  const selectedTaxon = document.getElementById("taxonFilter").value;
  const selectedLocation = document.getElementById("locationFilter").value;
  const selectedSeason = document.getElementById("seasonFilter").value;

  const filteredData = riverData.filter((row) => {
    return (
      (selectedTaxon === "All" || row.taxon === selectedTaxon) &&
      (selectedLocation === "All" || row.location === selectedLocation) &&
      (selectedSeason === "All" || row.season === selectedSeason)
    );
  });

  exploreChart.data.datasets[0].data = filteredData.map((row) => ({
    x: row.dryWeight,
    y: row.fe,
    taxon: row.taxon,
    location: row.location,
    season: row.season
  }));

  exploreChart.update();

  const average = filteredData.length > 0
    ? filteredData.reduce((sum, row) => sum + row.fe, 0) / filteredData.length
    : 0;

  document.getElementById("filterSummary").textContent =
    `${filteredData.length} samples shown. Average Fe: ${formatNumber(average)} µg/g dry weight. Filters: Taxon = ${selectedTaxon}, Location = ${selectedLocation}, Season = ${selectedSeason}.`;
}

function writeTakeaways() {
  const composition = groupCount(riverData, "taxon");
  const siteAverage = groupAverage(riverData, "location");
  const taxonAverage = groupAverage(riverData, "taxon");
  const seasonAverage = groupAverage(riverData, "season");

  const dominantTaxon = getHighestEntry(composition);
  const highestSite = getHighestEntry(siteAverage);
  const highestTaxon = getHighestEntry(taxonAverage);
  const highestSeason = getHighestEntry(seasonAverage);

  document.getElementById("compositionTakeaway").textContent =
    `Takeaway: ${dominantTaxon.label} appear most often in the dataset, so visitors should remember that the sample balance affects how patterns are interpreted.`;

  document.getElementById("siteTakeaway").textContent =
    `Takeaway: ${highestSite.label} has the higher average Fe concentration in this dataset, helping visitors compare local river sites quickly.`;

  document.getElementById("taxonTakeaway").textContent =
    `Takeaway: ${highestTaxon.label} have the highest average Fe concentration, showing why organism choice matters when communicating river health.`;

  document.getElementById("seasonTakeaway").textContent =
    `Takeaway: ${highestSeason.label} has the higher average Fe concentration, giving audiences a simple way to think about seasonal change.`;
}

function getHighestEntry(object) {
  return Object.entries(object).reduce(
    (highest, [label, value]) => value > highest.value ? { label, value } : highest,
    { label: "", value: -Infinity }
  );
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-GB", {
    maximumFractionDigits: 2
  });
}