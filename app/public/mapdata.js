/*custom*/
function HEXColorGen() {
  return "#" + Math.random().toString(16).slice(2, 8);
}
/**/

var simplemaps_canadamap_mapdata = {
  main_settings: {
    //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",

    //State defaults
    state_description: "Provinces",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 2,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "City",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 10,
    location_type: "circle",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 1,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

    //Zoom settings
    zoom: "yes",
    back_image: "no",
    arrow_color: "#3B729F",
    arrow_color_border: "#88A4BC",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 1,
    arrow_color: "#f00",
    arrow_color_border: "#f00",

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    AB: {
      name: "Alberta"
    },
    BC: {
      name: "British Columbia"
    },
    SK: {
      name: "Saskatchewan"
    },
    MB: {
      name: "Manitoba"
    },
    ON: {
      name: "Ontario"
    },
    QC: {
      name: "Quebec"
    },
    NB: {
      name: "New Brunswick"
    },
    PE: {
      name: "Prince Edwards Island"
    },
    NS: {
      name: "Nova Scotia"
    },
    NL: {
      name: "Newfoundland"
    },
    NU: {
      name: "Nunavut"
    },
    NT: {
      name: "Northwest Territories"
    },
    YT: {
      name: "Yukon"
    }
  },
  locations: {
    "0": {
      name: "WAYERTON",
      lat: 47.136013,
      lng: -65.834268,
      color: HEXColorGen()
    },
    "1": {
      name: "WAYWAYSEECAPPO",
      lat: 50.670891,
      lng: -100.902613,
      color: HEXColorGen()
    },
    "2": {
      name: "WEAGAMOW LAKE",
      lat: 52.950000,
      lng: -91.333333,
      color: HEXColorGen()
    },
    "3": {
      name: "WEAVER SIDING",
      lat: 46.617027,
      lng: -65.964206,
      color: HEXColorGen()
    },
    "4": {
      name: "WEAVER",
      lat: 46.936300,
      lng: -67.426145,
      color: HEXColorGen()
    },
    "5": {
      name: "WEBB",
      lat: 50.182559,
      lng: -108.202381,
      color: HEXColorGen()
    },
    "6": {
      name: "WEBBWOOD",
      lat: 46.269929,
      lng: -81.883761,
      color: HEXColorGen()
    },
    "7": {
      name: "WEBEQUIE",
      lat: 52.961543,
      lng: -87.298289,
      color: HEXColorGen()
    },
    "8": {
      name: "WEDGEPORT",
      lat: 43.735176,
      lng: -65.980349,
      color: HEXColorGen()
    },
    "9": {
      name: "WEEDON",
      lat: 45.700005,
      lng: -71.461359,
      color: HEXColorGen()
    },
    "10": {
      name: "WEEKES",
      lat: 52.570642,
      lng: -102.873843,
      color: HEXColorGen()
    },
    "11": {
      name: "WEIRDALE",
      lat: 53.448261,
      lng: -105.240123,
      color: HEXColorGen()
    },
    "12": {
      name: "WEKWETI",
      lat: 64.190371,
      lng: -114.184102,
      color: HEXColorGen()
    },
    "13": {
      name: "WELDON",
      lat: 45.971841,
      lng: -66.590170,
      color: HEXColorGen()
    },
    "14": {
      name: "WELDON",
      lat: 53.008155,
      lng: -105.143690,
      color: HEXColorGen()
    },
    "15": {
      name: "WELLAND",
      lat: 42.992158,
      lng: -79.248256,
      color: HEXColorGen()
    },
    "16": {
      name: "WELLANDPORT",
      lat: 43.004923,
      lng: -79.481912,
      color: HEXColorGen()
    },
    "17": {
      name: "WELLESLEY",
      lat: 43.532206,
      lng: -80.765780,
      color: HEXColorGen()
    },
    "18": {
      name: "WELLING",
      lat: 49.478777,
      lng: -112.785344,
      color: HEXColorGen()
    },
    "19": {
      name: "WELLINGTON STATION",
      lat: 46.453829,
      lng: -63.999530,
      color: HEXColorGen()
    },
    "20": {
      name: "WELLINGTON",
      lat: 44.865022,
      lng: -63.616475,
      color: HEXColorGen()
    },
    "21": {
      name: "WELLINGTON",
      lat: 43.780332,
      lng: -80.543845,
      color: HEXColorGen()
    },
    "22": {
      name: "WELLS",
      lat: 53.085974,
      lng: -121.624418,
      color: HEXColorGen()
    },
    "23": {
      name: "WELLWOOD",
      lat: 50.040578,
      lng: -99.333642,
      color: HEXColorGen()
    },
    "24": {
      name: "WELSFORD",
      lat: 45.456044,
      lng: -66.341622,
      color: HEXColorGen()
    },
    "25": {
      name: "WELSHPOOL",
      lat: 44.886787,
      lng: -66.949815,
      color: HEXColorGen()
    },
    "26": {
      name: "WELWYN",
      lat: 50.326767,
      lng: -101.520255,
      color: HEXColorGen()
    },
    "27": {
      name: "WEMBLEY",
      lat: 55.152666,
      lng: -119.147889,
      color: HEXColorGen()
    },
    "28": {
      name: "WEMINDJI",
      lat: 53.049214,
      lng: -78.713873,
      color: HEXColorGen()
    },
    "29": {
      name: "WEMOTACI",
      lat: 47.902586,
      lng: -73.786343,
      color: HEXColorGen()
    },
    "30": {
      name: "WENDAKE",
      lat: 46.865246,
      lng: -71.359042,
      color: HEXColorGen()
    },
    "31": {
      name: "WENDOVER",
      lat: 45.572749,
      lng: -75.127573,
      color: HEXColorGen()
    },
    "32": {
      name: "WENTWORTH",
      lat: 45.656452,
      lng: -63.549107,
      color: HEXColorGen()
    },
    "33": {
      name: "WENTWORTH",
      lat: 45.800000,
      lng: -74.366667,
      color: HEXColorGen()
    },
    "34": {
      name: "WENTWORTH-NORD",
      lat: 45.854657,
      lng: -74.445472,
      color: HEXColorGen()
    },
    "35": {
      name: "WENTZELLS LAKE",
      lat: 44.483530,
      lng: -64.627564,
      color: HEXColorGen()
    },
    "36": {
      name: "WESLEYVILLE",
      lat: 49.149432,
      lng: -53.551344,
      color: HEXColorGen()
    },
    "37": {
      name: "WEST ARICHAT",
      lat: 45.518365,
      lng: -61.081642,
      color: HEXColorGen()
    },
    "38": {
      name: "WEST BAPTISTE",
      lat: 54.748320,
      lng: -113.564103,
      color: HEXColorGen()
    },
    "39": {
      name: "WEST BAY CENTRE",
      lat: 48.603244,
      lng: -58.957680,
      color: HEXColorGen()
    },
    "40": {
      name: "WEST BAY ROAD",
      lat: 45.724454,
      lng: -61.265204,
      color: HEXColorGen()
    },
    "41": {
      name: "WEST BAY",
      lat: 45.702635,
      lng: -61.161094,
      color: HEXColorGen()
    },
    "42": {
      name: "WEST BEND",
      lat: 51.490316,
      lng: -103.682123,
      color: HEXColorGen()
    },
    "43": {
      name: "WEST BRANCH",
      lat: 46.544131,
      lng: -64.950267,
      color: HEXColorGen()
    },
    "44": {
      name: "WEST BROME",
      lat: 45.234639,
      lng: -72.610533,
      color: HEXColorGen()
    },
    "45": {
      name: "WEST CLIFFORD",
      lat: 44.416667,
      lng: -64.733333,
      color: HEXColorGen()
    },
    "46": {
      name: "WEST DOVER",
      lat: 44.491658,
      lng: -63.875221,
      color: HEXColorGen()
    },
    "47": {
      name: "WEST FLORENCEVILLE",
      lat: 46.442793,
      lng: -67.613276,
      color: HEXColorGen()
    },
    "48": {
      name: "WEST GUILFORD",
      lat: 45.116667,
      lng: -78.600000,
      color: HEXColorGen()
    },
    "49": {
      name: "WEST INDIAN ROAD",
      lat: 45.116667,
      lng: -63.583333,
      color: HEXColorGen()
    },
    "50": {
      name: "WEST KELOWNA",
      lat: 49.863612,
      lng: -119.564458,
      color: HEXColorGen()
    },
    "51": {
      name: "WEST LORNE",
      lat: 42.603779,
      lng: -81.606653,
      color: HEXColorGen()
    },
    "52": {
      name: "WEST MONTROSE",
      lat: 43.586796,
      lng: -80.482375,
      color: HEXColorGen()
    },
    "53": {
      name: "WEST NORTHFIELD",
      lat: 44.441302,
      lng: -64.578571,
      color: HEXColorGen()
    },
    "54": {
      name: "WEST PENNANT",
      lat: 44.474723,
      lng: -63.651237,
      color: HEXColorGen()
    },
    "55": {
      name: "WEST PORTERS LAKE",
      lat: 44.687523,
      lng: -63.312650,
      color: HEXColorGen()
    },
    "56": {
      name: "WEST PUBNICO",
      lat: 43.672782,
      lng: -65.798129,
      color: HEXColorGen()
    },
    "57": {
      name: "WEST QUACO",
      lat: 45.339948,
      lng: -65.555752,
      color: HEXColorGen()
    },
    "58": {
      name: "WEST RIVER STATION",
      lat: 45.450000,
      lng: -62.916667,
      color: HEXColorGen()
    },
    "59": {
      name: "WEST RIVER",
      lat: 45.645912,
      lng: -64.844517,
      color: HEXColorGen()
    },
    "60": {
      name: "WEST ST ANDREWS",
      lat: 45.108433,
      lng: -63.308165,
      color: HEXColorGen()
    },
    "61": {
      name: "WEST ST MODESTE",
      lat: 51.592956,
      lng: -56.707614,
      color: HEXColorGen()
    },
    "62": {
      name: "WEST ST PAUL",
      lat: 50.027735,
      lng: -97.105364,
      color: HEXColorGen()
    },
    "63": {
      name: "WEST VANCOUVER",
      lat: 49.328625,
      lng: -123.160198,
      color: HEXColorGen()
    },
    "64": {
      name: "WESTBANK",
      lat: 49.831365,
      lng: -119.628193,
      color: HEXColorGen()
    },
    "65": {
      name: "WESTBOURNE",
      lat: 50.130164,
      lng: -98.582138,
      color: HEXColorGen()
    },
    "66": {
      name: "WESTBRIDGE",
      lat: 49.170418,
      lng: -118.975194,
      color: HEXColorGen()
    },
    "67": {
      name: "WESTBROOK",
      lat: 34.181194,
      lng: -118.448130,
      color: HEXColorGen()
    },
    "68": {
      name: "WESTBURY",
      lat: 45.472421,
      lng: -71.620757,
      color: HEXColorGen()
    },
    "69": {
      name: "WESTCHESTER STATION",
      lat: 45.618375,
      lng: -63.664804,
      color: HEXColorGen()
    },
    "70": {
      name: "WESTCOCK",
      lat: 45.866667,
      lng: -64.366667,
      color: HEXColorGen()
    },
    "71": {
      name: "WESTERN BAY",
      lat: 47.883333,
      lng: -53.083333,
      color: HEXColorGen()
    },
    "72": {
      name: "WESTERN SHORE",
      lat: 44.531403,
      lng: -64.314502,
      color: HEXColorGen()
    },
    "73": {
      name: "WESTEROSE",
      lat: 52.957970,
      lng: -113.999669,
      color: HEXColorGen()
    },
    "74": {
      name: "WESTHOLME",
      lat: 48.866749,
      lng: -123.700599,
      color: HEXColorGen()
    },
    "75": {
      name: "WESTLOCK",
      lat: 54.152156,
      lng: -113.851419,
      color: HEXColorGen()
    },
    "76": {
      name: "WESTMEATH",
      lat: 45.819764,
      lng: -76.890234,
      color: HEXColorGen()
    },
    "77": {
      name: "WESTMOUNT",
      lat: 46.143695,
      lng: -60.223634,
      color: HEXColorGen()
    },
    "78": {
      name: "WESTMOUNT",
      lat: 45.485719,
      lng: -73.595699,
      color: HEXColorGen()
    },
    "79": {
      name: "WESTON",
      lat: 46.283333,
      lng: -67.766667,
      color: HEXColorGen()
    },
    "80": {
      name: "WESTPHAL",
      lat: 44.686359,
      lng: -63.541416,
      color: HEXColorGen()
    },
    "81": {
      name: "WESTPORT",
      lat: 49.785143,
      lng: -56.636762,
      color: HEXColorGen()
    },
    "82": {
      name: "WESTPORT",
      lat: 44.261741,
      lng: -66.354737,
      color: HEXColorGen()
    },
    "83": {
      name: "WESTPORT",
      lat: 44.677676,
      lng: -76.399666,
      color: HEXColorGen()
    },
    "84": {
      name: "WESTVILLE",
      lat: 45.560601,
      lng: -62.711180,
      color: HEXColorGen()
    },
    "85": {
      name: "WESTWOLD",
      lat: 50.472300,
      lng: -119.773993,
      color: HEXColorGen()
    },
    "86": {
      name: "WESTWOOD",
      lat: 34.058653,
      lng: -118.443135,
      color: HEXColorGen()
    },
    "87": {
      name: "WETASKIWIN",
      lat: 52.969535,
      lng: -113.377245,
      color: HEXColorGen()
    },
    "88": {
      name: "WEYAKWIN",
      lat: 54.430212,
      lng: -105.801312,
      color: HEXColorGen()
    },
    "89": {
      name: "WEYBURN",
      lat: 49.663284,
      lng: -103.853291,
      color: HEXColorGen()
    },
    "90": {
      name: "WEYMOUTH",
      lat: 44.405769,
      lng: -65.994040,
      color: HEXColorGen()
    },
    "91": {
      name: "WHALE COVE",
      lat: 62.242523,
      lng: -92.601676,
      color: HEXColorGen()
    },
    "92": {
      name: "WHALETOWN",
      lat: 50.105079,
      lng: -125.043559,
      color: HEXColorGen()
    },
    "93": {
      name: "WHATI",
      lat: 63.143964,
      lng: -117.269342,
      color: HEXColorGen()
    },
    "94": {
      name: "WHEATLEY",
      lat: 33.921101,
      lng: -118.308657,
      color: HEXColorGen()
    },
    "95": {
      name: "WHEATON SETTLEMENT",
      lat: 46.018029,
      lng: -65.163706,
      color: HEXColorGen()
    },
    "96": {
      name: "WHELAN",
      lat: 54.035117,
      lng: -109.475706,
      color: HEXColorGen()
    },
    "97": {
      name: "WHISPERING HILLS",
      lat: 54.763471,
      lng: -113.549362,
      color: HEXColorGen()
    },
    "98": {
      name: "WHISTLER",
      lat: 50.116320,
      lng: -122.957356,
      color: HEXColorGen()
    },
    "99": {
      name: "WHITBOURNE",
      lat: 47.418354,
      lng: -53.532743,
      color: HEXColorGen()
    },
    "100": {
      name: "WHITBY",
      lat: 43.897545,
      lng: -78.942933,
      color: HEXColorGen()
    },
    "101": {
      name: "WHITE BEAR",
      lat: 50.875930,
      lng: -108.221190,
      color: HEXColorGen()
    },
    "102": {
      name: "WHITE CITY",
      lat: 50.440133,
      lng: -104.356697,
      color: HEXColorGen()
    },
    "103": {
      name: "WHITE FOX",
      lat: 53.452785,
      lng: -104.088748,
      color: HEXColorGen()
    },
    "104": {
      name: "WHITE GULL",
      lat: 54.784450,
      lng: -113.554715,
      color: HEXColorGen()
    },
    "105": {
      name: "WHITE HEAD ISLAND",
      lat: 44.630058,
      lng: -66.710311,
      color: HEXColorGen()
    },
    "106": {
      name: "WHITE HEAD",
      lat: 44.633333,
      lng: -66.716667,
      color: HEXColorGen()
    },
    "107": {
      name: "WHITE LAKE",
      lat: 45.302781,
      lng: -76.523785,
      color: HEXColorGen()
    },
    "108": {
      name: "WHITE RAPIDS",
      lat: 46.796678,
      lng: -65.782120,
      color: HEXColorGen()
    },
    "109": {
      name: "WHITE RIVER",
      lat: 48.593953,
      lng: -85.274809,
      color: HEXColorGen()
    },
    "110": {
      name: "WHITE ROCK",
      lat: 49.025309,
      lng: -122.802962,
      color: HEXColorGen()
    },
    "111": {
      name: "WHITECAP",
      lat: 51.867428,
      lng: -106.689596,
      color: HEXColorGen()
    },
    "112": {
      name: "WHITECOURT",
      lat: 54.142404,
      lng: -115.684981,
      color: HEXColorGen()
    },
    "113": {
      name: "WHITEDOG",
      lat: 50.133333,
      lng: -94.950000,
      color: HEXColorGen()
    },
    "114": {
      name: "WHITEFISH FALLS",
      lat: 46.112608,
      lng: -81.729835,
      color: HEXColorGen()
    },
    "115": {
      name: "WHITEFISH",
      lat: 46.377998,
      lng: -81.316462,
      color: HEXColorGen()
    },
    "116": {
      name: "WHITEHORSE",
      lat: 60.721187,
      lng: -135.056845,
      color: HEXColorGen()
    },
    "117": {
      name: "WHITELAW",
      lat: 56.107880,
      lng: -118.078671,
      color: HEXColorGen()
    },
    "118": {
      name: "WHITEMOUTH",
      lat: 49.948792,
      lng: -95.945791,
      color: HEXColorGen()
    },
    "119": {
      name: "WHITES BROOK",
      lat: 47.680827,
      lng: -67.269645,
      color: HEXColorGen()
    },
    "120": {
      name: "WHITES COVE",
      lat: 45.863196,
      lng: -66.059517,
      color: HEXColorGen()
    },
    "121": {
      name: "WHITES LAKE",
      lat: 44.533823,
      lng: -63.755497,
      color: HEXColorGen()
    },
    "122": {
      name: "WHITES MOUNTAIN",
      lat: 45.884170,
      lng: -65.433156,
      color: HEXColorGen()
    },
    "123": {
      name: "WHITESHELL",
      lat: 49.821381,
      lng: -95.481629,
      color: HEXColorGen()
    },
    "124": {
      name: "WHITEVALE",
      lat: 43.887356,
      lng: -79.162038,
      color: HEXColorGen()
    },
    "125": {
      name: "WHITEWAY",
      lat: 47.686461,
      lng: -53.484056,
      color: HEXColorGen()
    },
    "126": {
      name: "WHITEWOOD",
      lat: 50.329875,
      lng: -102.266628,
      color: HEXColorGen()
    },
    "127": {
      name: "WHITNEY",
      lat: 46.965405,
      lng: -65.726650,
      color: HEXColorGen()
    },
    "128": {
      name: "WHITNEY",
      lat: 36.578499,
      lng: -118.292260,
      color: HEXColorGen()
    },
    "129": {
      name: "WHYCOCOMAGH",
      lat: 45.975101,
      lng: -61.121581,
      color: HEXColorGen()
    },
    "130": {
      name: "WHYNOTTS SETTLEMENT",
      lat: 44.400000,
      lng: -64.466667,
      color: HEXColorGen()
    },
    "131": {
      name: "WIARTON",
      lat: 44.741973,
      lng: -81.140834,
      color: HEXColorGen()
    },
    "132": {
      name: "WICKHAM",
      lat: 45.644954,
      lng: -66.072480,
      color: HEXColorGen()
    },
    "133": {
      name: "WICKHAM",
      lat: 45.761071,
      lng: -72.497803,
      color: HEXColorGen()
    },
    "134": {
      name: "WICKLOW",
      lat: 46.483333,
      lng: -67.600000,
      color: HEXColorGen()
    },
    "135": {
      name: "WIDEWATER",
      lat: 55.362223,
      lng: -115.030671,
      color: HEXColorGen()
    },
    "136": {
      name: "WIGGINS MILL",
      lat: 46.050499,
      lng: -67.092742,
      color: HEXColorGen()
    },
    "137": {
      name: "WIKWEMIKONG",
      lat: 45.803647,
      lng: -81.721490,
      color: HEXColorGen()
    },
    "138": {
      name: "WILBERFORCE",
      lat: 45.036788,
      lng: -78.222647,
      color: HEXColorGen()
    },
    "139": {
      name: "WILCOX",
      lat: 50.097934,
      lng: -104.722536,
      color: HEXColorGen()
    },
    "140": {
      name: "WILD COVE WB",
      lat: 49.673997,
      lng: -54.791112,
      color: HEXColorGen()
    },
    "141": {
      name: "WILDWOOD",
      lat: 53.609965,
      lng: -115.235548,
      color: HEXColorGen()
    },
    "142": {
      name: "WILEVILLE",
      lat: 44.366667,
      lng: -64.550000,
      color: HEXColorGen()
    },
    "143": {
      name: "WILKESPORT",
      lat: 42.728013,
      lng: -82.364935,
      color: HEXColorGen()
    },
    "144": {
      name: "WILKIE",
      lat: 52.409363,
      lng: -108.703677,
      color: HEXColorGen()
    },
    "145": {
      name: "WILLIAMS HARBOUR",
      lat: 52.558516,
      lng: -55.766665,
      color: HEXColorGen()
    },
    "146": {
      name: "WILLIAMS LAKE",
      lat: 52.141674,
      lng: -122.141688,
      color: HEXColorGen()
    },
    "147": {
      name: "WILLIAMSBURG",
      lat: 46.335995,
      lng: -66.780523,
      color: HEXColorGen()
    },
    "148": {
      name: "WILLIAMSBURG",
      lat: 44.974927,
      lng: -75.243716,
      color: HEXColorGen()
    },
    "149": {
      name: "WILLIAMSFORD",
      lat: 44.377956,
      lng: -80.871458,
      color: HEXColorGen()
    },
    "150": {
      name: "WILLIAMSTOWN CARLETON CO",
      lat: 46.399730,
      lng: -67.715169,
      color: HEXColorGen()
    },
    "151": {
      name: "WILLIAMSTOWN",
      lat: 46.926039,
      lng: -65.708984,
      color: HEXColorGen()
    },
    "152": {
      name: "WILLIAMSTOWN",
      lat: 45.146672,
      lng: -74.579565,
      color: HEXColorGen()
    },
    "153": {
      name: "WILLIAMSWOOD",
      lat: 44.521709,
      lng: -63.641486,
      color: HEXColorGen()
    },
    "154": {
      name: "WILLINGDON",
      lat: 53.828723,
      lng: -112.117985,
      color: HEXColorGen()
    },
    "155": {
      name: "WILLOW BEACH",
      lat: 44.311097,
      lng: -79.421905,
      color: HEXColorGen()
    },
    "156": {
      name: "WILLOW BUNCH",
      lat: 49.391729,
      lng: -105.637532,
      color: HEXColorGen()
    },
    "157": {
      name: "WILLOW GROVE",
      lat: 45.336807,
      lng: -65.813897,
      color: HEXColorGen()
    },
    "158": {
      name: "WILLOW RIVER",
      lat: 54.075643,
      lng: -122.474036,
      color: HEXColorGen()
    },
    "159": {
      name: "WILLOWBROOK",
      lat: 51.205107,
      lng: -102.799722,
      color: HEXColorGen()
    },
    "160": {
      name: "WILMOT STATION",
      lat: 44.956411,
      lng: -65.021310,
      color: HEXColorGen()
    },
    "161": {
      name: "WILMOT",
      lat: 46.363887,
      lng: -67.715729,
      color: HEXColorGen()
    },
    "162": {
      name: "WILMOT",
      lat: 43.400058,
      lng: -80.649889,
      color: HEXColorGen()
    },
    "163": {
      name: "WILNO",
      lat: 45.512488,
      lng: -77.559562,
      color: HEXColorGen()
    },
    "164": {
      name: "WILSONS BEACH",
      lat: 44.932912,
      lng: -66.939586,
      color: HEXColorGen()
    },
    "165": {
      name: "WILSONVILLE",
      lat: 42.995863,
      lng: -80.317944,
      color: HEXColorGen()
    },
    "166": {
      name: "WILTONDALE",
      lat: 49.395067,
      lng: -57.607907,
      color: HEXColorGen()
    },
    "167": {
      name: "WIMBORNE",
      lat: 51.865061,
      lng: -113.594208,
      color: HEXColorGen()
    },
    "168": {
      name: "WINCHESTER SPRINGS",
      lat: 45.033372,
      lng: -75.294227,
      color: HEXColorGen()
    },
    "169": {
      name: "WINCHESTER",
      lat: 33.706966,
      lng: -117.084473,
      color: HEXColorGen()
    },
    "170": {
      name: "WINDERMERE",
      lat: 50.462525,
      lng: -115.988646,
      color: HEXColorGen()
    },
    "171": {
      name: "WINDERMERE",
      lat: 45.166667,
      lng: -79.550000,
      color: HEXColorGen()
    },
    "172": {
      name: "WINDHAM CENTRE",
      lat: 42.915791,
      lng: -80.417688,
      color: HEXColorGen()
    },
    "173": {
      name: "WINDSOR JUNCTION",
      lat: 44.789378,
      lng: -63.642285,
      color: HEXColorGen()
    },
    "174": {
      name: "WINDSOR",
      lat: 46.396674,
      lng: -67.409283,
      color: HEXColorGen()
    },
    "175": {
      name: "WINDSOR",
      lat: 44.990286,
      lng: -64.131036,
      color: HEXColorGen()
    },
    "176": {
      name: "WINDSOR",
      lat: 42.314937,
      lng: -83.036363,
      color: HEXColorGen()
    },
    "177": {
      name: "WINDSOR",
      lat: 45.569907,
      lng: -72.006782,
      color: HEXColorGen()
    },
    "178": {
      name: "WINDTHORST",
      lat: 50.107018,
      lng: -102.837084,
      color: HEXColorGen()
    },
    "179": {
      name: "WINFIELD",
      lat: 52.963515,
      lng: -114.412612,
      color: HEXColorGen()
    },
    "180": {
      name: "WINFIELD",
      lat: 50.022124,
      lng: -119.406251,
      color: HEXColorGen()
    },
    "181": {
      name: "WINGHAM",
      lat: 43.887948,
      lng: -81.311660,
      color: HEXColorGen()
    },
    "182": {
      name: "WINGS POINT",
      lat: 49.330060,
      lng: -54.482097,
      color: HEXColorGen()
    },
    "183": {
      name: "WINKLER",
      lat: 49.180110,
      lng: -97.938947,
      color: HEXColorGen()
    },
    "184": {
      name: "WINLAW",
      lat: 49.610414,
      lng: -117.563463,
      color: HEXColorGen()
    },
    "185": {
      name: "WINNIPEG BEACH",
      lat: 50.506707,
      lng: -96.975396,
      color: HEXColorGen()
    },
    "186": {
      name: "WINNIPEG",
      lat: 49.895136,
      lng: -97.138374,
      color: HEXColorGen()
    },
    "187": {
      name: "WINNIPEGOSIS",
      lat: 51.649937,
      lng: -99.926558,
      color: HEXColorGen()
    },
    "188": {
      name: "WINSLOE",
      lat: 46.293863,
      lng: -63.177608,
      color: HEXColorGen()
    },
    "189": {
      name: "WINTER HARBOUR",
      lat: 50.524240,
      lng: -128.028259,
      color: HEXColorGen()
    },
    "190": {
      name: "WINTERLAND",
      lat: 47.149149,
      lng: -55.310096,
      color: HEXColorGen()
    },
    "191": {
      name: "WINTERTON",
      lat: 47.954249,
      lng: -53.330693,
      color: HEXColorGen()
    },
    "192": {
      name: "WIRRAL",
      lat: 45.513212,
      lng: -66.489740,
      color: HEXColorGen()
    },
    "193": {
      name: "WISETON",
      lat: 51.310117,
      lng: -107.651050,
      color: HEXColorGen()
    },
    "194": {
      name: "WISHART",
      lat: 51.548220,
      lng: -103.977154,
      color: HEXColorGen()
    },
    "195": {
      name: "WITLESS BAY",
      lat: 47.282668,
      lng: -52.832504,
      color: HEXColorGen()
    },
    "196": {
      name: "WITTENBURG",
      lat: 45.089098,
      lng: -63.231379,
      color: HEXColorGen()
    },
    "197": {
      name: "WOBURN",
      lat: 45.373246,
      lng: -70.864532,
      color: HEXColorGen()
    },
    "198": {
      name: "WOKING",
      lat: 55.592325,
      lng: -118.776114,
      color: HEXColorGen()
    },
    "199": {
      name: "WOLFE ISLAND",
      lat: 44.175866,
      lng: -76.398454,
      color: HEXColorGen()
    },
    "200": {
      name: "WOLFVILLE",
      lat: 45.091760,
      lng: -64.359835,
      color: HEXColorGen()
    },
    "201": {
      name: "WOLINAK",
      lat: 46.328133,
      lng: -72.423098,
      color: HEXColorGen()
    },
    "202": {
      name: "WOLLASTON LAKE",
      lat: 58.111111,
      lng: -103.155556,
      color: HEXColorGen()
    },
    "203": {
      name: "WOLSELEY",
      lat: 50.424040,
      lng: -103.276991,
      color: HEXColorGen()
    },
    "204": {
      name: "WONOWON",
      lat: 56.730259,
      lng: -121.808989,
      color: HEXColorGen()
    },
    "205": {
      name: "WOOD MOUNTAIN",
      lat: 49.370228,
      lng: -106.383620,
      color: HEXColorGen()
    },
    "206": {
      name: "WOOD POINT",
      lat: 45.837050,
      lng: -64.389007,
      color: HEXColorGen()
    },
    "207": {
      name: "WOODBRIDGE",
      lat: 43.776175,
      lng: -79.609243,
      color: HEXColorGen()
    },
    "208": {
      name: "WOODFORDS",
      lat: 47.404834,
      lng: -53.153021,
      color: HEXColorGen()
    },
    "209": {
      name: "WOODHAM",
      lat: 43.309126,
      lng: -81.328537,
      color: HEXColorGen()
    },
    "210": {
      name: "WOODLANDS",
      lat: 50.179955,
      lng: -97.636756,
      color: HEXColorGen()
    },
    "211": {
      name: "WOODLANDS",
      lat: 46.178812,
      lng: -66.766103,
      color: HEXColorGen()
    },
    "212": {
      name: "WOODLAWN",
      lat: 37.681441,
      lng: -122.464285,
      color: HEXColorGen()
    },
    "213": {
      name: "WOODMANS POINT",
      lat: 45.371350,
      lng: -66.232293,
      color: HEXColorGen()
    },
    "214": {
      name: "WOODMORE",
      lat: 49.133680,
      lng: -96.886289,
      color: HEXColorGen()
    },
    "215": {
      name: "WOODRIDGE",
      lat: 49.281603,
      lng: -96.148429,
      color: HEXColorGen()
    },
    "216": {
      name: "WOODROW",
      lat: 49.695269,
      lng: -106.723957,
      color: HEXColorGen()
    },
    "217": {
      name: "WOODSIDE",
      lat: 50.181303,
      lng: -98.777946,
      color: HEXColorGen()
    },
    "218": {
      name: "WOODSIDE",
      lat: 46.090960,
      lng: -64.117364,
      color: HEXColorGen()
    },
    "219": {
      name: "WOODSTOCK FIRST NATION",
      lat: 46.109289,
      lng: -67.577315,
      color: HEXColorGen()
    },
    "220": {
      name: "WOODSTOCK",
      lat: 46.150266,
      lng: -67.603395,
      color: HEXColorGen()
    },
    "221": {
      name: "WOODSTOCK",
      lat: 49.965716,
      lng: -55.882100,
      color: HEXColorGen()
    },
    "222": {
      name: "WOODSTOCK",
      lat: 43.131497,
      lng: -80.747165,
      color: HEXColorGen()
    },
    "223": {
      name: "WOODVIEW",
      lat: 43.315678,
      lng: -79.871267,
      color: HEXColorGen()
    },
    "224": {
      name: "WOODVILLE",
      lat: 36.093564,
      lng: -119.198998,
      color: HEXColorGen()
    },
    "225": {
      name: "WOOLER",
      lat: 44.157330,
      lng: -77.700578,
      color: HEXColorGen()
    },
    "226": {
      name: "WORSLEY",
      lat: 56.507923,
      lng: -119.134100,
      color: HEXColorGen()
    },
    "227": {
      name: "WORTHINGTON",
      lat: 33.809764,
      lng: -118.124340,
      color: HEXColorGen()
    },
    "228": {
      name: "WOSS",
      lat: 50.215414,
      lng: -126.589391,
      color: HEXColorGen()
    },
    "229": {
      name: "WOSTOK",
      lat: 53.842168,
      lng: -112.455519,
      color: HEXColorGen()
    },
    "230": {
      name: "WOTTON",
      lat: 45.737819,
      lng: -71.807095,
      color: HEXColorGen()
    },
    "231": {
      name: "WRENTHAM",
      lat: 49.523482,
      lng: -112.172190,
      color: HEXColorGen()
    },
    "232": {
      name: "WRIGLEY",
      lat: 63.221472,
      lng: -123.454781,
      color: HEXColorGen()
    },
    "233": {
      name: "WROXETER",
      lat: 43.864670,
      lng: -81.149197,
      color: HEXColorGen()
    },
    "234": {
      name: "WROXTON",
      lat: 51.225887,
      lng: -101.890795,
      color: HEXColorGen()
    },
    "235": {
      name: "WUHRS BEACH",
      lat: 46.020871,
      lng: -66.034750,
      color: HEXColorGen()
    },
    "236": {
      name: "WUNNUMIN LAKE",
      lat: 52.932377,
      lng: -89.297990,
      color: HEXColorGen()
    },
    "237": {
      name: "WYEBRIDGE",
      lat: 44.695276,
      lng: -79.884289,
      color: HEXColorGen()
    },
    "238": {
      name: "WYERS BROOK",
      lat: 47.897614,
      lng: -66.997390,
      color: HEXColorGen()
    },
    "239": {
      name: "WYEVALE",
      lat: 44.653723,
      lng: -79.926541,
      color: HEXColorGen()
    },
    "240": {
      name: "WYMARK",
      lat: 50.106108,
      lng: -107.733901,
      color: HEXColorGen()
    },
    "241": {
      name: "WYNNDEL",
      lat: 49.180733,
      lng: -116.555034,
      color: HEXColorGen()
    },
    "242": {
      name: "WYNYARD",
      lat: 51.765230,
      lng: -104.179200,
      color: HEXColorGen()
    },
    "243": {
      name: "WYOMING",
      lat: 42.948869,
      lng: -82.118777,
      color: HEXColorGen()
    },
    "244": {
      name: "WYSES CORNER",
      lat: 44.949813,
      lng: -63.305570,
      color: HEXColorGen()
    },
    "245": {
      name: "YAHK",
      lat: 49.086794,
      lng: -116.088400,
      color: HEXColorGen()
    },
    "246": {
      name: "YALE",
      lat: 49.561062,
      lng: -121.429172,
      color: HEXColorGen()
    },
    "247": {
      name: "YAMACHICHE",
      lat: 46.283830,
      lng: -72.830063,
      color: HEXColorGen()
    },
    "248": {
      name: "YAMASKA",
      lat: 46.004936,
      lng: -72.920385,
      color: HEXColorGen()
    },
    "249": {
      name: "YAMASKA-EST",
      lat: 46.005233,
      lng: -72.906134,
      color: HEXColorGen()
    },
    "250": {
      name: "YARBO",
      lat: 50.696411,
      lng: -101.933005,
      color: HEXColorGen()
    },
    "251": {
      name: "YARKER",
      lat: 44.371583,
      lng: -76.770275,
      color: HEXColorGen()
    },
    "252": {
      name: "YARMOUTH",
      lat: 43.837458,
      lng: -66.117382,
      color: HEXColorGen()
    },
    "253": {
      name: "YELLOW CREEK",
      lat: 52.749570,
      lng: -105.248689,
      color: HEXColorGen()
    },
    "254": {
      name: "YELLOW GRASS",
      lat: 49.805721,
      lng: -104.158545,
      color: HEXColorGen()
    },
    "255": {
      name: "YELLOW QUILL",
      lat: 50.458920,
      lng: -104.618218,
      color: HEXColorGen()
    },
    "256": {
      name: "YELLOWKNIFE",
      lat: 62.453972,
      lng: -114.371789,
      color: HEXColorGen()
    },
    "257": {
      name: "YMIR",
      lat: 49.284569,
      lng: -117.218357,
      color: HEXColorGen()
    },
    "258": {
      name: "YOHO",
      lat: 45.789585,
      lng: -66.864209,
      color: HEXColorGen()
    },
    "259": {
      name: "YORK HARBOUR",
      lat: 49.060776,
      lng: -58.379717,
      color: HEXColorGen()
    },
    "260": {
      name: "YORK LANDING",
      lat: 56.089130,
      lng: -96.101153,
      color: HEXColorGen()
    },
    "261": {
      name: "YORK",
      lat: 43.988461,
      lng: -79.470389,
      color: HEXColorGen()
    },
    "262": {
      name: "YORK",
      lat: 46.315980,
      lng: -63.097506,
      color: HEXColorGen()
    },
    "263": {
      name: "YORK.",
      lat: 43.988461,
      lng: -79.470389,
      color: HEXColorGen()
    },
    "264": {
      name: "YORKTON",
      lat: 51.217448,
      lng: -102.473933,
      color: HEXColorGen()
    },
    "265": {
      name: "YOUBOU",
      lat: 48.866702,
      lng: -124.200011,
      color: HEXColorGen()
    },
    "266": {
      name: "YOUNG",
      lat: 50.460767,
      lng: -104.550728,
      color: HEXColorGen()
    },
    "267": {
      name: "YOUNGS COVE",
      lat: 45.950733,
      lng: -65.938932,
      color: HEXColorGen()
    },
    "268": {
      name: "YOUNGS POINT",
      lat: 44.490345,
      lng: -78.236007,
      color: HEXColorGen()
    },
    "269": {
      name: "YOUNGSTOWN",
      lat: 51.528582,
      lng: -111.205454,
      color: HEXColorGen()
    },
    "270": {
      name: "ZAMA CITY",
      lat: 59.152347,
      lng: -118.692777,
      color: HEXColorGen()
    },
    "271": {
      name: "ZEALAND",
      lat: 46.053617,
      lng: -66.935879,
      color: HEXColorGen()
    },
    "272": {
      name: "ZEALANDIA",
      lat: 51.616117,
      lng: -107.745143,
      color: HEXColorGen()
    },
    "273": {
      name: "ZEBALLOS",
      lat: 49.981803,
      lng: -126.845404,
      color: HEXColorGen()
    },
    "274": {
      name: "ZEHNER",
      lat: 50.571791,
      lng: -104.457503,
      color: HEXColorGen()
    },
    "275": {
      name: "ZENON PARK",
      lat: 53.064428,
      lng: -103.758225,
      color: HEXColorGen()
    },
    "276": {
      name: "ZEPHYR",
      lat: 37.768085,
      lng: -122.407350,
      color: HEXColorGen()
    },
    "277": {
      name: "ZHODA",
      lat: 49.284108,
      lng: -96.510375,
      color: HEXColorGen()
    },
    "278": {
      name: "ZIONVILLE",
      lat: 46.202841,
      lng: -66.536576,
      color: HEXColorGen()
    },
    "279": {
      name: "ZURICH",
      lat: 37.182780,
      lng: -118.259170,
      color: HEXColorGen()
    }
  },
  labels: {
    PE: {
      x: 960,
      y: 814,
      parent_id: "PE",
      pill: "yes",
      width: 65,
      display: "all"
    },
    NS: {
      x: 960,
      y: 854,
      parent_id: "NS",
      pill: "yes",
      width: 65,
      display: "all"
    },
    AB: {
      x: 232,
      y: 657,
      parent_id: "AB"
    },
    BC: {
      x: 117,
      y: 635,
      parent_id: "BC"
    },
    YT: {
      x: 75,
      y: 440,
      parent_id: "YT"
    },
    NT: {
      x: 225,
      y: 471,
      parent_id: "NT"
    },
    NU: {
      x: 429,
      y: 478,
      parent_id: "NU"
    },
    SK: {
      x: 332,
      y: 670,
      parent_id: "SK"
    },
    MB: {
      x: 430,
      y: 675,
      parent_id: "MB"
    },
    NL: {
      x: 840,
      y: 643,
      parent_id: "NL"
    },
    NB: {
      x: 837,
      y: 798,
      parent_id: "NB"
    },
    ON: {
      x: 552,
      y: 747,
      parent_id: "ON"
    },
    QC: {
      x: 718,
      y: 704,
      parent_id: "QC"
    }
  },
  regions: {},
  data: {
    data: {
      AB: "0",
      BC: "2",
      SK: "4",
      MB: "9"
    }
  }
};