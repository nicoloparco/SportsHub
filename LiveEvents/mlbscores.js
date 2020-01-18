import { TScore } from "../interfaces/events";

const express = require("express");
const cheerio = require("cheerio");
const fetch = require("node-fetch");

const router = express.Router();

let scores: TScore[] = [];

const fetchData = async () => {
  console.log("Pulling data from https://www.espn.com/mlb/scoreboard");
  const website = await fetch("https://www.espn.com/mlb/scoreboard")
    .then(res => res.text())
    .then(body => body);

  const $ = cheerio.load(website);
  const scripts = await $("script").toArray();

  const scoreboardScript = scripts.find(
    script =>
      script.children[0] &&
      script.children[0].data.includes("window.espn.scoreboardData")
  ).children[0].data;