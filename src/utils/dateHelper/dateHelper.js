import React from "react";
import dayjs from "dayjs";

export const formatedDate = (value) => {
  if (value) {
    //const currentDate = new Date();
    const currentDate = dayjs();
    // console.log(currentDate);

    if (value === "today") {
      return "Today";
    }
    if (value === "tomorrow") {
      const tomorrow = currentDate.add(1, "day");
      return dayjs(tomorrow).format("ddd D MMM");
    }
    if (value === "day_after_tomorrow") {
      const day_after_tomorrow = currentDate.add(2, "day");
      return dayjs(day_after_tomorrow).format("ddd D MMM");
    }
    if (value === "day_after_that") {
      const day_after_that = currentDate.add(3, "day");
      return dayjs(day_after_that).format("ddd D MMM");
    }
    if (value === "fourth_day") {
      const fourth_day = currentDate.add(4, "day");
      return dayjs(fourth_day).format("ddd D MMM");
    }
    if (value === "fifth_day") {
      const fifth_day = currentDate.add(5, "day");
      return dayjs(fifth_day).format("ddd D MMM");
    }
    if (value === "sixth_day") {
      const sixth_day = currentDate.add(6, "day");
      return dayjs(sixth_day).format("ddd D MMM");
    }
    if (value === "sevent_day") {
      const sevent_day = currentDate.add(7, "day");
      return dayjs(sevent_day).format("ddd D MMM");
    }
  }
};

export const convertToDate = (value) => {
  if (value) {
    //const currentDate = new Date();
    const currentDate = dayjs();

    if (value === "today") {
      return currentDate;
    }
    if (value === "tomorrow") {
      const tomorrow = currentDate.add(1, "day");
      return dayjs(tomorrow);
    }
    if (value === "day_after_tomorrow") {
      const day_after_tomorrow = currentDate.add(2, "day");
      return dayjs(day_after_tomorrow);
    }
    if (value === "day_after_that") {
      const day_after_that = currentDate.add(3, "day");
      return dayjs(day_after_that);
    }
    if (value === "fourth_day") {
      const fourth_day = currentDate.add(4, "day");
      return dayjs(fourth_day);
    }
    if (value === "fifth_day") {
      const fifth_day = currentDate.add(5, "day");
      return dayjs(fifth_day);
    }
    if (value === "sixth_day") {
      const sixth_day = currentDate.add(6, "day");
      return dayjs(sixth_day);
    }
    if (value === "sevent_day") {
      const sevent_day = currentDate.add(7, "day");
      return dayjs(sevent_day);
    }
  }
};

export const sortedObject = (obj) => {
  const newObj = { forecast: {} };
  if (Object.keys(obj?.forecast).length > 0) {
    newObj.forecast["today"] = obj?.forecast?.today;
    newObj.forecast["tomorrow"] = obj?.forecast?.tomorrow;
    newObj.forecast["day_after_tomorrow"] = obj?.forecast?.day_after_tomorrow;
    newObj.forecast["day_after_that"] = obj?.forecast?.day_after_that;
    newObj.forecast["fourth_day"] = obj?.forecast?.fourth_day;
    newObj.forecast["fifth_day"] = obj?.forecast?.fifth_day;
    newObj.forecast["sixth_day"] = obj?.forecast?.sixth_day;
    newObj.forecast["sevent_day"] = obj?.forecast?.sevent_day;
    return newObj;
  }
};

export const addDegreeSymbol = (val) => {
  if (val) {
    const degreeSymbol = "\u00b0";
    return val+degreeSymbol;
  }
};
