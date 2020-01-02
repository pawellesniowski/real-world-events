import Vue from "vue";
import VueRouter from "vue-router";
import EventListing from "../views/EventsList";
import EventDetails from "../views/EventDetails";
import CreateEventForm from "../views/EventCreate";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/list"
  },
  {
    path: "/list",
    name: "list",
    component: EventListing
  },
  {
    path: "/list/:id",
    name: "event-details",
    component: EventDetails,
    props: true
  },
  {
    path: "/create",
    name: "create",
    component: CreateEventForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
