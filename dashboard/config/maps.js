const beachmap = L.map("map", { scrollWheelZoom: true }).setView(
  [1.08292306304913, 36.1654119395052],
  7
);
beachmap.attributionControl.setPrefix('<strong>&copy; Copyright 2023 KMFRI</strong>');
const basemaps = {
  StreetView: L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }),
  Satelite: L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }),
  Hybrid: L.tileLayer("http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}", {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }),
};

L.control.layers(basemaps).addTo(beachmap);

basemaps.StreetView.addTo(beachmap);

const basicBeachIcon = L.icon({
  iconUrl:
    //"https://raw.githubusercontent.com/shacheeswadia/leaflet-map/main/beach-icon-colorful.svg",
    "https://cdn-icons-png.flaticon.com/128/8372/8372263.png",
  iconSize: [25, 25], // size of the icon
});

const marker1 = L.marker([-0.43649820973693876, 34.23089837035953], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kasgunga, Location: Mbita Lake Victoria")
  .addTo(beachmap);
const marker2 = L.marker([-0.418337, 34.20333], { icon: basicBeachIcon })
  .bindPopup("Beach: Nyagina, Location: Mbita Lake Victoria")
  .addTo(beachmap);
const marker3 = L.marker([-0.522191, 34.454314], { icon: basicBeachIcon })
  .bindPopup("Beach: Homabay Pier, Location: Homabay Lake Victoria")
  .addTo(beachmap);
const marker4 = L.marker([-0.352886, 34.714859], { icon: basicBeachIcon })
  .bindPopup("Beach: Rambira, Location: Homabay Lake Victoria")
  .addTo(beachmap);
const marker5 = L.marker([-0.14503618878180377, 34.73663301317232], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Dunga, Location: Kisumu Lake Victoria")
  .addTo(beachmap);
const marker6 = L.marker([-0.38439715041701467, 34.283225911986015], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Luanda Kotieno, Location: Siaya Lake Victoria")
  .addTo(beachmap);
const marker7 = L.marker([-0.1315243899449733, 33.987293771221374], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Mahanga, Location: Mageta Island Lake Victoria")
  .addTo(beachmap);
const marker8 = L.marker([-0.13338903358371415, 34.03401552280704], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Sika, Location: Mageta Island Lake Victoria")
  .addTo(beachmap);
const marker9 = L.marker([-0.07180231522993602, 34.06160089451463], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Usenge, Location: Usenge Lake Victoria")
  .addTo(beachmap);
const marker10 = L.marker([-0.10015360521703903, 34.0604709978279], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Uhanya, Location: Usenge Lake Victoria")
  .addTo(beachmap);
const marker11 = L.marker([0.17105447064776644, 33.99462051670958], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Busembe, Location: Port Victoria Lake Victoria")
  .addTo(beachmap);
const marker12 = L.marker([0.09742855581493455, 33.966784700252504], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Marenga Omena, Location: Port Victoria Lake Victoria")
  .addTo(beachmap);
const marker13 = L.marker([3.544751704396851, 35.84739907876636], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Daraja, Location: Kalokol-Turkana Lake Turkana")
  .addTo(beachmap);
const marker14 = L.marker([3.491182903141151, 36.028177545992776], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kenya Oil, Location: Kalokol-Turkana Lake Turkana")
  .addTo(beachmap);
const marker15 = L.marker([3.253209055847747, 36.021918256118425], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Lokitoeangaber, Location: Kataboi-Turkana Lake Turkana")
  .addTo(beachmap);
const marker16 = L.marker([3.7222648152029763, 35.83127784685118], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Nasechabuin, Location: Kataboi-Turkana Lake Turkana")
  .addTo(beachmap);
const marker17 = L.marker([0.6174994544730928, 36.027445644107964], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kampi Samaki-Tourist, Location: Baringo Lake Baringo")
  .addTo(beachmap);
const marker18 = L.marker([0.6055576167156487, 36.02074941170551], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kampi Samaki-Public, Location: Baringo Lake Baringo")
  .addTo(beachmap);
const marker19 = L.marker([0.5811817793239756, 36.03415550930608], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Ngenyi, Location: Baringo Lake Baringo")
  .addTo(beachmap);
const marker20 = L.marker([0.6264603391679355, 36.07864218970788], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Loruko, Location: Baringo Island Lake Baringo")
  .addTo(beachmap);
const marker21 = L.marker([0.6174276353526577, 36.065066818730415], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kiribari, Location: Baringo Island Lake Baringo")
  .addTo(beachmap);
const marker22 = L.marker([0.6084464411506573, 36.068603197420444], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kokwa, Location: Baringo Island Lake Baringo")
  .addTo(beachmap);
const marker23 = L.marker([-0.7625531337414051, 36.42549705185339], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Karagita, Location: Lake Naivasha")
  .addTo(beachmap);
const marker24 = L.marker([-0.8155650049271324, 36.32411331355382], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Kamere, Location: Lake Naivasha")
  .addTo(beachmap);
const marker25 = L.marker([-0.8144003179068285, 36.26289077196946], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: L.Oloiden, Location: Lake Naivasha")
  .addTo(beachmap);
const marker26 = L.marker([-0.8170929827732699, 36.262729839439515], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Tarambeta Kasarani, Location: Lake Naivasha")
  .addTo(beachmap);
const marker27 = L.marker([-0.8203672597225565, 36.28440042588824], {
  icon: basicBeachIcon,
})
  .bindPopup("Beach: Central Beach, Location: Lake Naivasha")
  .addTo(beachmap);

var filterValue;

function positionMap() {
  //var x = "Kasgunga";
  //Selects the selected county coordinate
  switch (filterValue) {
    case "Kasgunga":
      beachmap.flyTo([-0.43649820973693876, 34.23089837035953], 17);
      break;
    case "Nyagina":
      beachmap.flyTo([-0.418337, 34.20333], 17);
      break;
    case "Homabay Pier":
      beachmap.flyTo([-0.522191, 34.454314], 17);
      break;
    case "Rambira Beach":
      beachmap.flyTo([-0.352886, 34.714859], 17);
      break;
    case "Dunga Beach":
      beachmap.flyTo([-0.14503618878180377, 34.73663301317232], 17);
      break;
    case "Luanda Kotieno":
      beachmap.flyTo([-0.38439715041701467, 34.283225911986015], 17);
      break;
    case "Mahanga":
      beachmap.flyTo([-0.1315243899449733, 33.987293771221374], 17);
      break;
    case "Sika":
      beachmap.flyTo([-0.13338903358371415, 34.03401552280704], 17);
      break;
    case "Usenge":
      beachmap.flyTo([-0.07180231522993602, 34.06160089451463], 17);
      break;
    case "Uhanya":
      beachmap.flyTo([-0.10015360521703903, 34.0604709978279], 17);
      break;
    case "Busembe":
      beachmap.flyTo([0.17105447064776644, 33.99462051670958], 17);
      break;
    case "Marenga Omena":
      beachmap.flyTo([0.09742855581493455, 33.966784700252504], 17);
      break;
    case "Daraja":
      beachmap.flyTo([3.544751704396851, 35.84739907876636], 17);
      break;
    case "Kenya Oil":
      beachmap.flyTo([3.491182903141151, 36.028177545992776], 17);
      break;
    case "Lokitoeangaber":
      beachmap.flyTo([3.253209055847747, 36.021918256118425], 17);
      break;
    case "Nasechabuin":
      beachmap.flyTo([3.7222648152029763, 35.83127784685118], 17);
      break;
    case "Kampi Samaki-Tourist Beach":
      beachmap.flyTo([0.6174994544730928, 36.027445644107964], 17);
      break;
    case "Kampi Samaki- Public Beach":
      beachmap.flyTo([0.6055576167156487, 36.02074941170551], 17);
      break;
    case "Ng'Enyi":
      beachmap.flyTo([0.5811817793239756, 36.03415550930608], 17);
      break;
    case "Loruko Beach":
      beachmap.flyTo([0.6264603391679355, 36.07864218970788], 17);
      break;
    case "Kiribari":
      beachmap.flyTo([0.6174276353526577, 36.065066818730415], 17);
      break;
    case "Kokwa":
      beachmap.flyTo([0.6084464411506573, 36.068603197420444], 17);
      break;
    case "Karagita":
      beachmap.flyTo([-0.7625531337414051, 36.42549705185339], 17);
      break;
    case "Kamere":
      beachmap.flyTo([-0.8155650049271324, 36.32411331355382], 17);
      break;
    case "L.Oloiden":
      beachmap.flyTo([-0.8144003179068285, 36.26289077196946], 17);
      break;
    case "Tarambeta Kasarani":
      beachmap.flyTo([-0.8170929827732699, 36.262729839439515], 10);
      break;
    case "Central Beach":
      beachmap.flyTo([-0.8203672597225565, 36.28440042588824], 17);
      break;
    default:
      beachmap.flyTo([1.08292306304913, 36.1654119395052], 7);
  }
}
