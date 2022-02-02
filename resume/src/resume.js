import React from "react";
import ReactPDF from "@react-pdf/renderer";
import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import resume from "../resume.yml";
import {
  Bio,
  WorkExperience,
  Education,
  Languages,
  ToolsAndFrameworks,
  Databases,
  AreasOfInterest,
} from "./components";

const styles = StyleSheet.create({});

const Resume = () => (
  <Document {...resume.meta}>
    <Page size="A4" style={styles.page} orientation="portrait">
      <View style={styles.section}>
        <Bio />
        <Languages />
        <ToolsAndFrameworks />
        <Databases />
        <AreasOfInterest />
        <WorkExperience />
        <Education />
      </View>
    </Page>
  </Document>
);

async function main() {
  try {
    await ReactPDF.render(<Resume />, `${__dirname}/resume.pdf`);
  } catch (error) {
    console.error(error);
  }
}

main();
