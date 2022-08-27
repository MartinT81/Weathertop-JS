"use strict";

const logger = require("../utils/logger");
const stationStore = require('../models/station-store');
const uuid = require('uuid');
const accounts = require ('./accounts.js');
const axios = require("axios");
const oneCallRequest = 'http://api.openweathermap.org/data/2.5/weather?q=Tromsø,NO&appid=4feeae810c0f67e9618f6870e00f6862'

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: 'Station Dashboard',
      stations: stationStore.getUserStations(loggedInUser.id),
    };
    logger.info('about to render', stationStore.getAllStations());
    response.render('dashboard', viewData);
  },
  
    deleteStation(request, response) {
    const stationId = request.params.id;
    logger.info("Deleting Station: " + stationStore.getStation(stationId).name);
    stationStore.removeStation(stationId);
    response.redirect("/dashboard");
  },
  
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      report: {},
      readings: [],
    };
    logger.debug('Creating a new Station', newStation);
    stationStore.addStation (newStation);
    response.redirect('/dashboard');
  },
  async addreport(request, response) {
    logger.info("rendering new report");
    let report = {};
    const lat = request.body.lat;
    const lng = request.body.lng;
    const requestUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=YOUR_API_KEY`
    const result = await axios.get(requestUrl);
    if (result.status == 200) {
      const reading = result.data.current;
      report.code = reading.weather[0].id;
      report.temperature = reading.temp;
      report.windSpeed = reading.wind_speed;
      report.pressure = reading.pressure;
      report.windDirection = reading.wind_deg;

      report.tempTrend = [];
      report.trendLabels = [];
      const trends = result.data.daily;
      for (let i=0; i<trends.length; i++) {
        report.tempTrend.push(trends[i].temp.day);
        const date = new Date(trends[i].dt * 1000);
        report.trendLabels.push(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}` );
      }
    }
    console.log(report);
    const viewData = {
      title: "Weather Report",
      reading: report
    };
    response.render("dashboard", viewData);
  }
};

module.exports = dashboard;