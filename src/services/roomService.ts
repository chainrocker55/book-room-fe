import { Event } from "../models/Event";
// import axios, { AxiosResponse } from "axios";

const eventMap = new Map<string, Event[]>([
  [
    "Room 1",
    []
  ],
  [
    "Room 2",
    []
  ],
  [
    "Room 3",
    []
  ],
  [
    "Room 4",
    []
  ]
]);

const emptyArray = new Array<Event>();

export const getEvent = async (room: string): Promise<Event[]> => {
  // const todos: AxiosResponse<Meeting> = await axios.get(baseUrl + "/meeting")
  console.log(room);
  
  const data = eventMap.get(room);
  
  return Promise.resolve(data || emptyArray);
};

export const addEvent = async (event: Event): Promise<void> => {
  // const todos: AxiosResponse<Meeting> = await axios.get(baseUrl + "/meeting")
  console.log(event);
  
  const data = eventMap.get(event.roomId);
  if(!data){
    return
  }
  console.log(data);
  
  eventMap.set(event.roomId, [...data, event]);
  console.log(eventMap);
  return Promise.resolve();
};
