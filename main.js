/* **** The fundamental basic-skeleton is generated by QGIS **** */
/* **** Leaflet **** */

// Overlay layers (TMS)
var lyr = L.tileLayer('./{z}/{x}/{y}.png', {tms: true, opacity: 1, attribution: '&copy; <a href="https://www.cottbus.de/verwaltung/gb_iv/stadtentwicklung/">Stadtentwicklung Cottbus</a>, 12/2021, <a href="https://stadtentwicklung.github.io/masterplan/"><b>DEUTSCH</b></a>, <a href="https://stadtentwicklung.github.io/masterplan-polski/"><b>POLSKI</b></a>, <a href="https://stadtentwicklung.github.io/masterplan-dolnoserbski/"><b>DOLNOSERBSKI</b></a>', minZoom: 10, maxZoom: 15});

// Map
var map = L.map('map', {
    center: [51.78179619043856, 14.430890490667228],
    //zoom: 15,
    minZoom: 10,
    maxZoom: 15,
    layers: lyr,
	loadingControl: true
});

// Title
var title = L.control();
title.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'ctl title');
    this.update();
    return this._div;
};

title.update = function(props) {
    this._div.innerHTML = "Master Plan Cottbuser Ostsee 3.0";
};
title.addTo(map);

// Fit to overlay bounds (SW and NE points with (lat, lon))
map.fitBounds([[51.72837123461897, 14.552784241190125], [51.83522114625816, 14.30899674014433]]);
		
// Geolocating		
function onLocationFound(e) {
    var location = e.latlng
    L.marker(location).addTo(map).bindPopup("You are here.").openPopup();
};

function onLocationError(e) {
	alert(e.message);
};

function getLocationLeaflet() {
	map.on('locationfound', onLocationFound);
	map.on('locationerror', onLocationError);
	map.locate({setView: true, maxZoom: 15});
};
		
// Custom project-marker
var redIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

//1
L.marker([51.77727, 14.39582], {icon: redIcon}).addTo(map).bindPopup("<p><strong>1. Cottbus Marina | P&sacute;istawowy kwart&ecaron;r Ch&oacute;&sacute;ebuz</strong></p><p>Cottbus / Ch&oacute;sebuz will become a lakeside city with its newly created Marina. At the end of the Seeachse (lake corridor), between the shore of the lake and the road B168, a new, innovative and multifaceted urban quarter with a promenade and a marina with approx. 200 moorings will be created. There will be a water sports area, a sports and health centre, apartments, shops, restaurants as well as a hotel and event complex. Additionally, there are plans for an innovative information centre that will showcase the lively relationship be-tween the cultural history, the natural environment and the coal mining in this region &ndash; the &bdquo;Forum Lausitz/Carboneum&ldquo;. The Cottbus Marina is to be the first urban district in Cottbus/Ch&oacute;sebuz to meet the requirements of carbon-neutral urban development. This includes the planning process, the choice of materials and construction as well as an innovative mobility concept and the carbon-neutral energy supply of the district. The Cottbus Marina is to set nationwide standards for sustainable and climate-friendly urban development.</p>");
//2
L.marker([51.77004, 14.37917], {icon: redIcon}).addTo(map).bindPopup("<p><strong>2. Seevorstadt suburb | Jazorowe p&sacute;edm&ecaron;sto</strong></p><p>The urban connection between the city centre and the Cottbuser Ostsee is one of the most important projects of the upcoming decades and sets the turning point into a carbon-neutral and climate-resilient development of the city of Cottbus/Ch&oacute;sebuz. The backbone of this connection forms the former Cottbus-Guben rail link, which became obsolete in 2.000 due to mining activities. Urban green space for pedestrians, cyclists and public transport are to be created here. The urban orientation towards the lake is flanked by the development of the suburb Seevorstadt along this lake corridor. It is going to be a modern, urban and sustainable space with generous green spaces. The plans include new residential and attractive commercial properties, an innovative campus as a think tank for future energy supply as well as a centre for education and government offices with ample working space. The future urban development of eastern Cottbus is characterized by innovative functional and design qualities in the sense of a profound urban redevelopment process as well as modern local public transport.</p>");
//3
L.marker([51.78746, 14.38042], {icon: redIcon}).addTo(map).bindPopup("<p><strong>3. Merzdorf | &Zcaron;ylowk</strong></p><p>Northwest to the marina, a new residential properties area, both close to the city and the lake, is being built to complement the existing settlement of Merzdorf. It will feature apartments in a modern architectural design and aim for a carbon-neutral urban development. Between the new residential properties and the marina the Merzdorf Beach is located, which will be easily reached by bike and foot by beach goers from Cottbus.</p>");
//4
L.marker([51.7975, 14.38316], {icon: redIcon}).addTo(map).bindPopup("<p><strong>4. Lakoma &ndash; Willmersdorf | &Lstrok;akoma &ndash; Rogozno</strong></p><p>The area of the former village of Lakoma will become the lake&rsquo;s central connection point for cyclists passing between the lake pathway and (trans)regional paths. A floating island with a restaurant and holiday apartments is to be built off the western shore of the Cottbuser Ostsee. A pathway at the unspoilt section of the lakeshore invites to take walks right next to the lake. North of Lakoma, the Willmersdorf Beach is situated, which is perfect for bathers from the local area but also for cyclists along the lake pathway.</p>");
//5
L.marker([51.80482, 14.42282], {icon: redIcon}).addTo(map).bindPopup("<p><strong>5. Teichland Marina | P&sacute;istaw Gatojce</strong></p><p>A marina is being built on the southern edge of Neuendorf, which belongs to the community of Teichland. The future harbour with a water surface of approx. 16.000 squaremeters accommodates around 100 boats. There will be an urban district with a lake promenade that offers a view of the marina and the Cottbuser Ostsee. The promenade leads to the Seeachse (lake corridor) in the east and continues to the pier for lake liners and to the Teichland theme park. Areas for maritime themed businesses, restaurants and hospitality properties will be built alongside the promenade. Furthermore, spaces for port operations, workshops, boat storage rooms as well as holiday homes are planned around the harbour. All uses are aimed to create a year-round activity in the marina district.</p>");
//6
L.marker([51.80745, 14.44994], {icon: redIcon}).addTo(map).bindPopup("<p><strong>6. B&auml;renbr&uuml;cker Hights | Barbucka wu&scaron;yna<br /></strong></p><p>The B&auml;renbr&uuml;ck Heights is an artificial elevation with approx. 30 m above the natural surroundings. Together the heights, the Teichland theme park and the central viewing tower are the heart of the touristic attractions on the lakes northern shore. The theme park encompasses a summer toboggan run, a Zip Line course, climbing rocks, a maze, the &ldquo;Slavic Grove of Gods&rdquo; and a &ldquo;Path of the little Gods&rdquo;. The viewing tower offers a wide view of the future lake area and beyond.</p>");
//7
L.marker([51.79691, 14.44921], {icon: redIcon}).addTo(map).bindPopup("<p><strong>7. B&auml;renbr&uuml;cker Bay | Barbucka wu&scaron;yna<br /></strong></p><p>The B&auml;renbr&uuml;ck Bay is the perfect area for more noise-intensive events with music, theatre or even large-scale private functions. It is also the surf spot on the lake. The water sports area for kite surfers and the south-facing beach in the bay provide the optimal conditions for surfers and beach-goers. Seasonal gastronomy, a surf school and rental service as well as a campground, a mobile home site and a large sports field are planned to accommodate all visitors looking for sustainable, active water sports tourism. All facilities are to be created with the aim of carbon-neutral constructions and a sustainable use of resources.</p>");
//8
L.marker([51.78252, 14.47835], {icon: redIcon}).addTo(map).bindPopup("<p><strong>8. Energy centre | Energijowy centrum<br /></strong></p><p>On the surface installations of the open-cast lignite mine &ldquo;J&auml;-nschwalde&rdquo; a business location for manufacturing with a focus on renewable energies and recycling economy is planned. The current industrial mining zone with its facilities offers good road access and is to be expanded into a technology and start-up centre for future-oriented energies (focus on renewable resources, alternative energy production). It will feature approx. 55 ha.</p>");
//9
L.marker([51.78239, 14.4593], {icon: redIcon}).addTo(map).bindPopup("<p><strong>9. Energy landscape | Energijowa krajina<br /></strong></p><p>The area around the eastern shoreline between the lake path-way and the Energy centre is designated to be a green energy landscape. The focus lies on the generation of renewable energies, in accordance with predominantly commercial forestry and ecological use of the post-mining landscape. Systems for generating energy from wind and solar power embody the change in energy generation. Visitors will find further details about the history of energy generation from information boards along the lake pathway.</p>");
//10
L.marker([51.75012, 14.48234], {icon: redIcon}).addTo(map).bindPopup("<p><strong>10. Lake Klinge | Klincanski jazor</strong></p><p>The Lake Klinge is given special importance by creating and maintaining valuable natural and arificial landscapes as well as developing a nature-oriented tourism. The lake&rsquo;s shape favours the creation of a professional rowing regatta course with approx. 2.500 to 3.000 m. A &ldquo;Lake Klinge Rowing Sport Centre&rdquo; could centralise water sports amenities in the future and could be used by a lots of sport clubs. Due to the projected completion of the flooding, the opening of the lake Klinge is expected well after the completion of the Cottbuser Ostsee.</p>");
//11
L.marker([51.74994, 14.44685], {icon: redIcon}).addTo(map).bindPopup("<p><strong>11. S&uuml;dspitze naturist beach | P&sacute;irodny p&oacute;dpo&lstrok;dnjowy p&sacute;ibrjog</strong></p><p>It's raised height makes this area the visual connecting point between Lake Klinge and the Cottbuser Ostsee. A natural beach is to be laid out here with a length of approx. 250 m for friends of naturism and bathers with a need for pure natural surroundings. Therefore intensive leisure and tourism attractions are intended to be offered there. The beach can be reached by foot and bike via the lake pathway.</p>");
//12
L.marker([51.75482, 14.41677], {icon: redIcon}).addTo(map).bindPopup("<p><strong>12. Schlichow South development area | Wuwija&nacute;ski rum &Scaron;lichow&ndash;p&oacute;dpo&lstrok;dnjo</strong></p><p>An artificial landscape south of Schlichow marks the beginning of the inland dune landscape along the southwest lakeshore. Here large-scale recreational and sport activities are imaginable. The spaces should be in keeping with the area&acute;s rural character with the aim of appealing to more peace-seeking or nature-loving tourists and residents.</p>");
//13
L.marker([51.76131, 14.41381], {icon: redIcon}).addTo(map).bindPopup("<p><strong>13. Schlichow Village | &Scaron;lichow<br /></strong></p><p>Schlichow is located lakeside the future Cottbuser Ostsee. It will receive additional land for residential development by consolidating and redensificating the existing settlement. With the design of the village green square a new focal point is being created to connect the settlement with the new boat dock on the lake. A multi-purpose building, a rest and service point for cyclists, an e-bike charging station and a hostel for cyclists are planned around the square. The noise protection embankment, which has become obsolete due to the end of operation of the opencast mining, is to be redesigned based on suitable concepts.</p>");
//14
L.marker([51.75772, 14.42844], {icon: redIcon}).addTo(map).bindPopup("<p><strong>14. Schlichow South | &Scaron;lichow P&oacute;dpo&lstrok;dnjowy<br /></strong></p><p>A small but premium sports and spa destination will be created in the excellent surroundings just south of Schlichow. A private beach and a boardwalk for hotel guests are also conceivable. The beach can be accessed by pedestrians and cyclists. There will be no sport boats or boating slipways here, as these are planned exclusively for the two lakeside marinas.</p>");
//15
L.marker([51.76935, 14.40325], {icon: redIcon}).addTo(map).bindPopup("<p><strong>15. Cottbuser Beach | Ch&oacute;&sacute;ebuski p&sacute;ibrjog<br /></strong></p><p>A beach covering approx. 18 ha will be created between the Cottbus Marina and Schlichow. It will be the main beach on the lake, appealing to visitors from across the region. In addition to the beach and sports facilities, sitting areas, food services, changing rooms, sanitary facilities and the rental of loungers, parasols and boats will offer a high quality of stay. The beach can be easily reached by pedestrians, cyclists and skaters from the lake pathway as well as by car and public transport via the national highway B168. A carbon-neutral construction and resource-saving operation is projected for all planned uses and facilities, just like in the marina district.</p>");
//16
L.marker([51.74297, 14.36965], {icon: redIcon}).addTo(map).bindPopup("<p><strong>16. Branitz Castle and Park | Grodowy park Roge&nacute;c<br /></strong></p><p>The area around Schlichow Heights should be landscaped with a conceptual connection to the Branitz park and cultural landscape. The historic chest nut tree avenue (Kastanienallee), which once served as a stately driveway to Branitz Castle and Park, will be the core if this connection. It&acute;s now reserved for pedestrians and cyclists. The landscaping design itself is supposed to be considered an attraction at the Cottbuser Ostsee. Branitz Park is the historical interpretation of a cultivated landscape, while Cottbuser Ostsee is its modern interpretation.</p>");
//17
L.marker([51.76085, 14.462], {icon: redIcon}).addTo(map).bindPopup("<p><strong>17. Lake pathway | Woko&lstrok;ny pu&sacute;<br /></strong></p><p>The 27 km long lake pathway will be constructed as a circular route around the Cottbuser Ostsee and will be primarily reserved for hikers, cyclists, roller-skaters and pedestrians. The lake pathway will be connected to the network of bike paths in the State of Brandenburg and throughout the region as &bdquo;Ostsee-Rundweg&ldquo;. It will link the recreational sites, beaches and hotels around the Cottbuser Ostsee to each other. The importance of this circular route should be made accessible with highly attractive landscape modelling, both in the furnishings (e.g. benches, information boards at rest stops, etc.) and in the surface design.</p>");
//18
L.marker([51.7752, 14.44389], {icon: redIcon}).addTo(map).bindPopup("<p><strong>18. Lieskow Bay | Li&scaron;kojski zalew<br /></strong></p><p>The east coast of the Cottbuser See with its numerous bays, peninsulas and offshore islands is reserved for the natural, protected development of flora and fauna. The formation of an island for birds with an observation deck is planned there.</p>");
//19
L.marker([51.74677, 14.45994], {icon: redIcon}).addTo(map).bindPopup("<p><strong>19. Lake bike path | Jazorowy k&oacute;lasa&racute;ski pu&sacute;<br /></strong></p><p>The rerouting of the F&uuml;rst P&uuml;ckler bike path into the area between the Cottbuser Ostsee and the Lake Klinge is intended to create a connection between both lakes, making the newly emerging lake landscape more accessible for an active, natural and carbon-neutral cycling and hiking tourism. For this purpose grade-separated and independent crossings of national highway B97 and of the former mine railway are planned.</p>");
//20
L.marker([51.78125, 14.42406], {icon: redIcon}).addTo(map).bindPopup("<p><strong>20. Lake mark | Jazorowy znamje<br /></strong></p><p>A floating landmark should be both an eye-catcher and image bearer as well as a visible sign of structural change in the region. It also marks the centre of the Cottbuser Ostsee. A student competition was held at the BTU Cottbus-Senftenberg to generate ideas. The city administration Cottbus/Ch&oacute;sebuz and the Cottbuser Ostsee management will include the best design ideas in the further planning process and check implementation options.</p>");
//21
L.marker([51.76595, 14.40668], {icon: redIcon}).addTo(map).bindPopup("<p><strong>21. Cottbuser Ostsee Sports Triangle | Sportowy t&sacute;iro&zcaron;k Ch&oacute;&sacute;ebuski p&oacute;dzajt&scaron;ny jazor</strong></p><p>Next to Dissenchen in the southern area of the Cottbuser Ostsee, new sports and leisure uses are to be established as part of the implementation of the structural change project &bdquo;BMX event and training centre in the sports and leisure park Cottbuser Ostsee&ldquo;. These facilities are intended to make the newly designed urban landscape next to the water more accessible. An outdoor park with non-water sports facilities and small buildings (restrooms, administration offices, caf&eacute;) as subordinate use is conceivable. The Sports Triangle made up of Cottbus Marina, BMX centre with sports and leisure park and outdoor sports park would provide a wide range of possibilities for professional as well as leisure sports activities.</p>");
//22
L.marker([51.75496, 14.39642], {icon: redIcon}).addTo(map).bindPopup("<p><strong>22. BUGA 2033 - vision | BUGA 2033 - wizija</strong></p><p>The first Federal Garden Exhibition (BUGA) on the territory of the former GDR took place four and a half years after the German Reunification in Cottbus/Ch&oacute;sebuz. Almost four decades later, Cottbus/Ch&oacute;sebuz as the centre of the former open-cast mining region, wants to host the exhibition again, showing visitors from Germany, Europe and beyond its sustainable development. In the history of BUGA exhebitions, there has never been a concept that tells the changeful history of city and region. Between the historic city centre, the Branitz Park and the Cottbuser Ostsee, a variety of experience spaces and hiking trails are intended to illustrate the cultural history in the context of nature, technology, economy, society, open-cast mining, energy production, landscape destruction and loss of natural basis for life as well as people&lsquo;s search for their own identity.</p>");
