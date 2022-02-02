import React from "react";
import { technologies, headers } from "../../resume.yml";
import { Text, View } from "@react-pdf/renderer";

function TechnologySection({ sectionName, technologies }) {
  return (
    <View>
      <Text> {sectionName} </Text>
      <View>
        {technologies.map((technology, index) => (
          <Text key={`${sectionName}-${index}`}>{technology}</Text>
        ))}
      </View>
    </View>
  );
}

const Languages = () => (
  <TechnologySection
    sectionName={headers.languages}
    technologies={technologies.languages}
  />
);

const ToolsAndFrameworks = () => (
  <TechnologySection
    sectionName={headers.frameworks}
    technologies={technologies.tools_and_frameworks}
  />
);

const Databases = () => (
  <TechnologySection
    sectionName={headers.databases}
    technologies={technologies.databases}
  />
);

const AreasOfInterest = () => (
  <TechnologySection
    sectionName={headers.interests}
    technologies={technologies.areas_of_interest}
  />
);

export { Languages, ToolsAndFrameworks, Databases, AreasOfInterest };
