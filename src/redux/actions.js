import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../utils/api";





export const getData = createAsyncThunk(
    "covid/getData",
     async ({code }) => {
        //* api'ye gönderilecek parametreleri belirle
    const params = {iso: code};


        //* isoCode'a göre covid verilerini al
      const req1 = api.get("/reports", { params });

//* isoCode'a göre ülke verileri
const req2 = axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
);

//* Her iki API istediğini aynı anda paralele olarak promise.all ile gönderebilirsin
const  responses = await Promise.all([req1,req2]);

//* Region nesnesindeki değerleri bir üst nesneye taşı
const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
};

//* gereksiz değerleri kaldır
delete covid.cities;
delete covid.region;


      //*aksiyonun payload'ı olacak veriyi return et
      return{covid,country: responses[1].data[0]};  
      
});

