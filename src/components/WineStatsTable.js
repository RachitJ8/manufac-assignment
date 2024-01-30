import React from "react";
import { calcMean, calcMedian, calcMode, calculateGammaStats } from "../utils/statsUtils";
import "./WineStatsTable.css";

export default function WineStatsTable({ data = [], propertyName }) {
  // Get unique alcohol classes from the data
  const classes = [...new Set(data && data.map((item) => item.Alcohol))];

  // Determine whether to use Flavanoids or Gamma stats based on propertyName
  const propertyData =
    propertyName === "Flavanoids" ? data : calculateGammaStats(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {/* Render headers for each unique alcohol class */}
          {classes.map((className) => (
            <th key={className}>Class {className}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Row for Mean */}
        <tr>
          <td>{propertyName} Mean</td>
          {/* Render cells with mean values for each alcohol class */}
          {classes.map((className) => (
            <td key={className}>
              {calcMean({
                classVal: className,
                alcoholClass: data,
                property: propertyName,
              })}
            </td>
          ))}
        </tr>
        {/* Row for Median */}
        <tr>
          <td>{propertyName} Median</td>
          {/* Render cells with median values for each alcohol class */}
          {classes.map((className) => (
            <td key={className}>
              {calcMedian({
                classVal: className,
                alcoholClass: data,
                property: propertyName,
              })}
            </td>
          ))}
        </tr>
        {/* Row for Mode */}
        <tr>
          <td>{propertyName} Mode</td>
          {/* Render cells with mode values for each alcohol class */}
          {classes.map((className) => (
            <td key={className}>
              {calcMode({
                classVal: className,
                alcoholClass: data,
                property: propertyName,
              })}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
