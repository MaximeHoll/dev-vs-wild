<template>
  <vue-basic-alert :duration="300" :close-in="3000" ref="alert" />
  <div class="center">
    <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :lat-lng="marker.coords"
        :icon="createIcon(marker.iconUrl)"
      >
      </l-marker>
    </l-map>
  </div>
  <ButtonBear :markers="markers"></ButtonBear>
</template>
<script>
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import ButtonBear from "../components/ButtonBear.vue";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import VueBasicAlert from "vue-basic-alert";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    ButtonBear,
    VueBasicAlert,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [50.63314124686462, 5.585845981216874],
      zoom: 24,
      markers: [
        {
          id: 1,
          coords: [50.63314124686462, 5.585845981216874],
          iconUrl: "../../public/walker.svg",
        },
      ],
      icon: icon({
        iconUrl: "../../public/ours.svg",
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      }),
    };
  },

  methods: {
    centerUpdate(center) {
      this.center = center;
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    generateBear() {
      this.markers.push({
        id: 2,
        coords: [50.63172938082872, 5.594029813612465],
        iconUrl: ".../../public/ours.svg",
      });
      this.$refs.alert.showAlert(
        "warning",
        "Repousse le",
        "Un Ours est apparu",
        { iconSize: 35, iconType: "solid", position: "top right" }
      );
    },
    createIcon(iconUrl) {
      return icon({
        iconUrl: iconUrl,
        iconSize: [32, 37],
        iconAnchor: [16, 37],
      });
    },
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15];
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15];
    },
  },

  created() {
    this.interval = setInterval(() => this.generateBear(), 15000);
  },
};
</script>
<style scoped>
.map {
  /* position: absolute; */
  width: 100%;
  /* height: 100%; */
  /* overflow: hidden; */
}
.center {
  width: 100%;
  height: 76vh;
}
</style>
