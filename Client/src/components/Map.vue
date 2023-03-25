<template>
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
      >
        <!-- <l-icon ref="icon" icon-url="../../public/ours.svg"> </l-icon> -->
      </l-marker>
    </l-map>
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker, LIcon } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [50.45862544533577, 3.941501851087473],
      zoom: 24,
      markers: [
        {
          id: 1,
          coords: [50.45862544533557, 3.941501851087473],
        },
      ],
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
        coords: [50.457676899890096, 3.9372182785976038],
      });
      // this.$emit("marker");
    },
    cancel() {
      this.markers.splice(1, 1);
    },
  },

  created() {
    this.interval = setInterval(() => this.generateBear(), 10000);
  },
};
</script>
<style scoped>
.map {
  /* position: absolute; */
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.center {
  width: 400px;
  height: 700px;
}
</style>
