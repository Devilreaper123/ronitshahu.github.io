import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'FastAPI',
    'Docker',
    'AWS (EC2, Lambda, S3)',
    'Azure',
    'Databricks(PySpark)',
    'LangChain',
    'Gemini LLM',
    'Dialogflow ES',
    'OpenCV',
    'Pandas',
    'Scikit-learn',
    'XGBoost',
    'MLflow',
    'CI/CD',
    'MLOps',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Ronit Shahu, and I’m passionate about building intelligent systems
              that merge data, design, and real-world impact. My journey in engineering began with
              hands-on problem solving from building early automation tools to developing applied AI
              models that power analytics and decision-making.
            </p>
            <p>
              Over the years, I’ve grown into an AI Engineer and Machine Learning Researcher,
              specializing in Machine Learning, NLP, and Generative AI. I’ve designed and deployed
              scalable ML systems on AWS, integrating frameworks like FastAPI, TensorFlow, and
              PyTorch to automate complex workflows across healthcare, finance, and research. I’m
              particularly interested in explainable and ethical AI, ensuring every model I build
              aligns with transparency and human-centered design principles.
            </p>
            <p>
              I recently lead a project at the Canadian Robotics and Artificial Intelligence Ethical
              Design Lab <a href="https://www.craiedl.ca/">(CRAiEDL)</a>, where I developed and
              containerized AI pipelines, integrated MLflow, and contributed to research on
              transparent, auditable model reporting. Previously, at{' '}
              <a href="https://www.persistent.com/">Persistent Systems</a>, I built NLP-based
              medical data extraction systems and automated image validation pipelines, helping
              reduce manual workloads by over 70% and improving operational efficiency.
            </p>

            <p>
              Outside of work, I enjoy exploring intersections between AI and creativity — whether
              that’s optimizing computer-vision models like{' '}
              <a href="https://docs.ultralytics.com/models/yolo12/">YOLOv12</a> , developing{' '}
              <a href="https://dialogflow.cloud.google.com/">Dialogflow</a>+{' '}
              <a href="https://gemini.google.com/app">Gemini-powered chatbots</a>, or experimenting
              with edge computing on{' '}
              <a href="https://www.raspberrypi.com/products/raspberry-pi-4-model-b/">
                Raspberry Pi
              </a>{' '}
              and <a href="https://developers.google.com/coral">Coral TPU</a>. I believe great
              engineering combines curiosity, precision, and empathy — and I aim to bring all three
              into every system I design.{' '}
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
