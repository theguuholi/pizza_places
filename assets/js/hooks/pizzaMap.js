import L from "leaflet";

export default class PizzaMap {
    constructor(element, center, markerClickedCallBack) {
        const accessToken = "pk.eyJ1IjoiZ3V1aG9saSIsImEiOiJja2c5bWVuaGwwc281MnNwZ3RtMjVlaWFuIn0.c8uUwyoB-wHJnrPEotEGSw"
        this.map = L.map(element).setView(center, 13)

        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
                attribution: "",
                maxZoom: 18,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken: accessToken
            }
        ).addTo(this.map)

        this.markerClickedCallBack = markerClickedCallBack;
    }
}