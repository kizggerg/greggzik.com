import React from "react";
import resume from "../../resume.yml";
import Profile from "../../assets/Profile.jpg";
import { Image, Text, View, Link } from "@react-pdf/renderer";

function Bio() {
  const {
    full_name,
    title,
    company,
    website,
    linked_in,
    github,
    headers,
  } = resume;

  console.log(Profile);

  return (
    <View>
      <Image src={`.${Profile}`} safePath={"./dist/public"} />
      <Text> {full_name} </Text>
      <Text>
        {title} @ {company}
      </Text>
      <Text>
        {headers.website}: <Link src={website}>{website}</Link>
      </Text>
      <Text>
        {headers.linked_in}: <Link src={linked_in}>{linked_in}</Link>
      </Text>
      <Text>
        {headers.github}: <Link src={github}>{github}</Link>
      </Text>
    </View>
  );
}

export default Bio;
