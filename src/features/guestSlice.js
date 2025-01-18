import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from '../../firebaseConfig';
import { collection, onSnapshot, doc, updateDoc, query, where } from "firebase/firestore";

// Async thunk untuk mengambil data
export const fetchDatamaster = createAsyncThunk("guest/fetchDatamaster", async () => {
  return new Promise((resolve) => {
    const unsubscribe = onSnapshot(collection(db, "datamaster"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      resolve(data);
    });
  });
});

export const fetchRSVP = createAsyncThunk("guest/fetchRSVP", async () => {
  return new Promise((resolve) => {
    const unsubscribe = onSnapshot(collection(db, "rsvp"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      resolve(data);
    });
  });
});

export const fetchVIP = createAsyncThunk("guest/fetchVIP", async () => {
  return new Promise((resolve) => {
    const vipQuery = query(
      collection(db, "datamaster"),
      where("vip", "==", true),
      where("status", "==", true)
    );
    const unsubscribe = onSnapshot(vipQuery, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      resolve(data);
    });
  });
});

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    datamaster: [],
    rsvp: [],
    vip: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDatamaster.fulfilled, (state, action) => {
        state.datamaster = action.payload;
      })
      .addCase(fetchRSVP.fulfilled, (state, action) => {
        state.rsvp = action.payload;
      })
      .addCase(fetchVIP.fulfilled, (state, action) => {
        state.vip = action.payload;
      });
  },
});

export default guestSlice.reducer;
