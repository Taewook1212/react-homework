import PocketBase from 'pocketbase';

export const pb = new PocketBase(`${import.meta.env.VITE_PB_API_2}`);

export const currentUser = pb.authStore.model;
