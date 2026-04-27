"use strict";

const FEEDBACK_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeVMKQfRcuB5XXQNw9NkhJELTmLF6GlMcQrUOFOZCtoZgi8hA/viewform?usp=publish-editor";

const riverSites = [
  {
    name: "Lees Park",
    label: "LP",
    latitude: 53.545265,
    longitude: -2.072145,
    altitude: 185.6,
    distanceFromSource: 2.5,
    role: "Upstream macroinvertebrate sampling site"
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
    name: "Clayton Vale",
    label: "CV",
    latitude: 53.491686,
    longitude: -2.17688,
    altitude: 52.5,
    distanceFromSource: 15,
    role: "Downstream macroinvertebrate sampling site"
  }
];

const rawData = `
Taxon,Location,Dry Weight (mg),Season,Fe
Mayflies,Daisy Nook,2.5,Autumn,2831.39634
Mayflies,Daisy Nook,1.9,Autumn,3818.876419
Mayflies,Clayton Vale,1.3,Autumn,2067.378687
Mayflies,Daisy Nook,1.9,Autumn,8409.21043
Mayflies,Daisy Nook,6.4,Autumn,699.9975737
Mayflies,Lees Park,8.6,Autumn,2829.273326
Mayflies,Daisy Nook,1.8,Autumn,7711.166777
Mayflies,Clayton Vale,2.4,Autumn,7700.98577
Shrimps,Clayton Vale,1.8,Autumn,2256.520098
Mayflies,Daisy Nook,2.2,Autumn,8122.71206
Leeches,Clayton Vale,0.6,Autumn,3639.791054
Mayflies,Daisy Nook,2.2,Autumn,13413.90709
Shrimps,Clayton Vale,2,Autumn,3884.866545
Worms,Daisy Nook,4,Autumn,12896.8779
Shrimps,Daisy Nook,1.7,Autumn,4320.517353
Worms,Daisy Nook,3.4,Summer,5854.852486
Shrimps,Daisy Nook,1.2,Autumn,7621.881672
Shrimps,Daisy Nook,4,Autumn,870.5010579
Mayflies,Lees Park,7.3,Autumn,1853.551279
Shrimps,Clayton Vale,1.7,Autumn,0.052941176
Mayflies,Daisy Nook,10.3,Summer,1608.113212
Mayflies,Clayton Vale,8.3,Autumn,2854.662878
Leeches,Lees Park,1.5,Autumn,2360.732297
Shrimps,Clayton Vale,0.7,Autumn,8544.60102
Shrimps,Daisy Nook,10.7,Autumn,1460.960578
Mayflies,Daisy Nook,0.6,Autumn,39206.4501
Shrimps,Lees Park,0.6,Autumn,12382.70767
Leeches,Lees Park,3.4,Summer,2258.785825
Leeches,Lees Park,4,Autumn,1821.368043
Leeches,Lees Park,8.3,Autumn,578.7862036
Shrimps,Lees Park,2.7,Autumn,6253.810931
Shrimps,Clayton Vale,3.7,Autumn,2468.427945
Shrimps,Daisy Nook,3.5,Autumn,1384.97734
Leeches,Daisy Nook,2.9,Autumn,777.9651551
Mayflies,Lees Park,4.1,Autumn,6504.966869
Mayflies,Daisy Nook,5.6,Autumn,3673.00729
Shrimps,Daisy Nook,2.9,Autumn,1868.196803
Mayflies,Clayton Vale,3.5,Autumn,1775.612213
Mayflies,Lees Park,7.6,Autumn,1485.772047
Mayflies,Clayton Vale,6,Autumn,6829.730055
Mayflies,Daisy Nook,4.2,Autumn,6839.680974
Mayflies,Clayton Vale,5.3,Autumn,6741.571224
Mayflies,Lees Park,3.2,Autumn,4511.434229
Mayflies,Clayton Vale,5.2,Autumn,3701.22067
Mayflies,Clayton Vale,9.8,Autumn,7236.376481
Mayflies,Daisy Nook,6.4,Autumn,11489.60401
Mayflies,Daisy Nook,8,Autumn,4641.727802
Mayflies,Lees Park,3.8,Autumn,16353.26426
Mayflies,Lees Park,4.4,Summer,12624.14261
Mayflies,Clayton Vale,6.6,Autumn,8652.524877
Mayflies,Lees Park,4.1,Summer,949.168885
Worms,Lees Park,9.4,Autumn,8364.748881
Shrimps,Daisy Nook,1.4,Autumn,42664.8967
Worms,Lees Park,6.8,Autumn,5362.242013
Mayflies,Clayton Vale,7.3,Summer,2748.707507
Mayflies,Lees Park,4.4,Summer,11633.20507
Mayflies,Clayton Vale,4.6,Autumn,13837.98913
Mayflies,Lees Park,6.9,Summer,8914.912722
Leeches,Daisy Nook,6.7,Autumn,618.3186389
Shrimps,Clayton Vale,4.9,Autumn,5074.507687
Mayflies,Daisy Nook,6.7,Autumn,7842.936191
Mayflies,Daisy Nook,12.1,Autumn,9099.112566
Mayflies,Lees Park,7.8,Autumn,13382.61245
Mayflies,Daisy Nook,6.4,Autumn,5813.208175
Leeches,Lees Park,7.1,Autumn,1502.194616
Leeches,Clayton Vale,12.4,Autumn,4706.732781
Mayflies,Daisy Nook,9.9,Summer,6682.930459
Mayflies,Lees Park,18.1,Autumn,5291.141379
Mayflies,Clayton Vale,25.9,Autumn,4766.182143
Leeches,Lees Park,4.9,Autumn,4835.002565
Shrimps,Clayton Vale,12.6,Autumn,3033.330984
Shrimps,Clayton Vale,6.8,Autumn,1035.349069
Shrimps,Daisy Nook,4.8,Summer,4225.663572
Mayflies,Daisy Nook,3.1,Summer,9206.962765
Shrimps,Daisy Nook,3.9,Autumn,2819.71425
Shrimps,Lees Park,5.1,Summer,2196.896
Shrimps,Clayton Vale,9.5,Autumn,3995.139
Leeches,Clayton Vale,16.2,Autumn,696.641
Leeches,Lees Park,4.3,Autumn,723.496
Shrimps,Daisy Nook,14,Summer,858.757
Shrimps,Daisy Nook,12,Autumn,4094.199
Shrimps,Lees Park,8.8,Autumn,4249.023
Mayflies,Lees Park,8.5,Autumn,9417.188
Shrimps,Clayton Vale,15.6,Autumn,2873.825
Shrimps,Lees Park,13,Summer,2305.23
Worms,Lees Park,15.6,Autumn,13333.363
Shrimps,Lees Park,16.8,Autumn,3132.443
Mayflies,Clayton Vale,20.2,Summer,4179.303
Mayflies,Clayton Vale,17,Summer,3989.38
Leeches,Clayton Vale,10.9,Autumn,1527.657
Shrimps,Lees Park,18.6,Autumn,3233.263
Mayflies,Lees Park,29.4,Autumn,3159.572
Mayflies,Daisy Nook,25.5,Autumn,5678.98
Mayflies,Clayton Vale,23.6,Summer,5499.455
Mayflies,Lees Park,32.9,Autumn,4741.246
Leeches,Lees Park,28.9,Autumn,519.275
Worms,Daisy Nook,9.7,Autumn,6183.461
Mayflies,Daisy Nook,31.3,Summer,8808.297
Mayflies,Clayton Vale,24.8,Summer,5151.882
Leeches,Lees Park,19.3,Autumn,826.257
Cased Caddis,Lees Park,54.7,Autumn,26764.649
Shrimps,Lees Park,21,Summer,2996.853
Shrimps,Lees Park,29.4,Autumn,2822.285
Shrimps,Clayton Vale,19.5,Summer,4055.322
Mayflies,Daisy Nook,41.9,Summer,4952.965
Worms,Lees Park,15.2,Autumn,14862.108
Shrimps,Lees Park,35.1,Autumn,1999.099
Mayflies,Daisy Nook,47.8,Summer,6165.769
Leeches,Clayton Vale,22.9,Autumn,1938.583
Mayflies,Clayton Vale,43.8,Summer,5098.735
Worms,Lees Park,12.8,Autumn,3116.449
Mayflies,Daisy Nook,65.3,Summer,7481.492
Shrimps,Lees Park,37.3,Autumn,2820.677
Mayflies,Lees Park,58.7,Autumn,3540.899
Leeches,Lees Park,30.1,Autumn,566.13
Worms,Lees Park,19.8,Summer,11933.595
Shrimps,Lees Park,35.4,Autumn,2385.122
Leeches,Clayton Vale,29.3,Autumn,1302.33
Shrimps,Clayton Vale,36.5,Autumn,596.3
Leeches,Lees Park,38.9,Autumn,864.006
Leeches,Clayton Vale,32,Autumn,686.359
Leeches,Lees Park,17.2,Autumn,999.841
Worms,Lees Park,23.8,Summer,15081.742
Leeches,Clayton Vale,17.8,Autumn,908.259
Shrimps,Lees Park,37.3,Autumn,1720.243
Shrimps,Lees Park,42,Summer,2404.64
Shrimps,Lees Park,53.7,Autumn,2291.605
Mayflies,Clayton Vale,70,Summer,4872.883
Shrimps,Lees Park,36.4,Autumn,2379.63
Cased Caddis,Lees Park,313,Autumn,1648.443
Leeches,Lees Park,44.4,Autumn,1168.64
Shrimps,Lees Park,37,Autumn,2382.531
Shrimps,Lees Park,56.5,Autumn,2234.615
Shrimps,Clayton Vale,41.5,Autumn,1020.567
Shrimps,Lees Park,50.9,Autumn,1587.53
Worms,Lees Park,42,Summer,13383.596
Shrimps,Lees Park,64,Summer,2224.567
Leeches,Lees Park,70.9,Autumn,892.586
Shrimps,Lees Park,92.3,Summer,1887.6
Mayflies,Clayton Vale,113.9,Summer,4812.988
Shrimps,Lees Park,103.3,Autumn,2458.401
Shrimps,Lees Park,125.1,Autumn,1908.964
Leeches,Lees Park,221.4,Autumn,1304.487
Shrimps,Lees Park,187.5,Autumn,2399.114
`;

const riverData = parseRiverData(rawData);
const chartColours = ["#2d6a4f", "#1d4e89", "#74c69d", "#f4a261", "#9b5de5", "#e76f51"];
let exploreChart = null;

document.addEventListener("DOMContentLoaded", () => {
  initialiseFeedbackButton();
  initialiseMap();
  initialiseCharts();
  initialiseFilters();
  writeTakeaways();
  logDatasetCheck();
});

function parseRiverData(csvText) {
  return csvText
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => {
      const [taxon, location, dryWeight, season, fe] = line.split(",").map((item) => item.trim());

      return {
        taxon,
        location,
        dryWeight: Number(dryWeight),
        season,
        fe: Number(fe)
      };
    })
    .filter((row) => {
      return (
        row.taxon &&
        row.location &&
        row.season &&
        Number.isFinite(row.dryWeight) &&
        Number.isFinite(row.fe)
      );
    });
}

function initialiseFeedbackButton() {
  const feedbackButton = document.getElementById("feedbackButton");

  if (!feedbackButton) return;

  feedbackButton.href = FEEDBACK_FORM_URL;
}

function initialiseMap() {
  const mapElement = document.getElementById("map");

  if (!mapElement || typeof L === "undefined") return;

  const map = L.map("map", {
    scrollWheelZoom: false
  }).setView([53.512, -2.125], 12);

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
    const label = row[key].trim();
    summary[label] = (summary[label] || 0) + 1;
    return summary;
  }, {});
}

function groupAverage(data, key) {
  const grouped = data.reduce((summary, row) => {
    const label = row[key].trim();

    if (!summary[label]) {
      summary[label] = { total: 0, count: 0 };
    }

    summary[label].total += row.fe;
    summary[label].count += 1;

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
  const canvas = document.getElementById(canvasId);

  if (!canvas || typeof Chart === "undefined") return null;

  return new Chart(canvas, {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: chartColours
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });
}

function createBarChart(canvasId, labels, values) {
  const canvas = document.getElementById(canvasId);

  if (!canvas || typeof Chart === "undefined") return null;

  return new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: labels.map((_, index) => chartColours[index % chartColours.length]),
          borderRadius: 10
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
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
        legend: {
          display: false
        },
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
  const canvas = document.getElementById("exploreChart");

  if (!canvas || typeof Chart === "undefined") return;

  exploreChart = new Chart(canvas, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Fe concentration",
          data: data.map((row) => ({
            x: row.dryWeight,
            y: row.fe,
            taxon: row.taxon,
            location: row.location,
            season: row.season
          })),
          backgroundColor: "#2d6a4f"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
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

  const taxonFilter = document.getElementById("taxonFilter");
  const locationFilter = document.getElementById("locationFilter");
  const seasonFilter = document.getElementById("seasonFilter");

  if (taxonFilter) taxonFilter.addEventListener("change", updateExploreChart);
  if (locationFilter) locationFilter.addEventListener("change", updateExploreChart);
  if (seasonFilter) seasonFilter.addEventListener("change", updateExploreChart);
}

function uniqueValues(data, key) {
  return [...new Set(data.map((row) => row[key].trim()))].sort();
}

function populateFilter(selectId, values) {
  const select = document.getElementById(selectId);

  if (!select) return;

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function updateExploreChart() {
  if (!exploreChart) return;

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

  const average =
    filteredData.length > 0
      ? filteredData.reduce((sum, row) => sum + row.fe, 0) / filteredData.length
      : 0;

  const filterSummary = document.getElementById("filterSummary");

  if (filterSummary) {
    filterSummary.textContent =
      `${filteredData.length} samples shown. Average Fe: ${formatNumber(average)} µg/g dry weight. ` +
      `Filters: Taxon = ${selectedTaxon}, Location = ${selectedLocation}, Season = ${selectedSeason}.`;
  }
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

  setText(
    "compositionTakeaway",
    `Takeaway: ${dominantTaxon.label} appear most often in the dataset, so the sample balance affects how patterns should be interpreted.`
  );

  setText(
    "siteTakeaway",
    `Takeaway: ${highestSite.label} has the highest average Fe concentration, helping visitors compare the three river sites quickly.`
  );

  setText(
    "taxonTakeaway",
    `Takeaway: ${highestTaxon.label} have the highest average Fe concentration, showing why organism choice matters when communicating river health.`
  );

  setText(
    "seasonTakeaway",
    `Takeaway: ${highestSeason.label} has the higher average Fe concentration, giving audiences a simple way to think about seasonal differences.`
  );
}

function setText(elementId, text) {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = text;
  }
}

function getHighestEntry(object) {
  return Object.entries(object).reduce(
    (highest, [label, value]) => (value > highest.value ? { label, value } : highest),
    { label: "", value: -Infinity }
  );
}

function formatNumber(value) {
  return Number(value).toLocaleString("en-GB", {
    maximumFractionDigits: 2
  });
}

function logDatasetCheck() {
  console.log("Dataset rows loaded:", riverData.length);
  console.log("Locations:", uniqueValues(riverData, "location"));
  console.log("Taxa:", uniqueValues(riverData, "taxon"));
}