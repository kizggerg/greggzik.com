# GregGzik.com

[GregGzik.com](http://www.greggzik.com) already exists, brought to you by Hover and Squarespace. I also have a [LinkedIn profile](https://www.linkedin.com/in/gregory-gzik/), and have to manage my resume on side.

## The problem

Whenever I need to make an update to my resume (for example, a simple change in job title) I have to change it in three places:

1. The resume itself
2. GregGzik.com
3. LinkedIn

This becomes tedius, and after a while my information becomes out of date (for example, while my LinkedIn is up to date with my current info, GregGzik.com still describes me as a 4th year computer science student, even though I graduated in May 2020).

## The solution

Instead of having three separate places of information, I will create a configuration file which contains all text content in the resume.

Then, I will map the schema of this configuration file to:

1. My personal website via React
2. LinkedIn via calls to its API
3. A resume via PDF generation, available on GregGzik.com

In this sense, the configuration file becomes the **Single Source of Truth** for my employment information.

## Additional benefits

While the single source of truth configuration file is the main goal, there are secondary goals from this project as well:

1. Build GregGzik.com in house using React/AWS instead of SquareSpace. The website will be simplier in design and amount of content to make this transition less painful.
2. Remove old blog content from my university days to focus on technical projects like these.

## Anti goals

This project is fairly large for one person, so it is important to list the features that are out of scope for this project:

1. Generalize the schema of the configuration file to be used by anyone. The configuration file is just meant for me and specific uses cases of this project.
2. Make the website mobile friendly. Recreating the website from scratch is enough work on its own. The need for a mobile friendly version can be addressed at a later date (if at all).
3. Moving off of Hover. For now, I will simply connect the GregGzik.com DNS to AWS. I can research moving the DNS over to an AWS option at a later date.
