import React from "react";
import { headers, education } from "../../resume.yml";
import { Text, View } from "@react-pdf/renderer";

function Education() {
  const { year, degree, major, institution, description } = education;

  return (
    <View>
      <Text> {headers.education} </Text>
      <View>
        <Text> {institution} </Text>
        <Text>
          {" "}
          {degree}: {major}{" "}
        </Text>
        <Text> {year} </Text>
      </View>
      <View>
        {description.map((bulletPoint, index) => (
          <Text key={`education-description-${index}`}> {bulletPoint} </Text>
        ))}
      </View>
    </View>
  );
}

export default Education;
