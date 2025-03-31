import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";
import { create } from "../../../node_modules/@splidejs/splide/src/js/utils/dom/create/create";

// tr üzerindeki uçuşları alamamızı sağlayan
export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  // parametreleri belirle
  const params = {
    bl_lat: "34.457212",
    bl_lng: "24.609666",
    tr_lat: "43.610013",
    tr_lng: "46.791334",
    speed: "2.9999999",
  };

  // api istediği at
  const res = await api.get("/flights/list-in-boundary", { params });

  // api'dan gelen verideki dizi içerisindeki dizileri nesnelere çevirdik
  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  // aksiyonunun payloadını return et
  return formatted;
});

// id üzerinden uçuşun detaylarını almamızı sağlayan fonk
export const getDetail = createAsyncThunk(
  "detail/getDetails",
  async (flightId) => {
    // parametleri ayarla
    const params = {
      flight: flightId,
    };

    // apı istediği at

    const res = await api.get("/flights/detail", { params });

    // aksiyonun payloadını return et
    return res.data;
  }
);
