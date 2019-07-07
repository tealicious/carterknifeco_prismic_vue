<template>
  <section class="map off_background" style="padding:0;">
    <div grid="row wrap" ref="mapContainer">
      <div column="xs-12 s-12 m-8 l-9">
        <gmap-map ref="map" :center="center " :options="{styles: styles}" :zoom="15">
          <gmap-info-window
            :options="infoOptions "
            :position="infoWindowPos "
            :opened="infoWinOpen"
            @closeclick="infoWinOpen=false"
          >
            <div class="infoWindow">
              <div>
                <img class="carterknifecoLogo" :src="infoWindowLogo" />
              </div>
              <div>
                <a :href="web_url" target="_blank" class="_mbxs">
                  {{business_name}}
                  <div class="icon">
                    <font-awesome-icon icon="external-link-alt" />
                  </div>
                </a>
                <a :href="map_url" target="_blank">
                  <div v-html="infoContent" />
                  <div class="icon">
                    <font-awesome-icon icon="map-marker" />
                  </div>
                </a>
              </div>
            </div>
          </gmap-info-window>
          <gmap-marker
            :key="i "
            v-for="(m, i) in markers"
            :position="{lat: m.location.latitude, lng: m.location.longitude}"
            :clickable="true"
            :draggable="false"
            :icon="icon"
            @click="toggleInfoWindow(m,i)"
          ></gmap-marker>
        </gmap-map>
      </div>
      <div column="xs-12 s-12 m-4 l-3">
        <div class="location-boxes">
          <div :key="i" v-for="(m, i) in markers" class="card-wrap">
            <div class="map-card mb-3" @click="toggleInfoWindow(m,i)">
              <div class="card-header">
                <div class="_mrxs">
                  <font-awesome-icon icon="map-marker" />
                </div>
                {{m.business_name}}
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <a :href="m.map_url.url" target="_blank ">
                    <div class="_mrxs">
                      <font-awesome-icon icon="car" />
                    </div>
                    <div v-html="m.address_serialized" />
                  </a>
                </li>
                <li v-if="m.web_url" class="list-group-item">
                  <a :href="m.web_url.url" target="_blank">
                    <div class="_mrxs">
                      <font-awesome-icon icon="external-link-alt" />
                    </div>Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as VueGoogleMaps from "vue2-google-maps";
import Vue from "vue";
import mapStyles from "@/utils/mapStyles";
const mapMarkers = {};
var infoWindowIcon = require("@/assets/logoBlackFullSmall.png");
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB-hzCedQopupNEWRNzGCPufWStmEgH0Yo",
    v: "OPTIONAL VERSION NUMBER"
  }
});
export default {
  props: ["markers"],
  data() {
    return {
      icon: "//maps.google.com/mapfiles/ms/icons/pink.png",
      infoWindowLogo: infoWindowIcon,
      infoContent: "",
      infoSubContent: "",
      business_name: "",
      map_url: "",
      web_url: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      center: {
        lat: 44.055426,
        lng: -121.31712
      },
      styles: mapStyles
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      const position = {
        lat: marker.location.latitude,
        lng: marker.location.longitude
      };
      this.infoWindowPos = position;
      this.$refs.map.panTo(position);
      this.$refs.mapContainer.scrollIntoView();
      this.infoContent = `${marker.address_serialized}`;
      this.map_url = marker.map_url.url;
      this.web_url = marker.web_url.url;
      this.business_name = marker.business_name;
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
