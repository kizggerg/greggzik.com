import React from "react";
import { work_experience, internships, headers } from "../../resume.yml";
import { Text, View } from "@react-pdf/renderer";

function WorkExperienceSection() {
  const experiences = { ...work_experience, ...internships };

  return (
    <View>
      <Text> {headers.work_experience} </Text>
      {Object.entries(experiences).map(([company, experience]) => (
        <WorkExperience key={company} {...experience} />
      ))}
    </View>
  );
}

function WorkExperience({ year, company, title, description }) {
  return (
    <>
      <View>
        <Text> {company} </Text>
        <Text> {title} </Text>
        <Text> {year} </Text>
      </View>
      <View>
        {description.map((bulletPoint, index) => (
          <Text key={`${company}-description-${index}`}> {bulletPoint} </Text>
        ))}
      </View>
    </>
  );
}

export default WorkExperienceSection;
